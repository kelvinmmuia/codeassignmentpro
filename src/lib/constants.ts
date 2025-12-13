// Site-wide constants and configuration

export const SITE_CONFIG = {
    name: "CodeAssignment Pro",
    tagline: "Expert Programming & Data Analysis Help",
    domain: "codeassignment.pro",
    url: "https://codeassignment.pro",
};

export const CONTACT = {
    whatsapp: "+254728450288",
    whatsappLink: "https://wa.me/254728450288",
    email: "kelvinmwaka@gmail.com",
    buymeacoffee: "https://buymeacoffee.com/kelvinmwakh",
};

export const TRUST_BADGES = [
    { label: "6+ Years Experience", icon: "trophy" },
    { label: "500+ Projects Delivered", icon: "check-circle" },
    { label: "24/7 WhatsApp Support", icon: "message-circle" },
    { label: "Money-Back Guarantee", icon: "shield" },
];

export const SERVICES = [
    {
        id: "python-help",
        name: "Python Programming",
        shortDesc: "Scripts, automation, data processing, ML models",
        icons: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        ],
        keywords: ["python assignment help", "python homework", "python programming"],
        pricing: [
            { size: "XS", scope: "Simple scripts, basic automation", price: 15, originalPrice: 20 },
            { size: "S", scope: "Data processing, file handling", price: 30, originalPrice: 40 },
            { size: "M", scope: "API integration, web scraping", price: 50, originalPrice: 65 },
            { size: "L", scope: "ML models, full applications", price: 80, originalPrice: 100 },
            { size: "XL", scope: "Complex systems, multi-module", price: 150, originalPrice: 190 },
        ],
    },
    {
        id: "data-analysis",
        name: "Data Analysis",
        shortDesc: "Excel, statistics, visualization, dashboards",
        icons: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        ],
        keywords: ["data analysis help", "statistics homework", "excel data analysis"],
        pricing: [
            { size: "XS", scope: "Basic Excel/spreadsheet analysis", price: 15, originalPrice: 20 },
            { size: "S", scope: "Statistical analysis, charts", price: 30, originalPrice: 40 },
            { size: "M", scope: "Dashboard creation, reports", price: 55, originalPrice: 70 },
            { size: "L", scope: "Predictive modeling, full reports", price: 90, originalPrice: 115 },
            { size: "XL", scope: "Enterprise analytics, multiple datasets", price: 160, originalPrice: 200 },
        ],
    },
    {
        id: "r-programming",
        name: "R Programming",
        shortDesc: "Statistics, ggplot, Shiny apps, research",
        icons: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
        ],
        keywords: ["R programming help", "R statistics", "ggplot visualization"],
        pricing: [
            { size: "XS", scope: "Basic R scripts, simple plots", price: 15, originalPrice: 20 },
            { size: "S", scope: "Statistical tests, ggplot visualizations", price: 35, originalPrice: 45 },
            { size: "M", scope: "Regression, hypothesis testing", price: 55, originalPrice: 70 },
            { size: "L", scope: "Advanced statistics, Shiny apps", price: 95, originalPrice: 120 },
            { size: "XL", scope: "Research-grade analysis, publications", price: 170, originalPrice: 215 },
        ],
    },
    {
        id: "sql-database",
        name: "SQL & Database",
        shortDesc: "Queries, design, optimization, procedures",
        icons: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        ],
        keywords: ["SQL assignment help", "database design", "SQL queries"],
        pricing: [
            { size: "XS", scope: "Simple queries, basic CRUD", price: 12, originalPrice: 16 },
            { size: "S", scope: "Joins, aggregations, views", price: 25, originalPrice: 33 },
            { size: "M", scope: "Database design, optimization", price: 45, originalPrice: 58 },
            { size: "L", scope: "Complex schemas, procedures", price: 75, originalPrice: 95 },
            { size: "XL", scope: "Full database architecture", price: 130, originalPrice: 165 },
        ],
    },
    {
        id: "machine-learning",
        name: "Machine Learning",
        shortDesc: "Models, training, pipelines, deployment",
        icons: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
        ],
        keywords: ["machine learning help", "ML assignment", "AI programming"],
        pricing: [
            { size: "XS", scope: "Pre-built model usage", price: 20, originalPrice: 26 },
            { size: "S", scope: "Model training, basic tuning", price: 45, originalPrice: 58 },
            { size: "M", scope: "Custom algorithms, evaluation", price: 80, originalPrice: 100 },
            { size: "L", scope: "Production-ready pipelines", price: 130, originalPrice: 165 },
            { size: "XL", scope: "Research, novel approaches", price: 200, originalPrice: 250 },
        ],
    },
    {
        id: "web-development",
        name: "Web Development",
        shortDesc: "React, full-stack, APIs, responsive sites",
        icons: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        ],
        keywords: ["web development help", "React assignment", "full-stack programming"],
        pricing: [
            { size: "XS", scope: "Single page, static", price: 20, originalPrice: 26 },
            { size: "S", scope: "Multi-page, responsive", price: 45, originalPrice: 58 },
            { size: "M", scope: "Interactive, API integration", price: 80, originalPrice: 100 },
            { size: "L", scope: "Full-stack application", price: 140, originalPrice: 175 },
            { size: "XL", scope: "Complex platform", price: 250, originalPrice: 315 },
        ],
    },
];

export const FAQ_ITEMS = [
    {
        question: "How quickly can you complete my assignment?",
        answer: "Turnaround depends on complexity. Small tasks can be done within 24 hours, while larger projects typically take 3-7 days. Contact us on WhatsApp for a specific timeline.",
    },
    {
        question: "What if I'm not satisfied with the work?",
        answer: "We offer unlimited revisions until you're satisfied. If the work doesn't meet the agreed requirements, we provide a full refund.",
    },
    {
        question: "How do I make payments?",
        answer: "We accept payments through BuyMeACoffee for secure transactions. First-time customers can receive partial work before full payment.",
    },
    {
        question: "Is my assignment kept confidential?",
        answer: "Absolutely. We never share, resell, or publish any client work. Your privacy and academic integrity are our top priorities.",
    },
    {
        question: "Do you provide explanations with the code?",
        answer: "Yes! All deliverables include detailed comments and documentation so you can understand and learn from the solution.",
    },
    {
        question: "What programming languages do you support?",
        answer: "We specialize in Python, R, SQL, JavaScript, TypeScript, and related frameworks. We also handle Excel, MATLAB, SPSS, and other data tools.",
    },
];
