
import { useEffect, useState } from 'react';
import './App.css';

const skills = [
  ['☕', 'Java', 'Programming'],
  ['⌘', 'Python', 'AI & scripting'],
  ['◈', 'Flutter', 'App development'],
  ['🌐', 'HTML & CSS', 'Web development'],
  ['⟡', 'Firebase', 'App backend'],
  ['☁', 'AWS', 'Cloud hosting'],
  ['⑂', 'GitHub', 'Version control'],
  ['⌬', 'SQL', 'Databases'],
];

const projects = [
  {
    icon: '◉',
    number: '001',
    title: 'AuthShield',
    description: 'A two-layer authentication system concept combining keypad access, facial verification, ESP32-CAM hardware and mobile alerts.',
    tags: ['ESP32-CAM', 'Flutter', 'FastAPI', 'Supabase'],
  },
  {
    icon: '⌘',
    number: '002',
    title: 'AI Study Assistant',
    description: 'An AI-powered study assistant concept designed to answer questions from documents and support learning and revision.',
    tags: ['Python', 'RAG', 'LLMs', 'pgvector'],
  },
  {
    icon: '◇',
    number: '003',
    title: 'RailDine',
    description: 'A smart train food delivery concept connecting passenger orders, staff workflows and an automated delivery robot.',
    tags: ['Flutter', 'FastAPI', 'Firebase', 'ESP32'],
  },
  {
    icon: '✳',
    number: '004',
    title: 'Eventoria',
    description: 'An event management application concept for organizing events, coordinating vendors and simplifying planning.',
    tags: ['Flutter', 'Firebase', 'Gemini API'],
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">HG<span>.</span></a>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">Let's connect ↗</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="eyebrow mono">
          <span className="status-dot" />
          ENGINEERING THE DIGITAL FUTURE
        </div>

        <h1>Building<br />what's <span className="gradient">next.</span></h1>

        <p className="hero-desc">
          Hey, I'm Harish Gangurde — an engineering student and developer
          exploring software, AI and cloud technology. I turn ideas into
          digital experiences.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore my work ↗</a>
          <a className="button" href="#about">Discover my story ↓</a>
        </div>

        <div className="metrics">
          <div><strong>01<span className="gradient">.</span></strong><small>Curious mind</small></div>
          <div><strong>∞</strong><small>Ideas to explore</small></div>
          <div><strong>24/7</strong><small>Learning mindset</small></div>
        </div>
      </div>

      <div className="visual" aria-label="Animated digital core">
        <div className="orbit" />
        <div className="orbit orbit-two" />
        <div className="core">
          <div className="core-inner">
            <div className="core-symbol gradient">HG</div>
            <div className="core-label mono">DIGITAL CORE</div>
          </div>
        </div>
        <div className="float-card float-a">
          <small className="mono">CURRENT FOCUS</small>
          <strong>Software + Cloud</strong>
        </div>
        <div className="float-card float-b">
          <small className="mono">STATUS</small>
          <strong><span className="green">●</span> Always learning</strong>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div className="kicker mono">01 / THE HUMAN BEHIND THE CODE</div>
          <h2>A little about <span className="gradient">me.</span></h2>
          <p className="section-desc">
            Engineering isn't just about making things work. It's about
            imagining better possibilities and bringing them to life.
          </p>
        </div>

        <div className="about-grid">
          <article className="panel">
            <div className="panel-icon">✳</div>
            <h3>The mindset</h3>
            <p>
              I'm pursuing Electronics and Telecommunication Engineering
              while building my skills in software development, application
              design and cloud computing.
            </p>
            <p>
              I enjoy solving problems and learning by building real
              projects. My goal is to create useful, reliable technology.
            </p>
          </article>

          <article className="panel">
            <div className="panel-icon">⌘</div>
            <h3>Quick information</h3>
            <div className="info-list">
              <div className="info-row"><span>Discipline</span><span>E&TC Engineering</span></div>
              <div className="info-row"><span>Interests</span><span>AI, apps, cloud</span></div>
              <div className="info-row"><span>Languages</span><span>Java, Python, Dart</span></div>
              <div className="info-row"><span>Currently</span><span>Building & learning</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <div className="kicker mono">02 / MY TOOLKIT</div>
          <h2>Tools of the <span className="gradient">trade.</span></h2>
          <p className="section-desc">
            Technologies I'm learning and using to turn concepts into software.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(([icon, name, description]) => (
            <article className="skill" key={name}>
              <span className="skill-icon">{icon}</span>
              <strong>{name}</strong>
              <small>{description}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <div className="kicker mono">03 / SELECTED WORK</div>
          <h2>Ideas made <span className="gradient">real.</span></h2>
          <p className="section-desc">
            A glimpse into the kinds of systems and experiences I'm
            interested in building.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <article className="panel project" key={project.number}>
              <div className="project-top"><span>{project.icon}</span></div>
              <div className="kicker mono">PROJECT / {project.number}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>

        <p className="disclaimer">
          Project descriptions summarize concepts and implementations;
          not every feature is necessarily deployed publicly.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="panel contact-panel">
          <div className="kicker mono">04 / THE NEXT CONNECTION</div>
          <h2>Have an idea?<br /><span className="gradient">Let's build it.</span></h2>
          <p className="section-desc">
            Interested in technology, creative projects or collaborating
            on something interesting? Find me online.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="https://github.com/harishgangurde"
              target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="button"
              href="https://www.linkedin.com/in/harish-gangurde-0aa124320/"
              target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    document.title = 'Harish Gangurde | Digital Portfolio';

    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="container footer-inner">
          <a href="#home" className="logo">HG<span>.</span></a>
          <span>Designed with curiosity. Built for what's next.</span>
          <span className="mono">© {new Date().getFullYear()} HARISH GANGURDE</span>
        </div>
      </footer>
    </>
  );
}
