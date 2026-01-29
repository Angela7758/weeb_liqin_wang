from django.urls import path
from .views import (
    ArticleListCreateView,
    ArticleRetrieveUpdateDeleteView,
    ContactListCreateView,
    register,
    login,
)


urlpatterns = [

    # Articles
    path("articles/", ArticleListCreateView.as_view()),
    path("articles/<int:pk>/", ArticleRetrieveUpdateDeleteView.as_view()),

    # Contact
    path("contact/", ContactListCreateView.as_view()),

    # Authentification
    path("auth/register/", register),
    path("auth/login/", login),
]
