const { useEffect, useState } = React;
// Simple data objects make the website easier to update.
const profile = {
    name: "Akshat Khanna",
    shortName: "AK",
    role: "Frontend Developer",
    tagline: "Frontend Developer • IT-AIML Student",
    email: "khannaakshat48@gmail.com",
    github: "https://github.com/khanna419",
    resume: "assets/Akshat_Khanna_Resume.pdf",
    photo: "assets/akshat-photo.jpeg",
};
const navItems = [
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Experience", link: "#experience" },
    { label: "Contact", link: "#contact" },
];
const heroWords = [
    "clean websites",
    "responsive layouts",
    "React components",
    "useful projects",
];
const stats = [
    { value: "8.42", label: "Current CGPA" },
    { value: "3+", label: "Projects" },
    { value: "2", label: "Leadership Roles" },
    { value: "2027", label: "Graduation" },
];
const skills = [
    {
        title: "Programming",
        items: ["C", "C++", "Java", "Python", "SQL"],
    },
    {
        title: "Web Development",
        items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React JS"],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "VS Code", "XAMPP"],
    },
    {
        title: "Core Subjects",
        items: ["DSA", "DBMS", "OOP", "OS", "AI"],
    },
];
const projects = [
    {
        id: 1,
        category: "AI",
        title: "AlertVision",
        description: "A college mini project focused on AI-based smoke dehazing for fire rescue visibility using image restoration concepts.",
        tags: ["Python", "TensorFlow", "OpenCV", "CNN"],
    },
    {
        id: 2,
        category: "C++",
        title: "Smart Desktop Assistant",
        description: "A C++ desktop assistant that automates app launching, browser tasks, notes, command logging, and file handling.",
        tags: ["C++", "OOP", "Automation"],
    },
    {
        id: 3,
        category: "Web",
        title: "Portfolio Website",
        description: "A responsive portfolio made with HTML, CSS, JavaScript, and basic React to show projects, skills, education, and contact details.",
        tags: ["HTML", "CSS", "JavaScript", "React JS"],
    },
];
const timeline = [
    {
        date: "June 2025 - July 2025",
        title: "Frontend and QA Intern",
        place: "Reliant Surveyors, New Delhi",
        points: [
            "Built responsive pages using HTML, CSS, JavaScript, and Bootstrap.",
            "Automated Google Sheets workflows and reduced manual reporting effort.",
            "Tested UI screens and helped improve application reliability.",
        ],
    },
    {
        date: "2023 - 2027",
        title: "B.Tech in Information Technology - AIML",
        place: "Bharati Vidyapeeth College of Engineering",
        points: [
            "Current CGPA: 8.42/10",
            "Coursework: DSA, DBMS, OOP, AI, OS, CN, Software Engineering.",
        ],
    },
];
const leadership = [
    {
        title: "Secretary - Venuva, BVCOE",
        description: "Led event planning, documentation, meetings, and team coordination.",
    },
    {
        title: "Event Management Head - GDSC",
        description: "Organized technical workshops and handled logistics with volunteers and speakers.",
    },
];
const reactFeatures = [
    {
        title: "Components",
        text: "Navbar, Hero, Skills, Projects, Timeline, and Contact are separate React components.",
    },
    {
        title: "Props",
        text: "Cards receive title, description, tags, and other values through props.",
    },
    {
        title: "State",
        text: "The mobile menu, theme switch, typing text, and project filter use useState.",
    },
    {
        title: "Map",
        text: "Skills, projects, stats, and timeline items are printed from arrays using map().",
    },
];
function Header({ menuOpen, setMenuOpen, darkMode, setDarkMode }) {
    return (React.createElement("header", { className: "header" },
        React.createElement("nav", { className: "nav container" },
            React.createElement("a", { className: "logo", href: "#home", "aria-label": "Akshat Khanna home" },
                React.createElement("span", null, profile.shortName),
                profile.name),
            React.createElement("ul", { className: menuOpen ? "nav-links show" : "nav-links" }, navItems.map((item) => (React.createElement("li", { key: item.label },
                React.createElement("a", { href: item.link, onClick: () => setMenuOpen(false) }, item.label))))),
            React.createElement("div", { className: "nav-actions" },
                React.createElement("button", { className: "theme-toggle", onClick: () => setDarkMode(!darkMode), "aria-label": "Toggle theme" }, darkMode ? "☀️ Light" : "🌙 Dark"),
                React.createElement("button", { className: "menu-btn", onClick: () => setMenuOpen(!menuOpen), "aria-label": "Toggle navigation menu" }, menuOpen ? "×" : "☰")))));
}
function Hero({ changingWord }) {
    const [photoError, setPhotoError] = useState(false);
    return (React.createElement("section", { className: "hero section", id: "home" },
        React.createElement("div", { className: "container hero-content" },
            React.createElement("div", { className: "hero-text reveal" },
                React.createElement("p", { className: "tag" }, profile.tagline),
                React.createElement("h1", null,
                    "Hi, I am ",
                    React.createElement("span", null, profile.name),
                    "."),
                React.createElement("h2", null,
                    "I build ",
                    React.createElement("span", null, changingWord),
                    "."),
                React.createElement("p", { className: "hero-desc" }, "I enjoy creating responsive web pages, simple user interfaces, and practical projects using HTML, CSS, JavaScript, programming fundamentals, and basic React JS."),
                React.createElement("div", { className: "hero-buttons" },
                    React.createElement("a", { className: "btn primary", href: "#projects" }, "View Projects"),
                    React.createElement("a", { className: "btn secondary", href: profile.resume, target: "_blank", rel: "noreferrer" }, "Resume")),
                React.createElement("div", { className: "mini-stats", "aria-label": "Portfolio quick stats" }, stats.map((stat) => (React.createElement("div", { className: "mini-stat", key: stat.label },
                    React.createElement("strong", null, stat.value),
                    React.createElement("span", null, stat.label)))))),
            React.createElement("div", { className: "hero-card reveal" },
                React.createElement("div", { className: "status-pill" }, "Open to Frontend Opportunities"),
                React.createElement("div", { className: "profile-photo" }, photoError ? (React.createElement("div", { className: "photo-fallback" }, profile.shortName)) : (React.createElement("img", { src: profile.photo, alt: "Akshat Khanna", onError: () => setPhotoError(true) }))),
                React.createElement("h3", null, profile.name),
                React.createElement("p", null, profile.role),
                React.createElement("div", { className: "quick-info" },
                    React.createElement("span", null, "BVCOE"),
                    React.createElement("span", null, "CGPA 8.42"),
                    React.createElement("span", null, "Delhi"))))));
}
function SectionTitle({ label, title, center = false }) {
    return (React.createElement("div", { className: center ? "section-title center reveal" : "section-title reveal" },
        React.createElement("p", null, label),
        React.createElement("h2", null, title)));
}
function About() {
    const focusAreas = ["Responsive UI", "Clean Code", "DSA Practice", "React Basics"];
    return (React.createElement("section", { className: "section", id: "about" },
        React.createElement("div", { className: "container two-column" },
            React.createElement(SectionTitle, { label: "About Me", title: "A student who likes building things for the web." }),
            React.createElement("div", { className: "about-box reveal" },
                React.createElement("p", null, "I am a B.Tech Information Technology - AIML student at Bharati Vidyapeeth College of Engineering. I am interested in frontend development, Data Structures and Algorithms, and practical project work."),
                React.createElement("p", null, "My focus is on writing simple code, making clean layouts, and learning how real software is tested, improved, and used by people."),
                React.createElement("div", { className: "focus-list" }, focusAreas.map((area) => (React.createElement("span", { key: area }, area))))))));
}
function SkillCard({ title, items }) {
    return (React.createElement("div", { className: "skill-card reveal" },
        React.createElement("h3", null, title),
        React.createElement("div", { className: "chips" }, items.map((item) => (React.createElement("span", { className: item === "React JS" ? "highlight-chip" : "", key: item }, item))))));
}
function Skills() {
    return (React.createElement("section", { className: "section soft-bg", id: "skills" },
        React.createElement("div", { className: "container" },
            React.createElement(SectionTitle, { label: "Skills", title: "Tools and technologies I work with", center: true }),
            React.createElement("div", { className: "skills-grid" }, skills.map((skill) => (React.createElement(SkillCard, { key: skill.title, title: skill.title, items: skill.items })))))));
}
function ProjectCard({ project }) {
    return (React.createElement("article", { className: "project-card project-appear" },
        React.createElement("div", { className: "project-top" },
            React.createElement("div", { className: "project-number" },
                "0",
                project.id),
            React.createElement("span", { className: "project-category" }, project.category)),
        React.createElement("h3", null, project.title),
        React.createElement("p", null, project.description),
        React.createElement("div", { className: "project-tags" }, project.tags.map((tag) => (React.createElement("span", { className: tag === "React JS" ? "highlight-chip" : "", key: tag }, tag))))));
}
function Projects() {
    const filters = ["All", "AI", "C++", "Web"];
    const [activeFilter, setActiveFilter] = useState("All");
    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter);
    return (React.createElement("section", { className: "section", id: "projects" },
        React.createElement("div", { className: "container" },
            React.createElement(SectionTitle, { label: "Projects", title: "My recent work", center: true }),
            React.createElement("div", { className: "project-filter reveal", "aria-label": "Project filter buttons" }, filters.map((filter) => (React.createElement("button", { key: filter, className: activeFilter === filter ? "filter-btn active" : "filter-btn", onClick: () => setActiveFilter(filter) }, filter)))),
            React.createElement("div", { className: "project-grid" }, filteredProjects.map((project) => (React.createElement(ProjectCard, { key: project.id, project: project })))))));
}
function ReactNote() {
    return (React.createElement("section", { className: "section react-note-section" },
        React.createElement("div", { className: "container react-note reveal" },
            React.createElement("div", null,
                React.createElement("p", { className: "tag" }, "Basic React Added"),
                React.createElement("h2", null, "React is used in a simple and explainable way."),
                React.createElement("p", null, "This version keeps the portfolio beginner-friendly while making it more expressive. You can confidently explain that the website uses components, props, state, effects, and array rendering.")),
            React.createElement("div", { className: "react-list" }, reactFeatures.map((feature) => (React.createElement("div", { className: "react-feature", key: feature.title },
                React.createElement("h3", null, feature.title),
                React.createElement("p", null, feature.text))))))));
}
function TimelineItem({ item }) {
    return (React.createElement("div", { className: "timeline-item" },
        React.createElement("span", { className: "date" }, item.date),
        React.createElement("h3", null, item.title),
        React.createElement("p", null, item.place),
        React.createElement("ul", null, item.points.map((point) => (React.createElement("li", { key: point }, point))))));
}
function Experience() {
    return (React.createElement("section", { className: "section soft-bg", id: "experience" },
        React.createElement("div", { className: "container two-column" },
            React.createElement(SectionTitle, { label: "Experience", title: "Internship and education" }),
            React.createElement("div", { className: "timeline reveal" }, timeline.map((item) => (React.createElement(TimelineItem, { key: item.title, item: item })))))));
}
function Leadership() {
    return (React.createElement("section", { className: "section", id: "leadership" },
        React.createElement("div", { className: "container" },
            React.createElement(SectionTitle, { label: "Leadership", title: "Activities outside academics", center: true }),
            React.createElement("div", { className: "leadership-grid" }, leadership.map((item) => (React.createElement("div", { className: "lead-card reveal", key: item.title },
                React.createElement("h3", null, item.title),
                React.createElement("p", null, item.description))))))));
}
function Contact() {
    return (React.createElement("section", { className: "contact section", id: "contact" },
        React.createElement("div", { className: "container contact-box reveal" },
            React.createElement("p", null, "Contact"),
            React.createElement("h2", null, "Let us connect and build something useful."),
            React.createElement("div", { className: "contact-links" },
                React.createElement("a", { href: `mailto:${profile.email}` }, profile.email),
                React.createElement("a", { href: profile.github, target: "_blank", rel: "noreferrer" }, "GitHub"),
                React.createElement("a", { href: profile.resume, target: "_blank", rel: "noreferrer" }, "Download Resume")))));
}
function Footer() {
    return (React.createElement("footer", { className: "footer" },
        React.createElement("p", null,
            "\u00A9 ",
            new Date().getFullYear(),
            " ",
            profile.name,
            ". Made with HTML, CSS, JavaScript and basic React JS.")));
}
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [showTopButton, setShowTopButton] = useState(false);
    // Changes the hero word every 1.8 seconds.
    useEffect(() => {
        const textTimer = setInterval(() => {
            setWordIndex((currentIndex) => (currentIndex + 1) % heroWords.length);
        }, 1800);
        return () => clearInterval(textTimer);
    }, []);
    // Shows the back-to-top button after scrolling.
    useEffect(() => {
        function handleScroll() {
            setShowTopButton(window.scrollY > 500);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // Adds the reveal animation when sections enter the screen.
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");
        const revealOnScroll = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.15 });
        revealElements.forEach((element) => revealOnScroll.observe(element));
        return () => revealOnScroll.disconnect();
    }, []);
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (React.createElement("div", { className: darkMode ? "app dark-mode" : "app" },
        React.createElement(Header, { menuOpen: menuOpen, setMenuOpen: setMenuOpen, darkMode: darkMode, setDarkMode: setDarkMode }),
        React.createElement("main", null,
            React.createElement(Hero, { changingWord: heroWords[wordIndex] }),
            React.createElement(About, null),
            React.createElement(Skills, null),
            React.createElement(Projects, null),
            React.createElement(ReactNote, null),
            React.createElement(Experience, null),
            React.createElement(Leadership, null),
            React.createElement(Contact, null)),
        React.createElement(Footer, null),
        showTopButton && (React.createElement("button", { className: "top-btn", onClick: scrollToTop, "aria-label": "Back to top" }, "\u2191"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
