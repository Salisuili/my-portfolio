import React, { useRef, useState } from 'react';
import myAvifImage from './assets/myimage.png';
import resume from './assets/Salisu_Iliyasu_2Resume.pdf';
import { Home as HomeIcon, User, FolderKanban, FlaskConical, Mail, Github, Linkedin, Smartphone, Mail as EmailIcon, Code, Database, Cloud, Zap, Shield, GitBranch, Terminal, ExternalLink, Linkedin as LinkedInIcon, Users as UsersIcon, Download } from 'lucide-react';

const Navbar = () => {
  const navCollapseRef = useRef(null);

  const handleNavLinkClick = (sectionId) => {
    // Close the mobile menu if it's open
    if (navCollapseRef.current && navCollapseRef.current.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navCollapseRef.current, { toggle: false });
      bsCollapse.hide();
    }

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        <a href="#hero" className="navbar-brand h1 mb-0 fs-3" onClick={(e) => { e.preventDefault(); handleNavLinkClick('hero'); }}>Salisu Iliyasu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" ref={navCollapseRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#hero" className="nav-link d-flex align-items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavLinkClick('hero'); }}>
                <HomeIcon size={18} />
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link d-flex align-items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}>
                <User size={18} />
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link d-flex align-items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavLinkClick('projects'); }}>
                <FolderKanban size={18} />
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link d-flex align-items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavLinkClick('skills'); }}>
                <FlaskConical size={18} />
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link d-flex align-items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}>
                <Mail size={18} />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
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
          <div className="d-flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary btn-lg rounded-pill shadow-lg animate-hover" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects <FolderKanban className="ms-2" size={20} />
            </a>
            <a href="#contact" className="btn btn-outline-primary btn-lg rounded-pill shadow-lg animate-hover" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
              Contact Me <Mail className="ms-2" size={20} />
            </a>
            <a href={resume} download="Salisu_Iliyasu_Resume.pdf" className="btn btn-success btn-lg rounded-pill shadow-lg animate-hover">
              Download Resume <Download className="ms-2" size={20} />
            </a>
          </div>
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
);

const About = () => (
  <section id="about" className="py-5 bg-white">
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
            <h2 className="display-5 fw-bold text-dark mb-3">Salisu Iliyasu</h2>
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
              <h3 className="h3 text-primary mb-4">My Story</h3>
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
              <h3 className="h3 text-primary mb-4">Beyond Code</h3>
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
    stack: ["React.js", "MongoDB", "Express.js"],
    features: ["Order Management", "Inventory Control", "Customer Interaction", "Reporting"],
    github: "https://github.com/Salisuili/rest_frontend",
    demo: "https://iyarest.vercel.app/"
  },
  {
    title: "LISFN Online Journal Platform",
    description: "A secure online platform for content creation, management, and publishing of academic journals, facilitating peer review and dissemination.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    features: ["Content Management", "User Roles", "Publishing Workflow", "Secure Access"],
    github: "https://github.com/Salisuili/lisfnonlinejournals",
    demo: "https://lisfnonlinejournals.vercel.app/"
  },
  {
    title: "Geo-enabled Job Platform",
    description: "A location-based job platform with real-time updates using Socket.IO and cloud storage for assets, connecting job seekers with opportunities.",
    stack: ["React.js", "Node.js", "Socket.IO", "AWS S3", "MongoDB"],
    features: ["Real-time Job Updates", "Location-based Search", "Cloud Storage", "User Profiles"],
    github: "https://github.com/Salisuili/Geo-job-platform-frontend",
    demo: "https://connectlocal-alpha.vercel.app/"
  },
  {
    title: "Real Estate Website (Down Stone Ultimate Estate Developer)",
    description: "Developed a comprehensive online presence for a real estate developer, showcasing properties, services, and enabling client inquiries.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    features: ["Property Listings", "Search & Filters", "Contact Forms"],
    github: "https://github.com/Salisuili/",
    demo: "#"
  },
  {
    title: "Lecture Timetable Reminder & Task Scheduling System",
    description: "An application designed to help students and educators manage lecture schedules and personal tasks efficiently, with integrated reminders.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    features: ["Timetable Management", "Task Scheduling", "Reminders", "User Dashboards"],
    github: "https://github.com/Salisuili/onlinelecturenot",
    demo: "#"
  },
  {
    title: "Evaluation of Students' Performance System",
    description: "A system for tracking and evaluating student academic performance, providing comprehensive insights for educators and administrators.",
    stack: ["PHP", "MySQL", "React.js"],
    features: ["Performance Tracking", "Grading System", "Reporting", "Student Profiles"],
    github: "https://github.com/Salisuili/",
    demo: "#"
  },
  {
    title: "API Development Projects",
    description: "A collection of robust API projects demonstrating expertise in building scalable and secure backend services, covering various domains.",
    stack: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB"],
    features: ["RESTful APIs", "Authentication", "Data Validation", "Scalable Architecture"],
    github: "https://github.com/Salisuili/",
    demo: "#"
  },
];

const Projects = () => (
  <section id="projects" className="py-5 bg-light">
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
                <div className="d-flex gap-2 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-dark btn-sm d-flex align-items-center gap-1 flex-grow-1 justify-content-center"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm d-flex align-items-center gap-1 flex-grow-1 justify-content-center"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
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
  <section id="skills" className="py-5 bg-white">
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:salisuiliyasu101@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container my-5">
        <h2 className="display-5 fw-bold text-dark text-center mb-5">Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Send Message <Mail className="ms-2" size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <p className="lead text-muted mb-4">Or reach out directly through these channels:</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-4 mb-5">
            <a
              href="mailto:salisuiliyasu101@gmail.com"
              className="btn btn-danger btn-lg rounded-pill shadow-sm d-flex align-items-center justify-content-center animate-hover"
            >
              <EmailIcon className="me-3" size={20} /> salisuiliyasu101@gmail.com
            </a>
            <a
              href="tel:+2349037470906"
              className="btn btn-success btn-lg rounded-pill shadow-sm d-flex align-items-center justify-content-center animate-hover"
            >
              <Smartphone className="me-3" size={20} /> +234 903 747 0906
            </a>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://github.com/Salisuili"
              className="btn btn-dark btn-lg rounded-circle shadow-sm d-flex align-items-center justify-content-center animate-hover"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '56px', height: '56px' }}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/salisu-iliyasu-75599522b"
              className="btn btn-primary btn-lg rounded-circle shadow-sm d-flex align-items-center justify-content-center animate-hover"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '56px', height: '56px' }}
            >
              <LinkedInIcon size={24} />
            </a>
          </div>
          <p className="text-muted mt-5">
            No. 10 Nagurmi Street, Hayin Dogo Samaru-Zaria, Kaduna, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-dark text-white text-center p-3 mt-auto">
    <p className="mb-0">&copy; {new Date().getFullYear()} Salisu Iliyasu. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <div className="bg-light text-dark min-vh-100">
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;