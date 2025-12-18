import React, { useState } from 'react';
import { 
  Home as HomeIcon, 
  User, 
  FolderKanban, 
  FlaskConical, 
  Mail, 
  Github, 
  Linkedin, 
  Smartphone, 
  Mail as EmailIcon, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  ExternalLink, 
  Download,
  Users
} from 'lucide-react';

// Image from public folder
const myImage = '/abba.jpg';
// Resume from assets folder - in real app you'd import it
const resume = '/Salisu_Iliyasu_2Resume.pdf';

const Navbar = () => {

  const handleNavLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <a href="#hero" style={styles.brand} onClick={(e) => { e.preventDefault(); handleNavLinkClick('hero'); }}>
          Salisu Iliyasu
        </a>
        <div style={styles.navLinks}>
          <a href="#hero" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavLinkClick('hero'); }}>
            <HomeIcon size={18} style={styles.icon} />
            <span>Home</span>
          </a>
          <a href="#about" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}>
            <User size={18} style={styles.icon} />
            <span>About</span>
          </a>
          <a href="#projects" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavLinkClick('projects'); }}>
            <FolderKanban size={18} style={styles.icon} />
            <span>Projects</span>
          </a>
          <a href="#skills" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavLinkClick('skills'); }}>
            <FlaskConical size={18} style={styles.icon} />
            <span>Skills</span>
          </a>
          <a href="#contact" style={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}>
            <Mail size={18} style={styles.icon} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" style={styles.hero}>
    <div style={styles.container}>
      <div style={styles.heroContent}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.highlight}>Salisu Iliyasu</span>
          </h1>
          <h2 style={styles.heroSubtitle}>Full Stack Developer & Security Specialist</h2>
          <p style={styles.heroDescription}>
            Building scalable, secure, and user-centric web applications with modern technologies. 
            Passionate about creating solutions that combine functionality with exceptional user experience.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.btnPrimary} onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects <FolderKanban size={20} style={styles.buttonIcon} />
            </button>
            <button style={styles.btnSecondary} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me <Mail size={20} style={styles.buttonIcon} />
            </button>
            <a href={resume} download="Salisu_Iliyasu_Resume.pdf" style={styles.btnDownload}>
              Download Resume <Download size={20} style={styles.buttonIcon} />
            </a>
          </div>
        </div>
        <div style={styles.heroImageContainer}>
          <img
            src={myImage}
            alt="Salisu Iliyasu"
            style={styles.heroImage}
            onError={(e) => { 
              e.target.src = "https://placehold.co/400x400/2d3748/ffffff?text=Salisu+Iliyasu"; 
            }}
          />
          <div style={styles.imageBorder}></div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.aboutContainer}>
        <div style={styles.aboutHeader}>
          <div style={styles.profileImageWrapper}>
            <img
              src={myImage}
              alt="Salisu Iliyasu"
              style={styles.profileImage}
              onError={(e) => { 
                e.target.src = "https://placehold.co/220x220/2d3748/ffffff?text=SI"; 
              }}
            />
            <div style={styles.profileBadge}>
              <User size={24} color="#000" />
            </div>
          </div>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.sectionSubtitle}>Full Stack Developer & Security Enthusiast</p>
          <div style={styles.badges}>
            <span style={{...styles.badge, ...styles.badgeBlue}}>React.js</span>
            <span style={{...styles.badge, ...styles.badgeGreen}}>Next.js</span>
            <span style={{...styles.badge, ...styles.badgeCyan}}>Node.js</span>
            <span style={{...styles.badge, ...styles.badgeYellow}}>PHP</span>
            <span style={{...styles.badge, ...styles.badgeRed}}>MySQL</span>
            <span style={{...styles.badge, ...styles.badgeGray}}>MongoDB</span>
            <span style={{...styles.badge, ...styles.badgePurple}}>Security</span>
          </div>
        </div>
        
        <div style={styles.aboutCards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <Code size={24} style={styles.cardIcon} /> My Journey
            </h3>
            <p style={styles.cardText}>
              My development journey began with curiosity and has evolved into a passion for creating 
              impactful web solutions. I specialize in building modern, scalable applications that 
              prioritize both performance and user experience.
            </p>
            <p style={styles.cardText}>
              I believe in writing clean, maintainable code and following best practices. My experience 
              spans across various domains including e-commerce, real estate, education, and enterprise 
              applications.
            </p>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>
                <Users size={20} color="#3b82f6" />
              </div>
              <div>
                <h4 style={styles.featureTitle}>Teaching Experience</h4>
                <p style={styles.featureText}>Sharing knowledge as a tutor has honed my communication and mentorship skills</p>
              </div>
            </div>
          </div>
          
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>
              <Shield size={24} style={styles.cardIcon} /> My Approach
            </h3>
            <p style={styles.cardText}>
              Security-first mindset in all development phases. I implement security best practices 
              from design to deployment, ensuring robust and reliable applications.
            </p>
            <div style={styles.principles}>
              <h4 style={styles.principlesTitle}>Core Principles</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Clean, modular architecture</li>
                <li style={styles.listItem}>Performance optimization</li>
                <li style={styles.listItem}>Security by design</li>
                <li style={styles.listItem}>User-centered development</li>
                <li style={styles.listItem}>Continuous learning & improvement</li>
              </ul>
            </div>
            <div style={styles.quote}>
              <p style={styles.quoteText}>
                "Building solutions that not only work but also scale and secure"
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
    description: "A comprehensive web platform for order processing, inventory control, and customer interaction management.",
    stack: ["React.js", "MongoDB", "Express.js", "Node.js"],
    features: ["Real-time Order Management", "Inventory Tracking", "Customer Analytics", "Reporting Dashboard"],
    github: "https://github.com/Salisuili/rest_frontend",
    demo: "https://iyarest.vercel.app/",
    status: "Live"
  },
  {
    title: "LISFN Online Journal Platform",
    description: "Secure academic journal platform for content creation, management, and publishing with peer review workflow.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    features: ["Role-based Access", "Peer Review System", "Secure Publishing", "Real-time Updates"],
    github: "https://github.com/Salisuili/lisfnonlinejournals",
    demo: "https://lisfnonlinejournals.vercel.app/",
    status: "Live"
  },
  {
    title: "Geo-enabled Job Platform",
    description: "Location-based job search platform with real-time notifications and cloud storage integration.",
    stack: ["React.js", "Node.js", "Socket.IO", "AWS S3", "MongoDB"],
    features: ["Real-time Updates", "Location-based Search", "Cloud Storage", "User Profiles", "Chat System"],
    github: "https://github.com/Salisuili/Geo-job-platform-frontend",
    demo: "https://connectlocal-alpha.vercel.app/",
    status: "Live"
  },
  {
    title: "Real Estate Platform",
    description: "Complete online presence for real estate developer with property showcase and client management.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
    features: ["Property Listings", "Advanced Search", "Contact Management", "Admin Dashboard"],
    github: "https://github.com/Salisuili/",
    demo: "#",
    status: "In Development"
  },
  {
    title: "Timetable & Task Management",
    description: "Academic scheduling system with integrated reminders and task management for students and educators.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    features: ["Schedule Management", "Task Tracking", "Reminder System", "User Dashboard"],
    github: "https://github.com/Salisuili/onlinelecturenot",
    demo: "#",
    status: "Completed"
  },
  {
    title: "Student Performance System",
    description: "Comprehensive system for tracking and evaluating student academic performance with detailed analytics.",
    stack: ["PHP", "MySQL", "React.js", "Chart.js"],
    features: ["Performance Analytics", "Grade Management", "Progress Reports", "Data Visualization"],
    github: "https://github.com/Salisuili/",
    demo: "#",
    status: "Completed"
  },
];

