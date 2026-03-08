from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny

from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Article, ContactMessage
from .serializers import ArticleSerializer, ContactMessageSerializer


class ArticleListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/articles/ → liste des articles, du plus récent au plus ancien
    POST /api/articles/ → créer un article (authentification requise)
    """
    queryset = Article.objects.all().order_by("-created_at")
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        """Associe automatiquement l'auteur connecté à l'article créé."""
        serializer.save(author=self.request.user)


class ArticleRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/articles/<id>/ → retourne un article spécifique
    PUT    /api/articles/<id>/ → modifie complètement un article (authentification requise)
    PATCH  /api/articles/<id>/ → modifie partiellement un article (authentification requise)
    DELETE /api/articles/<id>/ → supprime un article (authentification requise)
    """
    queryset = Article.objects.all().order_by("-created_at")
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ContactListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/contact/ → retourne la liste de tous les messages de contact
    POST /api/contact/ → enregistre un message et calcule le score de satisfaction
    """
    queryset = ContactMessage.objects.all().order_by("-created_at")
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        """Analyse la satisfaction du message avant de le sauvegarder en base."""
        from .ml import analyze_satisfaction
        message = self.request.data.get('message', '')
        satisfaction = analyze_satisfaction(message)
        serializer.save(satisfaction=satisfaction)


@api_view(["POST"])
def register(request):
    """
    Crée un nouveau compte utilisateur.
    Champs requis : username, email, password
    """
    User = get_user_model()

    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if not username or not email or not password:
        return Response(
            {"error": "Tous les champs sont obligatoires"},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(username=username).exists():
        return Response(
            {"error": "Nom d'utilisateur déjà utilisé"},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )

    user.is_active = True
    user.role = "USER"
    user.save()

    return Response({
        "id": user.id,
        "username": user.username,
        "message": "Compte créé avec succès"
    }, status=status.HTTP_201_CREATED)


@api_view(["POST"])
def login(request):
    """
    Authentifie un utilisateur et retourne un token JWT.
    Champs requis : username, password
    """
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response(
            {"error": "Username et mot de passe requis"},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = authenticate(username=username, password=password)

    if user is None:
        return Response(
            {"error": "Identifiants incorrects"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    if not user.is_active:
        return Response(
            {"error": "Compte désactivé"},
            status=status.HTTP_403_FORBIDDEN
        )

    refresh = RefreshToken.for_user(user)

    return Response({
        "access": str(refresh.access_token),
        "role": user.role
    })