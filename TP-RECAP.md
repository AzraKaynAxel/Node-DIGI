# TP Récapitulatif - API de Gestion de Cours en Ligne

**Objectif :** Créer une API REST complète pour gérer une plateforme de cours en ligne
---

Vous devez développer une API pour une plateforme de cours en ligne. Cette API permettra de gérer des cours.

---

## Fonctionnalités attendues

### Entités

#### 1. **Cours** (Course)
- `id` : Integer (auto-incrémenté)
- `title` : String (requis)
- `description` : Text (requis)
- `duration` : Integer (en minutes, requis)
- `level` : String (débutant, intermédiaire, avancé)
- `price` : Float (requis)
- `published` : Boolean (par défaut false)
- `instructor` : String (requis)
- `categoryId` : Integer (clé étrangère vers Category)
- `createdAt` : Date
- `updatedAt` : Date

#### 2. **Catégorie** (Category)
- `id` : Integer (auto-incrémenté)
- `name` : String (requis, unique)
- `description` : Text
- `createdAt` : Date
- `updatedAt` : Date

**Relation :** Une catégorie peut avoir plusieurs cours. Un cours appartient à une seule catégorie.

#### 3. **Utilisateur** (User)
- `id` : Integer (auto-incrémenté)
- `username` : String (requis, unique)
- `email` : String (requis, unique)
- `password` : String (hashé avec bcrypt)
- `role` : String (instructor, admin)
- `createdAt` : Date
- `updatedAt` : Date

---

## Routes à implémenter

### Authentification
- `POST /auth/register` - Inscription d'un utilisateur
- `POST /auth/login` - Connexion et génération du token JWT

### Cours
- `GET /courses` - Récupérer tous les cours publiés (public)
- `GET /courses/:id` - Récupérer un cours par son ID (public)
- `GET /courses/level/:level` - Récupérer les cours par niveau (public)
- `POST /courses` - Créer un cours (protégé - instructor ou admin)
- `PUT /courses/:id` - Modifier un cours (protégé - instructor ou admin)
- `DELETE /courses/:id` - Supprimer un cours (protégé - admin uniquement)

### Catégories
- `GET /categories` - Récupérer toutes les catégories (public)
- `GET /categories/:id` - Récupérer une catégorie avec ses cours (public)
- `POST /categories` - Créer une catégorie (protégé - admin uniquement)

---

## Système d'authentification

Attention : les rôles sont en BONUS. 
Au minimum, mettre en place l'authentification avec JWT (protégé ou public comme vu dans les exercices)
En bonus, mettre en place 2 rôles et nuancer les accès (voir la partie juste au-dessus avec les routes et les accès)

### Rôles
- **instructor** : Peut créer et modifier des cours
- **admin** : Accès complet (création, modification, suppression)

### JWT
- Utiliser `jsonwebtoken` pour générer les tokens
- Le token doit contenir : `id`, `username`, `role`
- Durée de validité : 24h

---

## Validation des données

Utiliser `express-validator` pour valider :

### Cours
- `title` : non vide, min 3 caractères
- `description` : non vide, min 10 caractères
- `duration` : nombre positif
- `level` : doit être "débutant", "intermédiaire" ou "avancé"
- `price` : nombre positif ou 0
- `instructor` : non vide
- `categoryId` : doit exister dans la base

### Catégorie
- `name` : non vide, min 3 caractères, unique
- `description` : optionnel

### User
- `username` : non vide, min 3 caractères, unique
- `email` : format email valide, unique
- `password` : min 6 caractères
- `role` : doit être , "instructor" ou "admin"

---

## BONUS (optionnel)

### Bonus 2 : Recherche avancée
- `GET /courses/search?keyword=...` - Rechercher des cours par mot-clé (titre ou description)
- `GET /courses/filter?minPrice=...&maxPrice=...` - Filtrer par prix

### Bonus 3 : Statistiques
- `GET /stats/courses` - Nombre total de cours par catégorie (admin)
- `GET /stats/users` - Nombre d'utilisateurs par rôle (admin)

---
