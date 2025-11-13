// data.js

const projectsData = [
  {
    id: "dashboard-ventes",
    titre: "Dashboard Ventes",
    tags: ["BI", "Web"],
    resumeCourt: "Power BI, DAX, storytelling sur les performances commerciales.",
    resumeDetail: "Dashboard interactif pour suivre le chiffre d’affaires, la marge, les promotions et les performances par région et produit.",
    lienGithub: "https://github.com/TON-UTILISATEUR/TON-REPO-DASHBOARD",
    image: "img/dashboard-ventes.png"
  },
  {
    id: "olist-wrangling",
    titre: "Analyse Logistique & Satisfaction Client – Données E-commerce (Dataset Kaggle)",
    tags: ["Python", "EDA", "Data Wrangling"],
    resumeCourt: "Nettoyage et transformation d’un dataset e-commerce avec Python : normalisation, traitement des valeurs manquantes, création d’indicateurs logistiques et analyse des facteurs qui influencent la satisfaction client.",
    resumeDetail: "Projet de préparation et d’analyse du dataset Olist (e-commerce brésilien). Travail complet de data wrangling : correction des types, normalisation des textes, suppression des doublons et traitement des valeurs manquantes. Création de variables clés telles que la durée réelle de livraison, le retard, le montant total de commande et les indicateurs de performance logistique. Jointures multi-tables pour enrichir les données clients. Analyse exploratoire axée sur la satisfaction : impact du retard, catégories de produits à risque, performance des vendeurs et dynamique des livraisons.",
    lienGithub: "https://github.com/salma91AFG/data_wrangling.git",
    image: "img/dataWrangling.png"
  },
  {
    id: "Conception BDD CRM",
    titre: "Site vitrine de portfolio",
    tags: ["Web"],
    resumeCourt: "Site statique HTML/CSS/JS pour présenter mon profil.",
    resumeDetail: "Page one-page avec navigation fluide, filtres sur les projets et déploiement via GitHub Pages.",
    lienGithub: "https://github.com/TON-UTILISATEUR/TON-REPO-PORTFOLIO",
    image: "img/portfolio.png"
  }

  
];

// tu peux faire pareil pour les compétences si tu veux automatiser aussi
const skillsData = [
  {
    categorie: "Bases de données",
    items: [
      "Exploitation des données (Oracle, SQL Server, PostgreSQL, MySQL, DB2)",
      "SQL avancé :fonctions, Procedures stoquées, jointures, agrégations, scripts, vues",
      "Modélisation relationnelle (MERISE, UML)"
    ]
  },
  {
    categorie: "Analyse & Python",
    items: [
      "Nettoyage, préparation et exploration des données",
      "Python : Pandas, NumPy, Matplotlib, Seaborn",
      "Visualisation & reporting (Power BI, Cognos, Excel)"
    ]
  },
  {
    categorie: "Automatisation & Outils",
    items: [
      "Power Automate, Power Apps, Office 365",
      "Création de flux et formulaires automatisés",
      "Trello & outils collaboratifs"
    ]
  },
  {
    categorie: "Systèmes & Cloud",
    items: [
      "Windows Server, environnements virtualisés (VMware)",
      "Azure : Entra ID, Intune, gestion des accès",
      "Notions : Réseaux, DNS, Active Directory, VPN"
    ]
  },
  {
    categorie: "Qualités professionnelles",
    items: [
      "Rigueur, organisation, documentation",
      "Communication claire avec métiers & techniques",
      "Adaptation rapide et apprentissage continu"
    ]
  }
];

const formationsData = [
  {
    titre: "Programme d'analyste de données – Npower Canada (2025)",
    resume: "Formation pratique en analyse de données : préparation de données, automatisation, tableaux de bord Power BI et optimisation des processus décisionnels."
  },
  {
    titre: "Maîtrise en Systèmes d’Information – ESSS (2018)",
    resume: "Formation axée sur la gestion des systèmes d’information de la sécurité sociale et des assurances complémentaires, la modélisation des processus, la qualité des données et l’analyse décisionnelle."
  },
  {
    titre: "Baccalauréat en Génie Informatique – ESI (2013)",
    resume: "Conception des systèmes d’information, bases de données, programmation, analyse de données et architecture informatique."
  }
];

const certificationsData = [
  {
    titre: "PL-300 Power BI Data Analyst – Microsoft (En cours)",
    resume: "Modélisation de données, DAX et création de rapports interactifs orientés décision."
  },
  {
    titre: "IBM Data Analyst – Coursera (2025)",
    resume: "Analyse de données avec SQL et Python, nettoyage, visualisation et bonnes pratiques de reporting."
  },
  {
    titre: "Azure AI-900 – Microsoft (2025)",
    resume: "Bases de l’intelligence artificielle, services Azure cognitifs et applications pratiques."
  }
];
