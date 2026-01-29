# Weeb – Blog Web

# Présentation du projet

Weeb est un projet de blog web réalisé dans un cadre pédagogique.  
Le projet est composé d’un frontend en React et d’un backend en Django exposant une API REST.

Les visiteurs peuvent consulter les articles publiés, tandis que la gestion du contenu est assurée via une interface d’administration sécurisée.



# Technologies utilisées

- Frontend : React
- Backend : Django
- API : Django REST Framework
- Authentification : JWT (JSON Web Token)
- Base de données : SQLite


# Fonctionnalités principales

- Consultation publique des articles
- Authentification des utilisateurs
- Génération et utilisation de JWT
- Création d’articles protégée par authentification
- Interface d’administration Django pour la gestion des articles et des utilisateurs


------------------------------------------------------------------------------------------------------------


# Lancer le backend (Django)

1. Placer dans le dossier backend (bash):
cd backend

2. Créer et activer un environnement virtuel :
python -m venv venv
source venv/bin/activate

3. Installer les dépendances :
pip install -r requirements.txt

4. Appliquer les migrations :
python manage.py migrate

5. Lancer le serveur :
python manage.py runserver

Le backend est accessible à l’adresse suivante :
http://127.0.0.1:8000


------------------------------------------------------------------------------------------------------------

# Lancer le frontend (React)

1. Placer dans le dossier frontend 
cd frontend

2. Installer les dépendances 
npm install

3. Lancer l’application 
npm run dev

Le frontend est accessible à l’adresse suivante :
http://localhost:5175/


# Accès administrateur

L’interface d’administration Django est accessible via :
http://127.0.0.1:8000/admin/