const Projects = () => (
  <section id="projects" style={styles.sectionAlt}>
    <div style={styles.container}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <p style={styles.sectionSubtitle}>A showcase of my recent work and contributions</p>
      </div>
      <div style={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <div style={styles.projectHeader}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <span style={{
                ...styles.statusBadge,
                ...(project.status === 'Live' ? styles.statusLive : 
                    project.status === 'In Development' ? styles.statusDev : 
                    styles.statusCompleted)
              }}>
                {project.status}
              </span>
            </div>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.techStack}>
              <p style={styles.techLabel}>Technology Stack:</p>
              <div style={styles.techTags}>
                {project.stack.map((tech, i) => (
                  <span key={i} style={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
            <div style={styles.features}>
              <p style={styles.featuresLabel}>Key Features:</p>
              <ul style={styles.featuresList}>
                {project.features.map((feature, i) => (
                  <li key={i} style={styles.featuresItem}>{feature}</li>
                ))}
              </ul>
            </div>
            <div style={styles.projectLinks}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.linkBtn}>
                  <Github size={16} /> Code
                </a>
              )}
              {project.demo && project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={styles.linkBtnPrimary}>
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const skillsData = {
  frontend: [
    { name: "React.js", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "MySQL", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Supabase", level: "Intermediate" },
  ],
  cloud: [
    { name: "AWS S3", level: "Intermediate" },
    { name: "Vercel", level: "Intermediate" },
    { name: "Socket.IO", level: "Intermediate" },
    { name: "RESTful APIs", level: "Advanced" },
    { name: "Git", level: "Advanced" },
  ],
  security: [
    { name: "OWASP Principles", level: "Intermediate" },
    { name: "JWT Authentication", level: "Advanced" },
    { name: "Data Encryption", level: "Intermediate" },
    { name: "Security Testing", level: "Intermediate" },
  ],
};

const SkillCategory = ({ title, skills }) => (
  <div style={styles.skillCard}>
    <h3 style={styles.skillTitle}>
      <Icon size={24} style={styles.skillIcon} /> {title}
    </h3>
    <div style={styles.skillList}>
      {skills.map((skill, index) => (
        <div key={index} style={styles.skillItem}>
          <span style={styles.skillName}>{skill.name}</span>
          <span style={{
            ...styles.levelBadge,
            ...(skill.level === 'Advanced' ? styles.levelAdvanced : styles.levelIntermediate)
          }}>
            {skill.level}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <p style={styles.sectionSubtitle}>Technologies and tools I work with</p>
      </div>
      <div style={styles.skillsGrid}>
        <SkillCategory title="Frontend Development" skills={skillsData.frontend} icon={Code} />
        <SkillCategory title="Backend & Databases" skills={skillsData.backend} icon={Database} />
        <SkillCategory title="Cloud & Services" skills={skillsData.cloud} icon={Cloud} />
      </div>
      <div style={styles.securitySection}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>
            <Shield size={24} style={styles.cardIcon} /> Security Expertise
          </h3>
          <div style={styles.securityGrid}>
            {skillsData.security.map((skill, index) => (
              <div key={index} style={styles.securityItem}>
                <div style={styles.securityIconWrapper}>
                  <Shield size={20} color="#3b82f6" />
                </div>
                <h4 style={styles.securityName}>{skill.name}</h4>
                <span style={styles.securityLevel}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
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
    <section id="contact" style={styles.contactSection}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitleWhite}>Let's Connect</h2>
          <p style={styles.sectionSubtitleWhite}>Have a project in mind? I'd love to hear about it</p>
        </div>
        
        <div style={styles.contactFormWrapper}>
          <div style={styles.contactCard}>
            <form onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Name *</label>
                  <input
                    type="text"
                    style={styles.input}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    style={styles.input}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <input
                  type="text"
                  style={styles.input}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project or inquiry subject"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  style={{...styles.input, ...styles.textarea}}
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              <button type="submit" style={styles.submitBtn}>
                Send Message <Mail size={20} style={styles.buttonIcon} />
              </button>
            </form>
          </div>
        </div>
        
        <div style={styles.contactInfo}>
          <p style={styles.contactLabel}>Prefer direct contact?</p>
          <div style={styles.contactButtons}>
            <a href="mailto:salisuiliyasu101@gmail.com" style={styles.contactBtn}>
              <EmailIcon size={20} /> salisuiliyasu101@gmail.com
            </a>
            <a href="tel:+2349037470906" style={styles.contactBtn}>
              <Smartphone size={20} /> +234 903 747 0906
            </a>
          </div>
          
          <div style={styles.socialSection}>
            <p style={styles.socialLabel}>Connect with me on social platforms:</p>
            <div style={styles.socialLinks}>
              <a href="https://github.com/Salisuili" target="_blank" rel="noopener noreferrer" style={styles.socialBtn}>
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/salisu-iliyasu-75599522b" target="_blank" rel="noopener noreferrer" style={styles.socialBtnLinkedIn}>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div style={styles.location}>
            <p style={styles.locationText}>
              No. 10 Nagurmi Street, Hayin Dogo Samaru-Zaria, Kaduna, Nigeria
            </p>
            <p style={styles.locationText}>Available for freelance projects and full-time opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>© {new Date().getFullYear()} Salisu Iliyasu. All rights reserved.</p>
        <p style={styles.footerText}>
          Built with <span style={styles.footerHighlight}>React</span> • Hosted on <span style={styles.footerHighlight}>Vercel</span>
        </p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div style={styles.app}>
      <Navbar />
      <main style={styles.main}>
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

const styles = {
  app: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  main: {
    paddingTop: '70px',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1a202c',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '0',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'flex-end',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '0.25rem',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
    padding: '4rem 0',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  heroText: {
    color: '#fff',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#fff',
  },
  highlight: {
    color: '#fbbf24',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#e5e7eb',
  },
  heroDescription: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
    lineHeight: '1.7',
    opacity: 0.9,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 2rem',
    backgroundColor: '#fbbf24',
    color: '#000',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 2rem',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  btnDownload: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 2rem',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textDecoration: 'none',
  },
  buttonIcon: {
    marginLeft: '0.5rem',
  },
  heroImageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  heroImage: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid #fff',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    transform: 'scale(0.95)',
  },
  imageBorder: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%) scale(1.05)',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    border: '3px solid #fbbf24',
  },
  section: {
    padding: '5rem 0',
    backgroundColor: '#fff',
  },
  sectionAlt: {
    padding: '5rem 0',
    backgroundColor: '#f9fafb',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1a202c',
  },
  sectionTitleWhite: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#fff',
  },
  sectionSubtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
  },
  sectionSubtitleWhite: {
    fontSize: '1.25rem',
    color: '#e5e7eb',
  },
  aboutContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  aboutHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  profileImageWrapper: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '2rem',
  },
  profileImage: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  },
  profileBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fbbf24',
    borderRadius: '50%',
    padding: '0.5rem',
    border: '3px solid #fff',
  },
  badges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  badge: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  badgeBlue: { backgroundColor: '#dbeafe', color: '#1e40af' },
  badgeGreen: { backgroundColor: '#d1fae5', color: '#065f46' },
  badgeCyan: { backgroundColor: '#cffafe', color: '#155e75' },
  badgeYellow: { backgroundColor: '#fef3c7', color: '#92400e' },
  badgeRed: { backgroundColor: '#fee2e2', color: '#991b1b' },
  badgeGray: { backgroundColor: '#f3f4f6', color: '#1f2937' },
  badgePurple: { backgroundColor: '#ede9fe', color: '#5b21b6' },
  aboutCards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: '#1a202c',
  },
  cardIcon: {
    marginRight: '0.75rem',
    color: '#3b82f6',
  },
  cardText: {
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.7',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1.5rem',
  },
  featureIcon: {
    backgroundColor: '#dbeafe',
    padding: '0.75rem',
    borderRadius: '50%',
    marginRight: '1rem',
  },
  featureTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
    color: '#1a202c',
  },
  featureText: {
    fontSize: '0.875rem',
    color: '#6b7280',
    margin: 0,
  },
  principles: {
    marginBottom: '1.5rem',
  },
  principlesTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#1a202c',
  },
  list: {
    color: '#6b7280',
    paddingLeft: '1.5rem',
    margin: 0,
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  quote: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginTop: '1rem',
  },
  quoteText: {
    color: '#6b7280',
    fontSize: '0.875rem',
    fontStyle: 'italic',
    margin: 0,
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    padding: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a202c',
    margin: 0,
  },
  statusBadge: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  statusLive: { backgroundColor: '#10b981', color: '#fff' },
  statusDev: { backgroundColor: '#fbbf24', color: '#000' },
  statusCompleted: { backgroundColor: '#6b7280', color: '#fff' },
  projectDescription: {
    color: '#6b7280',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
    flexGrow: 1,
  },
  techStack: {
    marginBottom: '1.5rem',
  },
  techLabel: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: '0.5rem',
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '9999px',
    fontSize: '0.75rem',
  },
  features: {
    marginBottom: '1.5rem',
  },
  featuresLabel: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: '0.5rem',
  },
  featuresList: {
    paddingLeft: '1.25rem',
    margin: 0,
  },
  featuresItem: {
    color: '#6b7280',
    fontSize: '0.875rem',
    marginBottom: '0.25rem',
  },
  projectLinks: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: 'auto',
  },
  linkBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#1a202c',
    color: '#fff',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    flex: 1,
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  linkBtnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#fbbf24',
    color: '#000',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    flex: 1,
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  skillCard: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    padding: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  skillTitle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#1a202c',
  },
  skillIcon: {
    marginRight: '0.75rem',
    color: '#3b82f6',
  },
  skillList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
  },
  skillName: {
    color: '#1a202c',
    fontWeight: '500',
  },
  levelBadge: {
    padding: '0.25rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  levelAdvanced: {
    backgroundColor: '#10b981',
    color: '#fff',
  },
  levelIntermediate: {
    backgroundColor: '#fbbf24',
    color: '#000',
  },
  securitySection: {
    marginTop: '2rem',
  },
  securityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  securityItem: {
    backgroundColor: '#f9fafb',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },
  securityIconWrapper: {
    backgroundColor: '#dbeafe',
    display: 'inline-flex',
    padding: '0.5rem',
    borderRadius: '50%',
    marginBottom: '0.75rem',
  },
  securityName: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1a202c',
  },
  securityLevel: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    backgroundColor: '#3b82f6',
    color: '#fff',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  contactSection: {
    padding: '5rem 0',
    backgroundColor: '#1a202c',
    color: '#fff',
  },
  contactFormWrapper: {
    maxWidth: '800px',
    margin: '0 auto 3rem',
  },
  contactCard: {
    backgroundColor: '#2d3748',
    borderRadius: '0.75rem',
    padding: '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#e5e7eb',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#1a202c',
    border: '1px solid #4a5568',
    borderRadius: '0.375rem',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  textarea: {
    resize: 'vertical',
    minHeight: '120px',
  },
  submitBtn: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '1rem',
    backgroundColor: '#fbbf24',
    color: '#000',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  contactInfo: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  contactLabel: {
    fontSize: '1.25rem',
    color: '#e5e7eb',
    marginBottom: '1.5rem',
  },
  contactButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
  contactBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.875rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '9999px',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s',
  },
  socialSection: {
    marginBottom: '3rem',
  },
  socialLabel: {
    color: '#e5e7eb',
    marginBottom: '1.5rem',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  socialBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    backgroundColor: '#fff',
    color: '#1a202c',
    borderRadius: '50%',
    textDecoration: 'none',
    transition: 'transform 0.3s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  socialBtnLinkedIn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    backgroundColor: '#0a66c2',
    color: '#fff',
    borderRadius: '50%',
    textDecoration: 'none',
    transition: 'transform 0.3s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  location: {
    borderTop: '1px solid #4a5568',
    paddingTop: '2rem',
  },
  locationText: {
    color: '#9ca3af',
    margin: '0.5rem 0',
  },
  footer: {
    backgroundColor: '#0f172a',
    padding: '2rem 0',
    color: '#fff',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  footerText: {
    color: '#9ca3af',
    margin: 0,
  },
  footerHighlight: {
    color: '#fbbf24',
  },
};

export default App;