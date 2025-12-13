import { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Portfolio | Sample Projects",
    description:
        "View sample projects and past work in Python, R, data analysis, machine learning, and web development.",
};

const PORTFOLIO_ITEMS = [
    {
        title: "SVM Custom Implementation",
        category: "Machine Learning",
        desc: "Custom implementation of Support Vector Machine for regression and classification tasks with multiple kernels.",
        tags: ["Python", "ML", "Scikit-learn"],
    },
    {
        title: "Climate Data Timeseries",
        category: "Data Analysis",
        desc: "Predictive analysis of temperature and rainfall data using ARIMA and Prophet models.",
        tags: ["Python", "R", "Timeseries"],
    },
    {
        title: "Gapminder Visualization",
        category: "Data Visualization",
        desc: "Interactive dashboard visualizing global development indicators including GDP and life expectancy.",
        tags: ["R", "Shiny", "Plotly"],
    },
    {
        title: "Employment Analysis",
        category: "Statistical Analysis",
        desc: "Comprehensive analysis of employment trends with statistical insights across sectors and regions.",
        tags: ["R", "Python", "Statistics"],
    },
    {
        title: "AI Course Learning App",
        category: "Web Development",
        desc: "AI-powered web application for educators to manage course learning outcomes and curriculum mapping.",
        tags: ["React", "TypeScript", "AI/ML"],
    },
    {
        title: "Movie Database System",
        category: "Database",
        desc: "Comprehensive movie database application with advanced search and beautiful professional UI.",
        tags: ["Python", "Streamlit", "SQLite"],
    },
];

export default function PortfolioPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Sample Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A selection of projects showcasing our expertise in programming,
                        data analysis, and web development.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PORTFOLIO_ITEMS.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                            >
                                {/* Placeholder image area */}
                                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    <span className="text-6xl opacity-50">{"</>"}</span>
                                </div>

                                <div className="p-6">
                                    <span className="text-sm text-primary font-medium">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{item.desc}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Want Something Similar?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let us know your project requirements and we&apos;ll create
                        something amazing for you.
                    </p>
                    <a
                        href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Hi, I saw your portfolio and I'd like to discuss a project.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>
        </>
    );
}
