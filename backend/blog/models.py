from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


# Utilisateur
class User(AbstractUser):
    role = models.CharField(max_length=20, default="USER")

    # L'utilisateur est actif par défaut
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.username


# Article
class Article(models.Model):
    # Titre de l'article
    title = models.CharField(max_length=200)

    # Contenu de l'article
    content = models.TextField()

    # Auteur de l'article (un utilisateur)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    # Date de création
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# Message de contact
class ContactMessage(models.Model):
    # Nom de la personne
    name = models.CharField(max_length=100)

    # Email
    email = models.EmailField()

    # Message
    message = models.TextField()

    # Niveau de satisfaction
    satisfaction = models.IntegerField(default=0)

    # Date d'envoi
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
