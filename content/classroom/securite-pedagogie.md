---
title: "Sécurité & pédagogie"
description: "Langlink Classroom est conçu pour des élèves mineurs. RGPD, hébergement, modération, rôles — chaque choix est documenté et vérifiable."
date: 2024-01-01
draft: false
---

## Un outil pensé pour la salle de classe. Pas adapté depuis autre chose.

Langlink Classroom n'est pas une plateforme grand public avec un mode « école » ajouté après coup. Elle a été conçue dès le départ pour un usage pédagogique avec des élèves mineurs.

Chaque décision technique, chaque choix d'architecture, chaque donnée collectée a été pesé à l'aune d'une seule question : **est-ce que j'accepterais ça pour mes propres enfants ?**

---

## Conformité RGPD

### Qui est responsable de traitement ?

**Langlink** est responsable de traitement au sens du RGPD pour les données collectées sur sa plateforme. L'établissement scolaire agit en tant que **responsable conjoint** pour les données de ses propres élèves.

Un accord de traitement des données (DPA) est disponible sur demande, signable avant tout déploiement.

### Quelles données sont collectées sur les élèves ?

| Donnée | Collectée | Justification |
|--------|-----------|---------------|
| Prénom (ou pseudonyme) | ✅ Oui | Identification dans le groupe classe |
| Email | ❌ Non | L'enseignant crée les comptes — pas les élèves |
| Mot de passe | ✅ Hashé (bcrypt) | Authentification uniquement |
| Contributions pédagogiques | ✅ Oui | Cœur du dispositif |
| Données de navigation | ⚠️ Minimales | Logs techniques anonymisés, 30 jours |
| Localisation | ❌ Non | Jamais collectée |
| Photos / vidéos | ❌ Non | Aucun upload de média personnel |

> **Principe de minimisation appliqué** : nous ne collectons que ce qui est strictement nécessaire au fonctionnement pédagogique.

### Où sont hébergées les données ?

**En Europe, sur des serveurs conformes au RGPD.**

Aucune donnée ne transite vers des serveurs hors Union Européenne. Pas de sous-traitance vers des prestataires américains soumis au Cloud Act pour les données élèves.

### Durée de conservation

- Données élèves actifs : durée de l'année scolaire + 30 jours
- Données après clôture du compte enseignant : suppression sous 60 jours
- Droit à l'effacement : exécutable sur simple demande, sous 72h

---

## Qui accède à quoi ?

### Rôles et permissions

| Rôle | Accès |
|------|-------|
| **Élève** | Ses propres contributions + celles de son groupe classe |
| **Enseignant** | Toutes les contributions de sa classe + tableau de bord |
| **Administrateur établissement** | Vue agrégée de toutes les classes + exports |
| **Langlink (support)** | Accès technique sur ticket, tracé, révocable |

**Les élèves ne peuvent pas :**
- Voir les données d'élèves d'autres établissements
- Contacter directement d'autres utilisateurs hors de leur groupe
- Modifier ou supprimer les contributions des autres

---

## Modération

### Qui modère ?

**L'enseignant est le premier modérateur** de sa classe. Il peut à tout moment :
- Masquer une contribution
- Exclure temporairement un élève de l'espace collaboratif
- Signaler un contenu à l'équipe Langlink

### Qu'est-ce qui est filtré automatiquement ?

Un filtre de contenu analyse les contributions avant publication et bloque automatiquement :
- Contenu à caractère explicitement sexuel
- Contenu haineux ou discriminatoire (liste de termes mise à jour mensuellement)
- Liens vers des domaines externes non approuvés

Toute contribution bloquée est signalée à l'enseignant, pas supprimée — l'enseignant garde la main.

### Langlink Classroom est-il accessible depuis l'extérieur ?

L'espace classe est **fermé par défaut**. Un élève ne peut rejoindre une classe qu'avec un code d'invitation généré par l'enseignant. Aucune inscription ouverte, aucun moteur de recherche interne.

---

## Ce que Langlink Classroom n'est pas

```
❌ Un réseau social
❌ Une messagerie instantanée entre élèves
❌ Une plateforme de partage de médias personnels
❌ Un outil de surveillance des élèves
❌ Un produit monétisé par la revente de données
```

---

## Questions fréquentes des directions et DPO

**Faut-il l'accord des parents ?**
Oui, pour les élèves mineurs. Un modèle de lettre d'information parentale est fourni avec chaque déploiement pilote. L'établissement reste responsable de la collecte de ce consentement.

**Peut-on déployer sans DSI ?**
Oui. Aucune installation locale, aucun accès réseau particulier requis. Un navigateur moderne et une connexion HTTPS suffisent.

**Que se passe-t-il si Langlink ferme ?**
L'enseignant peut exporter toutes les contributions de sa classe en CSV à tout moment. Les données ne sont jamais captives.

**Y a-t-il un DPA (accord de traitement) signable ?**
Oui, disponible sur demande avant tout déploiement. Contactez-nous à [contact@langlink.app](mailto:contact@langlink.app).

**Qui contacter en cas d'incident de sécurité ?**
Écrivez à [contact@langlink.app](mailto:contact@langlink.app) — nous accusons réception sous 4h ouvrées. Tout incident est notifié à la CNIL dans les délais légaux (72h).

---

## Prêt à évaluer Langlink Classroom dans votre établissement ?

[Demander un pilote gratuit →](/classroom/demo-pilote/)

*Le pilote est gratuit, sans engagement, et comprend un accompagnement pédagogique d'un semestre.*