// data.js

const projectsData = [

  {
    id: "stackoverflow2024",
    titre: "Analyse du paysage technologique 2024 – Stack Overflow Developer Survey",

    tags: [
      "Data Analysis",
      "EDA",
      "Data Cleaning",
      "Survey Analysis",
      "Tech Trends",
      "Web Scraping",
      "API Integration",
      "Python Visualization",
      "Python",
      "Data Wrangling"
    ],

    resumeCourt: 
        "Analyse complète du Stack Overflow Survey 2024 : pipeline de nettoyage, exploration avancée, visualisations professionnelles et insights stratégiques sur les pratiques technologiques.",

    resumeDetail: 
        "Projet analytique structuré visant à comprendre en profondeur l’écosystème technologique mondial en 2024. Le travail inclut : traitement d’un dataset de plus de 65 000 répondants, nettoyage avancé, normalisation, gestion des valeurs manquantes, analyse descriptive, extraction de tendances et construction de visualisations de haut niveau. L’étude couvre les usages réels des langages, les préférences technologiques, les niveaux de satisfaction, les salaires, les profils professionnels, ainsi que des analyses croisées (pays, expérience, statut, industrie). Le projet intègre également des données externes via API et web scraping pour enrichir l’analyse. Livrables : notebooks documentés, pipeline analytique, graphiques exploitables et rapport final.",

    lienGithub: "https://github.com/salma91AFG/Technology-Trends-Analytics",
    image: "img/stackoverflow.png"
  },
  {
    id: "olist-wrangling",
    titre: "Analyse Logistique & Satisfaction Client – Données E-commerce (Dataset Kaggle)",
    tags: ["Python", "EDA", "Data Wrangling","Data Analysis","EDA", "Data Cleaning","E-commerce"],
    resumeCourt: "Nettoyage et transformation d’un dataset e-commerce avec Python : normalisation, traitement des valeurs manquantes, création d’indicateurs logistiques et analyse des facteurs qui influencent la satisfaction client.",
    resumeDetail: "Projet de préparation et d’analyse du dataset Olist (e-commerce brésilien). Travail complet de data wrangling : correction des types, normalisation des textes, suppression des doublons et traitement des valeurs manquantes. Création de variables clés telles que la durée réelle de livraison, le retard, le montant total de commande et les indicateurs de performance logistique. Jointures multi-tables pour enrichir les données clients. Analyse exploratoire axée sur la satisfaction : impact du retard, catégories de produits à risque, performance des vendeurs et dynamique des livraisons.",
    lienGithub: "https://github.com/salma91AFG/data_wrangling.git",
    image: "img/dataWrangling.png"
  },
  {
    id: "survey-rapport2024",
    titre: "Analyse du paysage technologique 2024 - Rapport Power BI",
    tags: ["Power Query", "Power BI", "Visualisation","DAX", "Data Analysis","Data Cleaning","Survey Analysis","Tech Trends",],
    resumeCourt: "Analyse interactive du paysage technologique 2024 avec Power BI : profils des développeurs, usage des langages, écosystème technologique et indicateurs de marché issus du Stack Overflow Developer Survey.",
    resumeDetail: "Projet de Business Intelligence basé sur le Stack Overflow Developer Survey 2024. Exploitation d’un dataset préalablement nettoyé en Python, chargé via script Python dans Power BI. Conception d’un modèle analytique structuré en schéma en étoiles, avec tables de faits et dimensions dérivées d’une table source unique et désactivation des tables intermédiaires. Développement de mesures DAX robustes pour calculer pourcentages d’utilisation, salaires moyens, comparaisons usage vs demande et gestion avancée du contexte de filtre. Construction d’un rapport interactif orienté storytelling, structuré autour du profil des développeurs, des langages de programmation et de l’écosystème technologique, afin de fournir une lecture claire et décisionnelle des tendances du marché technologique en 2024.",
    lienGithub: "https://github.com/salma91AFG/trend_technology_rapport_powerBI",
    image: "img/rapportPowerBi.png"
  },
{
  id: "powerbi-geo-weather-app",

  titre: "Power BI Data App – Exploration géographique et météo mondiale",

  tags: [
    "Power BI",
    "Power Query",
    "API Integration",
    "REST API",
    "Data Modeling",
    "DAX",
    "Data Visualization",
    "Geospatial Analysis",
    "Interactive Dashboard",
    "UX Analytics"
  ],

  resumeCourt:
    "Application analytique Power BI permettant l’exploration interactive des pays du monde à travers des données géographiques, démographiques et météorologiques en temps réel, intégrées via APIs REST.",

  resumeDetail:
    "Conception d’une application analytique Power BI orientée exploration des données plutôt que rapport d’analyse classique. Le projet repose sur l’intégration de deux APIs REST (RestCountries et Open-Meteo) via Power Query, avec nettoyage, transformation et normalisation de données complexes (listes, structures imbriquées, valeurs multiples). Mise en place d’un modèle centré sur l’entité Pays, enrichi par des tables de référence (langues, continents, monnaies, codes météo). Développement de mesures DAX pour la gestion dynamique des métriques (population, superficie, température, vent). Construction d’une carte choroplèthe interactive avec filtres avancés et infobulles personnalisées intégrant données socio-démographiques, météo temps réel, drapeaux et icônes météo dynamiques. Le projet met l’accent sur l’UX, la navigation analytique et la consommation de données externes.",

  lienGithub: "https://github.com/salma91AFG/PowerBI-World-Geo-Weather",
  image: "img/geoWeatherPowerBI.png"
},
{
  id: "powerbi-sales-dashboard",

  titre: "Power BI – Tableau de bord décisionnel de performance commerciale",

  tags: [
    "Power BI",
    "Power Query",
    "DAX",
    "Business Intelligence",
    "Sales Dashboard",
    "KPI Tracking",
    "Star Schema",
    "Data Modeling",
    "Row Level Security",
    "Data Visualization"
  ],

  resumeCourt:
    "Tableau de bord Power BI dédié au pilotage des performances commerciales, au suivi des ventes et à l’analyse des commandes annulées, avec KPI, filtres avancés et navigation interactive.",

  resumeDetail:
    "Projet de Business Intelligence orienté pilotage opérationnel des ventes. À partir d’un fichier CSV brut, les données ont été nettoyées, typées et normalisées dans Power Query, puis modélisées selon un schéma en étoile avec une table de faits (Commandes) et des dimensions dédiées (Clients, Produits, Régions, Date). Création d’une table de mesures centralisant les KPI clés (chiffre d’affaires, nombre de commandes, quantités vendues, commande moyenne, taux d’annulation). Développement de deux tableaux de bord : suivi global des ventes et analyse spécifique des commandes annulées. Mise en œuvre de visualisations avancées (courbes, barres, donut, treemap, ruban), de tooltips personnalisées, de signets (bookmarks), d’un menu de navigation, de règles de sécurité RLS et d’une version mobile du rapport. Le tableau de bord est conçu pour un usage décisionnel récurrent par des équipes commerciales ou de gestion.",

  lienGithub: "https://github.com/salma91AFG/PowerBI-Sales-Performance",
  image: "img/salesDashboardPowerBI.png"
}
,
 {
  id: "excel-sales-bi-dashboard",

  titre: "Excel BI – Tableau de bord décisionnel de performance commerciale",

  tags: [
    "Excel",
    "Power Query",
    "Power Pivot",
    "DAX",
    "Business Intelligence",
    "Sales Performance",
    "Star Schema",
    "Data Modeling",
    "KPI Tracking",
    "Decision Support"
  ],

  resumeCourt:
    "Tableau de bord décisionnel construit sous Excel pour l’analyse de la performance des ventes, basé sur Power Query, Power Pivot et DAX, destiné aux PME.",

  resumeDetail:
    "Projet de Business Intelligence démontrant l’utilisation avancée d’Excel comme outil décisionnel pour les PME. Les données sont préparées et fiabilisées via Power Query (ETL), puis modélisées dans Power Pivot selon un schéma en étoile avec une table de faits Ventes et des dimensions Produits, Magasins et Dates. L’ensemble de la logique métier est centralisé dans des mesures DAX (chiffre d’affaires, quantités, marges, croissance YoY, part des ventes). Le dashboard interactif permet le suivi de la performance commerciale, la comparaison des magasins et des produits, ainsi que l’analyse temporelle, sans aucun calcul métier dans les cellules Excel. Le projet met en avant une approche structurée, maintenable et orientée prise de décision, adaptée aux contraintes des petites et moyennes entreprises.",

  lienGithub: "https://github.com/salma91AFG/sales-performance-dashboard-excel",
  image: "img/ExcelDashbord.png"
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
    titre: "PL-300 Power BI Data Analyst – Microsoft 2026",
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
