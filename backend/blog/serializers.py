from rest_framework import serializers
from .models import Article, ContactMessage


class ArticleSerializer(serializers.ModelSerializer):
    """Sérialise les données d'un article pour l'API."""
    author = serializers.CharField(source="author.username", read_only=True)

    class Meta:
        model = Article
        fields = ["id", "title", "content", "author", "created_at"]
        read_only_fields = ["id", "author", "created_at"]


class ContactMessageSerializer(serializers.ModelSerializer):
    """Sérialise les données d'un message de contact pour l'API."""
    class Meta:
        model = ContactMessage
        fields = "__all__"