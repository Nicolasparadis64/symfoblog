# 📝 SymfoBlog - Plateforme de Blog avec Symfony

<div align="center">
  <img src="https://symfony.com/logos/symfony_black_02.png" alt="Symfony Logo" width="250">
  
  <br>
  
  [![PHP](https://img.shields.io/badge/PHP-8.2-777BB4.svg?style=flat&logo=php&logoColor=white)](https://php.net)
  [![Symfony](https://img.shields.io/badge/Symfony-6.4-000000.svg?style=flat&logo=symfony&logoColor=white)](https://symfony.com/)
  [![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1.svg?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
  [![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED.svg?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
  [![Twig](https://img.shields.io/badge/Twig-Template-bacf29.svg?style=flat)](https://twig.symfony.com/)
</div>

## 📋 Présentation du Projet

SymfoBlog est une plateforme de blog complète développée avec le framework Symfony. Elle permet aux utilisateurs de publier, gérer et interagir avec du contenu dans un environnement sécurisé et convivial.

### 🎯 Objectif

Fournir une plateforme simple et efficace pour la publication de contenu avec des fonctionnalités avancées de catégorisation, de tagging et de commentaires.

### 🔍 Aperçu

SymfoBlog offre une expérience de blog complète avec une gestion fine des permissions, un système de catégorisation robuste et une interface administrateur intuitive.

## ✨ Fonctionnalités

### 👥 Gestion des Utilisateurs
- **Inscription et authentification** - Processus sécurisé pour créer un compte, se connecter et se déconnecter
- **Système de rôles** - Administrateurs, auteurs et lecteurs avec permissions spécifiques

### 📃 Gestion des Articles
- **Création d'articles** - Interface intuitive pour rédiger du contenu avec titre, corps, catégorie et tags
- **Modification et suppression** - Options de gestion pour les auteurs et administrateurs
- **Affichage flexible** - Classement par date, catégorie ou popularité

### 🗂️ Gestion des Catégories
- **Administration des catégories** - Ajout, modification et suppression par les administrateurs
- **Navigation par catégorie** - Filtrage intuitif du contenu

### 🏷️ Gestion des Tags
- **Système de tagging** - Possibilité d'ajouter plusieurs tags à chaque article
- **Navigation par tag** - Regroupement dynamique des articles par thématique

### 💬 Gestion des Commentaires
- **Système de commentaires** - Interaction entre utilisateurs sur les articles
- **Modération** - Outils pour maintenir des discussions constructives et respectueuses

### 🛠️ Tableau de Bord Administrateur
- **Vue d'ensemble des articles** - Gestion centralisée du contenu
- **Administration des utilisateurs** - Contrôle des comptes et des permissions

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-nom/symfoblog.git
cd symfoblog

# Créer le fichier .env.local avec les configurations suivantes
cat > .env.local << EOL
MYSQL_DATABASE=symfoblog
MYSQL_ROOT_PASSWORD=root
MYSQL_USER=app
MYSQL_PASSWORD=app

DATABASE_URL="mysql://app:app@database:3306/symfoblog?serverVersion=8.0.32&charset=utf8mb4"
EOL

# Lancer avec Docker
docker compose up -d

# Installer les dépendances Stimulus
docker compose exec php php bin/console importmap:install

# Installer les dépendances npm et construire les assets
docker compose exec php npm install
docker compose exec php npm run build

# Exécuter les migrations
docker compose exec php php bin/console doctrine:migrations:migrate
```

## 🔧 Accès aux Services

Une fois l'installation terminée, vous pouvez accéder aux différents services :

- Application Symfony : http://localhost:8000
- PHPMyAdmin : http://localhost:8080
  - Utilisateur : root
  - Mot de passe : root (ou celui défini dans .env.local)

## 🔧 Technologies Utilisées

<div align="center">
  <table>
    <tr>
      <td align="center" width="96">
        <img src="https://www.php.net/images/logos/new-php-logo.svg" width="48" height="48" alt="PHP" />
        <br>PHP 8.2
      </td>
      <td align="center" width="96">
        <img src="https://symfony.com/logos/symfony_black_02.png" width="48" height="48" alt="Symfony" />
        <br>Symfony 6.4
      </td>
      <td align="center" width="96">
        <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" width="48" height="48" alt="MySQL" />
        <br>MySQL 8.0
      </td>
      <td align="center" width="96">
        <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="48" height="48" alt="Docker" />
        <br>Docker
      </td>
    </tr>
    <tr>
      <td align="center" width="96">
        <img src="https://twig.symfony.com/images/twig-logo.png" width="48" height="48" alt="Twig" />
        <br>Twig
      </td>
      <td align="center" width="96">
        <img src="https://doctrine-project.org/images/doctrine-logo.svg" width="48" height="48" alt="Doctrine" />
        <br>Doctrine
      </td>
      <td align="center" width="96">
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="48" height="48" alt="Bootstrap" />
        <br>Bootstrap
      </td>
      <td align="center" width="96">
        <img src="https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg" width="48" height="48" alt="Webpack" />
        <br>Webpack
      </td>
    </tr>
  </table>
</div>

## 📊 Architecture du Projet

### Modèle de Données
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│    User     │     │   Article   │     │  Category   │
├─────────────┤     ├─────────────┤     ├─────────────┤
│ id          │     │ id          │     │ id          │
│ email       │     │ title       │     │ name        │
│ roles       │     │ content     │     │ description │
│ password    │     │ createdAt   │     └─────────────┘
│ firstname   │     │ updatedAt   │           ▲
│ lastname    │     │ user_id     │◀──────────┘
└─────────────┘     │ category_id │           
       ▲            └─────────────┘           
       │                   ▲                  
       │                   │                  
       │            ┌─────────────┐     ┌─────────────┐
       │            │   Comment   │     │     Tag     │
       └────────────┤ id          │     ├─────────────┤
                    │ content     │     │ id          │
                    │ createdAt   │     │ name        │
                    │ user_id     │     └─────────────┘
                    │ article_id  │           ▲
                    └─────────────┘           │
                                      ┌───────────────┐
                                      │ Article_Tag   │
                                      ├───────────────┤
                                      │ article_id    │
                                      │ tag_id        │
                                      └───────────────┘
```

## ��️ Captures d'écran

*Des captures d'écran de l'application seront ajoutées ici une fois le développement avancé.*

## 🧪 Tests

```bash
# Exécuter les tests unitaires
docker compose exec php bin/phpunit

# Exécuter les tests avec couverture de code
docker compose exec php bin/phpunit --coverage-html var/coverage
```

## 📜 Licence

Ce projet est distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à proposer une pull request.

---

<div align="center">
  <p>Développé avec ❤️ par <a href="https://github.com/Nicolasparadis64">nico</a></p>
</div> 