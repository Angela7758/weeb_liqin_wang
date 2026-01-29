from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Article, ContactMessage


# Récupérer le modèle User
User = get_user_model()

# Enregistrer les utilisateurs
admin.site.register(User)

# Enregistrer les articles
admin.site.register(Article)

# Enregistrer les messages de contact
admin.site.register(ContactMessage)
