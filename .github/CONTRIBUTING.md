# Guide de Contribution

Merci de votre intérêt pour contribuer à SymfoBlog ! Ce document fournit des lignes directrices pour contribuer au projet.

## Comment contribuer

1. **Fork** le dépôt sur GitHub
2. **Clone** le projet sur votre machine
3. **Créez une branche** pour votre fonctionnalité (`git checkout -b feature/nom-de-la-fonctionnalite`)
4. **Committez** vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
5. **Push** vers la branche (`git push origin feature/nom-de-la-fonctionnalite`)
6. Ouvrez une **Pull Request**

## Standards de code

Ce projet suit les standards de codage PSR-1, PSR-2 et PSR-4.

### PHP

- Utilisez les types stricts (`declare(strict_types=1);`)
- Documentez vos classes et méthodes avec des commentaires PHPDoc
- Suivez les principes SOLID autant que possible

### Symfony

- Respectez les bonnes pratiques Symfony
- Utilisez les annotations ou attributs pour configurer vos entités et contrôleurs
- Maintenez une séparation claire entre la logique métier et la présentation

## Tests

Avant de soumettre une Pull Request, assurez-vous que :

1. Vos modifications ne cassent pas les tests existants
2. Vous avez écrit des tests pour vos nouvelles fonctionnalités
3. Tous les tests passent : `php bin/phpunit`

## Rapporter des bugs

Si vous trouvez un bug, veuillez créer une issue sur GitHub avec :

- Une description claire du bug
- Les étapes pour reproduire le problème
- Le comportement attendu
- Des captures d'écran si nécessaire
- Toute information supplémentaire pertinente

## Demander des fonctionnalités

Si vous souhaitez proposer une nouvelle fonctionnalité :

1. Vérifiez d'abord que cette fonctionnalité n'est pas déjà en cours de développement
2. Ouvrez une issue expliquant la fonctionnalité proposée
3. Discutez de l'implémentation avec les mainteneurs du projet

## Merci !

Votre contribution aide à faire de SymfoBlog un meilleur projet pour tous. Nous apprécions votre temps et vos efforts ! 