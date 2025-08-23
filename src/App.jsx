import React, { useRef } from 'react';
import myAvifImage from './assets/myimage.png';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, FolderKanban, FlaskConical, Mail, Github, Linkedin, Smartphone, Mail as EmailIcon, Award, Briefcase, Code, Database, Cloud, Zap, Shield, GitBranch, Terminal, ExternalLink, Linkedin as LinkedInIcon, Rocket, Heart, Target, Clock, Users, Globe } from 'lucide-react';
import { Collapse } from 'bootstrap';

// Custom hook for active navigation link styling
const useActiveLink = (to) => {
    const location = useLocation();
    return location.pathname === to ? 'text-primary fw-bold' : 'text-dark hover-link';
};

const Navbar = () => {
    const navCollapseRef = useRef(null);

    const handleNavLinkClick = () => {
        // Close the mobile menu if it's open
        if (navCollapseRef.current.classList.contains('show')) {
            const bsCollapse = new Collapse(navCollapseRef.current, { toggle: false });
            bsCollapse.hide();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand h1 mb-0 fs-3" onClick={handleNavLinkClick}>Salisu Iliyasu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav" ref={navCollapseRef}>
                    <ul className="navbar-nav">
                        <NavLink to="/" icon={HomeIcon} text="Home" onClick={handleNavLinkClick} />
                        <NavLink to="/about" icon={User} text="About" onClick={handleNavLinkClick} />
                        <NavLink to="/projects" icon={FolderKanban} text="Projects" onClick={handleNavLinkClick} />
                        <NavLink to="/skills" icon={FlaskConical} text="Skills" onClick={handleNavLinkClick} />
                        <NavLink to="/contact" icon={Mail} text="Contact" onClick={handleNavLinkClick} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, icon: Icon, text, onClick }) => {
    const activeClass = useActiveLink(to);
    return (
        <li className="nav-item">
            <Link to={to} className={`nav-link d-flex align-items-center gap-2 ${activeClass}`} onClick={onClick}>
                <Icon size={18} />
                <span>{text}</span>
            </Link>
        </li>
    );
};

const Home = () => (
    <div>
        {/* Hero Section */}
        <section id="hero" className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5 px-3">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                        <h1 className="display-4 fw-bold text-dark mb-3">
                            Hello, I'm <span className="text-primary">Salisu Iliyasu</span>
                        </h1>
                        <p className="lead text-muted mb-5">
                            Full Stack Developer with expertise in modern web technologies, passionate about designing and building scalable, user-friendly, and secure web applications.
                        </p>
                        <Link to="/projects" className="btn btn-primary btn-lg rounded-pill shadow-lg animate-hover me-3">
                            View Projects <FolderKanban className="ms-2" size={20} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline-primary btn-lg rounded-pill shadow-lg animate-hover">
                            Contact Me <Mail className="ms-2" size={20} />
                        </Link>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img
                            src={myAvifImage}
                            alt="Salisu Iliyasu Portrait"
                            className="img-fluid rounded-circle shadow-lg"
                            style={{ maxWidth: '500px', height: 'auto', objectFit: 'cover' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x500/cccccc/333333?text=Image+Loading+Error"; }}
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* About Summary Section */}
        <section id="about-summary" className="py-5 bg-white">
            <div className="container">
                <h2 className="display-5 fw-bold text-dark text-center mb-4">About Me</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <p className="lead text-muted mb-4">
                            I am a passionate full-stack developer specializing in modern web technologies. My journey began with a curiosity for solving real-world problems through code, which has evolved into a career focused on building robust, scalable, and secure web applications.
                        </p>
                        <Link to="/about" className="btn btn-outline-primary rounded-pill animate-hover">
                            Learn More <ExternalLink className="ms-2" size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Projects Summary Section */}
        <section id="projects-summary" className="py-5 bg-light">
            <div className="container">
                <h2 className="display-5 fw-bold text-dark text-center mb-5">Featured Projects</h2>
                <div className="row g-4 justify-content-center">
                    {projectsData.slice(0, 3).map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm border-0 animate-hover">
                                <div className="card-body">
                                    <h3 className="card-title h5 text-dark">{project.title}</h3>
                                    <p className="card-text text-muted">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="badge bg-info text-dark rounded-pill py-1 px-2">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <Link to="/projects" className="btn btn-primary btn-lg rounded-pill animate-hover">
                        View All Projects <FolderKanban className="ms-2" size={20} />
                    </Link>
                </div>
            </div>
        </section>

        {/* Skills Summary Section */}
        <section id="skills-summary" className="py-5 bg-white">
            <div className="container">
                <h2 className="display-5 fw-bold text-dark text-center mb-5">Core Skills</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6">
                        <SkillCategory title="Frontend" skills={skillsData.frontend} icon={Code} />
                    </div>
                    <div className="col-md-6">
                        <SkillCategory title="Backend" skills={skillsData.backend} icon={GitBranch} />
                    </div>
                </div>
                <div className="text-center mt-5">
                    <Link to="/skills" className="btn btn-outline-primary btn-lg rounded-pill animate-hover">
                        See All Skills <FlaskConical className="ms-2" size={20} />
                    </Link>
                </div>
            </div>
        </section>

        {/* CTA Section (from your original code) */}
        <section id="cta" className="py-5 bg-primary text-white">
            <div className="container text-center py-5">
                <h2 className="display-5 fw-bold mb-4">Ready to Start a Project?</h2>
                <p className="lead mb-5">Let's work together to bring your ideas to life with cutting-edge web solutions.</p>
                <Link to="/contact" className="btn btn-light btn-lg rounded-pill shadow-lg px-4">
                    Get In Touch <Mail className="ms-2" size={20} />
                </Link>
            </div>
        </section>

    </div>
);

// All other components (About, Projects, Skills, Contact, etc.) remain the same as your original code.
// I've included them here for clarity, but they should be identical to what you already have.

const About = () => (
    <section id="about" className="min-vh-100 bg-white py-5 px-3">
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="text-center mb-5">
                        <img
                            src={myAvifImage}
                            alt="Salisu Iliyasu"
                            className="img-fluid rounded-circle shadow-lg mb-4"
                            style={{ maxWidth: '250px' }}
                        />
                        <h1 className="display-5 fw-bold text-dark mb-3">Salisu Iliyasu</h1>
                        <p className="lead text-muted mb-4">Full Stack Developer & Security Enthusiast</p>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            <span className="badge bg-primary rounded-pill p-2">React.js</span>
                            <span className="badge bg-primary rounded-pill p-2">Node.js</span>
                            <span className="badge bg-primary rounded-pill p-2">PHP</span>
                            <span className="badge bg-primary rounded-pill p-2">MySQL</span>
                            <span className="badge bg-primary rounded-pill p-2">MongoDB</span>
                            <span className="badge bg-primary rounded-pill p-2">Security</span>
                        </div>
                    </div>
                    <div className="card border-0 shadow-lg mb-5">
                        <div className="card-body p-5">
                            <h2 className="h3 text-primary mb-4">My Story</h2>
                            <p className="lead text-muted mb-4">
                                I'm a passionate full-stack developer with a journey that started from curiosity and evolved into a professional career
                                building modern, scalable web applications. My approach to development combines technical expertise with a focus on
                                creating intuitive user experiences.
                            </p>
                            <p className="text-muted mb-4">
                                What drives me is the ability to solve real-world problems through code. I believe in creating solutions that are not
                                only functional but also enjoyable to use. My development process emphasizes clean code, robust architecture, and
                                implementing security best practices from the ground up.
                            </p>
                            <p className="text-muted">
                                Over the past few years, I've had the opportunity to work on diverse projects while also sharing my knowledge as a
                                tutor. This experience has taught me the importance of clear communication, adaptability, and continuous learning in
                                the ever-evolving field of web development.
                            </p>
                        </div>
                    </div>
                    <div className="card border-0 shadow-lg">
                        <div className="card-body p-5">
                            <h2 className="h3 text-primary mb-4">Beyond Code</h2>
                            <p className="text-muted mb-4">
                                When I'm not immersed in code, I enjoy exploring new technologies, contributing to open-source projects,
                                and engaging with the developer community. I'm passionate about knowledge sharing and believe that the best
                                way to learn is to teach others.
                            </p>
                            <p className="text-muted mb-0">
                                I maintain a curious mindset, always looking for opportunities to expand my skillset and stay updated with
                                the latest trends in web development and cybersecurity. This continuous learning approach helps me bring
                                fresh perspectives and innovative solutions to every project I work on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const projectsData = [
    {
        title: "Restaurant Management System",
        description: "A web platform for order processing, inventory control, and customer interaction, designed to streamline restaurant operations and enhance customer experience.",
        stack: ["PHP", "MySQL", "React.js"],
        features: ["Order Management", "Inventory Control", "Customer Interaction", "Reporting"],
        github: "https://github.com/Salisuili/Restaurant-Management-System-Frontend",
        demo: "#"
    },
    {
        title: "LISFN Online Journal Platform",
        description: "A secure online platform for content creation, management, and publishing of academic journals, facilitating peer review and dissemination.",
        stack: ["React.js", "Node.js", "Bootstrap", "MongoDB"],
        features: ["Content Management", "User Roles", "Publishing Workflow", "Secure Access"],
        github: "https://github.com/Salisuili/LISFN-Online-Journal-Platform-Frontend",
        demo: "#"
    },
    {
        title: "Geo-enabled Job Platform",
        description: "A location-based job platform with real-time updates using Socket.IO and cloud storage for assets, connecting job seekers with opportunities.",
        stack: ["React.js", "Node.js", "Socket.IO", "AWS S3", "MongoDB"],
        features: ["Real-time Job Updates", "Location-based Search", "Cloud Storage", "User Profiles"],
        github: "https://github.com/Salisuili/Geo-enabled-Job-Platform-Frontend",
        demo: "#"
    },
    {
        title: "Real Estate Website (Down Stone Ultimate Estate Developer)",
        description: "Developed a comprehensive online presence for a real estate developer, showcasing properties, services, and enabling client inquiries.",
        stack: ["React.js", "Node.js", "Express.js", "MySQL"],
        features: ["Property Listings", "Search & Filters", "Contact Forms", "Agent Portals"],
        github: "https://github.com/Salisuili/Real-Estate-Website",
        demo: "#"
    },
    {
        title: "Lecture Timetable Reminder & Task Scheduling System",
        description: "An application designed to help students and educators manage lecture schedules and personal tasks efficiently, with integrated reminders.",
        stack: ["React.js", "Node.js", "MongoDB"],
        features: ["Timetable Management", "Task Scheduling", "Reminders", "User Dashboards"],
        github: "https://github.com/Salisuili/Lecture-Timetable-System",
        demo: "#"
    },
    {
        title: "Evaluation of Students' Performance System",
        description: "A system for tracking and evaluating student academic performance, providing comprehensive insights for educators and administrators.",
        stack: ["PHP", "MySQL", "React.js"],
        features: ["Performance Tracking", "Grading System", "Reporting", "Student Profiles"],
        github: "https://github.com/Salisuili/Student-Performance-Evaluation-System",
        demo: "#"
    },
    {
        title: "API Development Projects",
        description: "A collection of robust API projects demonstrating expertise in building scalable and secure backend services, covering various domains.",
        stack: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB"],
        features: ["RESTful APIs", "Authentication", "Data Validation", "Scalable Architecture"],
        github: "https://github.com/Salisuili/API-Development-Projects",
        demo: "#"
    },
];

const Projects = () => (
    <section id="projects" className="min-vh-100 bg-light py-5 px-3 d-flex align-items-center justify-content-center">
        <div className="container my-5">
            <h2 className="display-5 fw-bold text-dark text-center mb-5">My Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {projectsData.map((project, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 shadow-sm border-0 animate-hover">
                            <div className="card-body d-flex flex-column">
                                <h3 className="card-title h5 text-dark mb-3">{project.title}</h3>
                                <p className="card-text text-muted flex-grow-1" style={{ minHeight: '4.5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>{project.description}</p>
                                <div className="mb-3">
                                    <p className="fw-semibold text-secondary mb-1">Stack:</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="badge bg-info text-dark rounded-pill py-1 px-2">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="fw-semibold text-secondary mb-1">Key Features:</p>
                                    <ul className="text-muted small ps-3 mb-0">
                                        {project.features.slice(0, 2).map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                        {project.features.length > 2 && <li>...</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const skillsData = {
    frontend: [
        { name: "React", icon: "https://placehold.co/40x40/c0d9ed/000000?text=React" },
        { name: "Bootstrap", icon: "https://placehold.co/40x40/7952B3/ffffff?text=BS" },
        { name: "HTML5", icon: "https://placehold.co/40x40/E34F26/ffffff?text=HTML" },
        { name: "CSS3", icon: "https://placehold.co/40x40/1572B6/ffffff?text=CSS" },
        { name: "JavaScript", icon: "https://placehold.co/40x40/F7DF1E/000000?text=JS" },
    ],
    backend: [
        { name: "Node.js", icon: "https://placehold.co/40x40/339933/ffffff?text=Node" },
        { name: "Express.js", icon: "https://placehold.co/40x40/000000/ffffff?text=Exp" },
        { name: "PHP", icon: "https://placehold.co/40x40/777BB4/ffffff?text=PHP" },
    ],
    databases: [
        { name: "MySQL", icon: "https://placehold.co/40x40/4479A1/ffffff?text=SQL" },
        { name: "MongoDB", icon: "https://placehold.co/40x40/47A248/ffffff?text=Mongo" },
        { name: "Supabase", icon: "https://placehold.co/40x40/3ECF8E/ffffff?text=SB" },
    ],
    cloudStorage: [
        { name: "AWS S3", icon: "https://placehold.co/40x40/FF9900/ffffff?text=S3" },
        { name: "Supabase Storage", icon: "https://placehold.co/40x40/3ECF8E/ffffff?text=SB" },
    ],
    realtimeCommunication: [
        { name: "Socket.IO", icon: "https://placehold.co/40x40/010101/ffffff?text=IO" },
    ],
    securityPractices: [
        { name: "OWASP Security Principles", icon: "https://placehold.co/40x40/000000/ffffff?text=OWASP" },
    ],
    programmingLanguages: [
        { name: "JavaScript", icon: "https://placehold.co/40x40/F7DF1E/000000?text=JS" },
        { name: "PHP", icon: "https://placehold.co/40x40/777BB4/ffffff?text=PHP" },
        { name: "SQL", icon: "https://placehold.co/40x40/4479A1/ffffff?text=SQL" },
        { name: "Python", icon: "https://placehold.co/40x40/3776AB/ffffff?text=Py" },
        { name: "Visual Basic", icon: "https://placehold.co/40x40/851E85/ffffff?text=VB" },
    ],
};

const SkillCategory = ({ title, skills, icon: Icon }) => (
    <div className="card shadow-sm border-0">
        <div className="card-body p-4">
            <h3 className="card-title h5 text-dark mb-4 d-flex align-items-center">
                <Icon className="me-3 text-primary" size={24} /> {title}
            </h3>
            <div className="d-flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <div key={index} className="d-flex align-items-center bg-light p-2 rounded-pill shadow-sm">
                        {skill.icon && <img src={skill.icon} alt={skill.name} className="me-2 rounded-circle" style={{ width: '30px', height: '30px' }} onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/30x30/cccccc/333333?text=${skill.name.substring(0, 2)}` }} />}
                        <span className="text-dark small fw-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Skills = () => (
    <section id="skills" className="min-vh-100 bg-white py-5 px-3 d-flex align-items-center justify-content-center">
        <div className="container my-5">
            <h2 className="display-5 fw-bold text-dark text-center mb-5">My Skills</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col"><SkillCategory title="Frontend" skills={skillsData.frontend} icon={Code} /></div>
                <div className="col"><SkillCategory title="Backend" skills={skillsData.backend} icon={GitBranch} /></div>
                <div className="col"><SkillCategory title="Databases" skills={skillsData.databases} icon={Database} /></div>
                <div className="col"><SkillCategory title="Cloud & Storage" skills={skillsData.cloudStorage} icon={Cloud} /></div>
                <div className="col"><SkillCategory title="Real-Time Communication" skills={skillsData.realtimeCommunication} icon={Zap} /></div>
                <div className="col"><SkillCategory title="Security Practices" skills={skillsData.securityPractices} icon={Shield} /></div>
                <div className="col"><SkillCategory title="Programming Languages" skills={skillsData.programmingLanguages} icon={Terminal} /></div>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="min-vh-100 bg-light py-5 px-3 d-flex align-items-center justify-content-center">
        <div className="container my-5 text-center">
            <h2 className="display-5 fw-bold text-dark mb-4">Get in Touch</h2>
            <p className="lead text-muted mb-5">
                Have a question or want to work together? Feel free to reach out!
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4 mb-5">
                <ContactLink
                    href="mailto:salisuiliyasu101@gmail.com"
                    icon={EmailIcon}
                    text="salisuiliyasu101@gmail.com"
                    color="btn-danger"
                />
                <ContactLink
                    href="tel:+2349037470906"
                    icon={Smartphone}
                    text="+234 903 747 0906"
                    color="btn-success"
                />
            </div>
            <div className="d-flex justify-content-center gap-3">
                <SocialLink
                    href="https://github.com/Salisuili"
                    icon={Github}
                    label="GitHub"
                    color="btn-dark"
                />
                <a href="https://linkedin.com/in/salisu-iliyasu-75599522b"
                    className="btn btn-primary btn-lg rounded-circle shadow-sm d-flex align-items-center justify-content-center animate-hover"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '56px', height: '56px' }}
                >
                    <LinkedInIcon size={24} />
                </a>
            </div>
            <p className="text-muted small mt-5">
                No. 10 Nagurmi Street, Hayin Dogo Samaru-Zaria, Kaduna, Nigeria
            </p>
        </div>
    </section>
);

const ContactLink = ({ href, icon: Icon, text, color }) => (
    <a
        href={href}
        className={`btn ${color} btn-lg rounded-pill shadow-sm d-flex align-items-center justify-content-center animate-hover`}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon className="me-3" size={20} /> {text}
    </a>
);

const SocialLink = ({ href, icon: Icon, label, color }) => (
    <a
        href={href}
        className={`btn ${color} btn-lg rounded-circle shadow-sm d-flex align-items-center justify-content-center animate-hover`}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: '56px', height: '56px' }}
    >
        <Icon size={24} />
    </a>
);

function App() {
    return (
        <Router>
            <div className="bg-light text-dark min-vh-100">
                <Navbar />
                <main style={{ paddingTop: '70px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer className="bg-dark text-white text-center p-3 mt-auto">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Salisu Iliyasu. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;