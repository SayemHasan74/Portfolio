import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Download,
  ExternalLink,
  Facebook,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  X,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Hasan Mohammad Sayem",
  designation: "Full Stack Developer",
  location: "Badda, Dhaka",
  email: "sayemhasan4700@gmail.com",
  phone: "01705298966",
  whatsapp: "01705298966",
  github: "https://github.com/SayemHasan74",
  facebook: "https://www.facebook.com/hasanmohammadsayem.sayem",
};

const skills = [
  {
    title: "Frontend",
    icon: Sparkles,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive UI", "Dashboard UI"],
  },
  {
    title: "Backend",
    icon: Code2,
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL", "Authentication", "API Integration"],
  },
  {
    title: "AI & Research",
    icon: BrainCircuit,
    items: ["NLP", "LLMs", "Python", "Bangla NLP", "Cross-lingual Evaluation", "Deep AI", "Model Probing"],
  },
  {
    title: "Tools",
    icon: Layers3,
    items: ["Git", "GitHub", "VS Code", "Firebase", "Vite", "PyQt6", ".NET"],
  },
];

const projects = [
  {
    slug: "bangla-dyslexia-llm-thesis",
    name: "Bangla Dyslexia Screening Research",
    eyebrow: "NLP / LLM Thesis",
    imageType: "thesis",
    role: "Researcher",
    stack: ["Python", "NLP", "Multilingual LLMs", "Bangla", "Cross-lingual Evaluation", "Lexical Probing"],
    description:
      "A thesis project on probing cross-lingual lexical representations in multilingual large language models through a surface-controlled evaluation for low-resource Bangla dyslexia screening.",
    summary:
      "The work studies whether multilingual LLMs preserve useful lexical signals across languages and how those signals can support Bangla dyslexia screening. It was completed under the supervision of Professor Dr. Farig Yousuf Sadeque at BRAC University. The focus is on careful evaluation design, low-resource language constraints, and model behavior instead of only building a UI.",
    live: "",
    github: "https://github.com/stuBBornButterfly/Dyslexia_Thesis",
    paper: "",
    features: [
      "Completed under the supervision of Professor Dr. Farig Yousuf Sadeque, BRAC University.",
      "Surface-controlled evaluation design for lexical representation probing.",
      "Low-resource Bangla dyslexia screening research direction.",
      "Cross-lingual analysis of multilingual large language models.",
      "Research framing that connects NLP, accessibility, and language technology.",
    ],
    challenges: [
      "Controlling surface-level word effects while still evaluating lexical representation quality.",
      "Working in a low-resource Bangla context where ready-made datasets and benchmarks are limited.",
      "Connecting linguistic evaluation, model analysis, and assistive screening goals in one thesis direction.",
    ],
    future:
      "Expand the evaluation dataset, compare more multilingual LLMs, add clearer visual analytics, and explore a practical screening interface for educators and researchers.",
  },
  {
    slug: "disaster-response-platform",
    name: "Disaster Management System",
    eyebrow: "Team Project / Contributor",
    image: "/assets/disaster-platform.png",
    role: "Frontend contributor",
    stack: ["React", "TypeScript", "React Leaflet", "REST APIs", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "A centralized emergency response and relief coordination platform for victims, volunteers, NGOs, and admins.",
    summary:
      "This MERN platform supports SOS requests, role-based workflows, dashboards, map-based operations, volunteer coordination, NGO inventory, relief camps, notifications, and admin analytics. My work focused on the live operations map, dashboard UI, API integration, filters, markers, and map interactions.",
    live: "",
    github: "https://github.com/itsmenabeel/disaster-platform",
    features: [
      "Live operations map using React Leaflet and OpenStreetMap.",
      "Role-based rescue workflow for victims, volunteers, NGOs, and admins.",
      "Dashboard UI with operational stats, filters, and map markers.",
      "Frontend integration with backend REST APIs.",
      "Emergency coordination features including SOS, tasks, camps, inventory, and notifications.",
    ],
    challenges: [
      "Keeping map state, filters, markers, and backend data synchronized cleanly.",
      "Designing dashboard screens that stay readable during emergency-style workflows.",
      "Coordinating frontend integration inside a team project with multiple roles and feature areas.",
    ],
    future:
      "Improve real-time tracking, add stronger notification flows, refine analytics, and add better mobile support for responders in the field.",
  },
  {
    slug: "pulse-overlay-stats-checker",
    name: "Pulse Overlay Stats Checker",
    eyebrow: "Windows Performance Tool",
    image: "/assets/stats-checker.png",
    role: "Full project builder",
    stack: [".NET 9", "LibreHardwareMonitor", "Intel PresentMon", "Windows Desktop", "JSON Settings"],
    description:
      "A lightweight configurable Windows performance overlay for monitoring system and gaming performance.",
    summary:
      "Pulse Overlay displays FPS, CPU/GPU usage, temperatures, RAM/VRAM, disk activity, network speed, clocks, power, and time in a click-through horizontal overlay. It includes a settings panel for screen position, spacing, font size, opacity, color, sensor source, and startup behavior.",
    live: "",
    github: "https://github.com/SayemHasan74/Stats-Checker",
    features: [
      "FPS tracking for foreground applications through PresentMon/ETW.",
      "CPU, GPU, RAM, VRAM, disk, network, clock, power, and temperature metrics.",
      "Custom overlay position, color, opacity, spacing, and font size.",
      "Tray-friendly behavior with keyboard toggle support.",
      "Portable EXE and installer-ready deliverables.",
    ],
    challenges: [
      "Collecting FPS and hardware sensor values reliably across different Windows machines.",
      "Handling missing hardware sensors without showing misleading temperature data.",
      "Making the overlay configurable while keeping the on-screen display minimal and clean.",
    ],
    future:
      "Add preset profiles, richer tray controls, export/import settings, per-game profiles, and more polished installer flows.",
  },
  {
    slug: "prism-video-player",
    name: "Prism Video Player",
    eyebrow: "Desktop Media Player",
    image: "/assets/video-player.png",
    role: "Full project builder",
    stack: ["Python", "PyQt6", "mpv", "yt-dlp", "SQLite", "Windows Desktop"],
    description:
      "A dark Windows 11-style desktop media player built around clean playback controls and flexible media support.",
    summary:
      "Prism Player uses PyQt6 and mpv to support local video/audio playback, YouTube and URL playback, frameless window controls, overlay seekbar, playlist panel, resume history, audio/subtitle menus, screenshot capture, external subtitles, A-B loop, speed controls, drag-and-drop, and keyboard shortcuts.",
    live: "",
    github: "https://github.com/SayemHasan74/Video-Player-",
    features: [
      "mpv-backed local video and audio playback.",
      "YouTube and URL playback with yt-dlp support.",
      "Playlist panel, resume position history, and keyboard shortcuts.",
      "Subtitle loading, audio/subtitle track menus, and screenshot capture.",
      "Frameless Windows 11-style dark UI with overlay playback controls.",
    ],
    challenges: [
      "Combining a native-feeling PyQt interface with mpv-backed playback controls.",
      "Managing playlist state, resume history, subtitles, and screenshots without making the UI feel heavy.",
      "Supporting both local media and URL playback in a consistent flow.",
    ],
    future:
      "Improve picture-in-picture, refine subtitle discovery, add theme options, and package the app for easier installation.",
  },
  {
    slug: "tree-watering-3d-game",
    name: "3D Tree Watering Game",
    eyebrow: "3D Game",
    imageType: "game",
    role: "Game developer",
    stack: ["3D Game Development", "Interactive Gameplay", "Level Design", "Game Logic"],
    description:
      "A 3D game project centered on tree watering gameplay, environmental interaction, and objective-based mechanics.",
    summary:
      "The project explores simple 3D interaction design through a task-based game loop where the player navigates an environment and interacts with trees. It focuses on player feedback, movement, objective clarity, and building the foundation for a small playable experience.",
    live: "",
    github: "https://github.com/SayemHasan74/GameProject",
    features: [
      "3D environment interaction and movement.",
      "Tree watering objective loop.",
      "Basic gameplay feedback and task completion logic.",
      "Foundation for levels, scoring, and environmental polish.",
    ],
    challenges: [
      "Designing clear 3D interactions around a simple objective.",
      "Balancing gameplay feedback so the player understands progress and task completion.",
      "Organizing game logic for movement, interaction, and environment behavior.",
    ],
    future:
      "Add stronger visuals, sound feedback, more levels, scoring, progression, and a clearer game menu flow.",
  },
  {
    slug: "amar-gan",
    name: "Amar Gan",
    eyebrow: "Music Project",
    imageType: "music",
    role: "Planned builder",
    stack: ["Frontend", "Media UI", "Audio Experience", "Project details to be updated"],
    description:
      "A music-focused project entry prepared for future updates as the repository, screenshots, and live link become ready.",
    summary:
      "This portfolio keeps Amar Gan as a ready project slot so it can later become a full music experience with playback, playlists, search, and a polished content interface. The detailed page is already structured for future screenshots, links, and feature notes.",
    live: "",
    github: "",
    features: [
      "Prepared portfolio entry for a future music platform.",
      "Ready structure for screenshots, repository link, live link, and full feature list.",
      "Planned focus on media UI, playback experience, and music discovery.",
    ],
    challenges: [
      "The final feature set is still being prepared.",
      "The project needs a clean structure for music discovery, playback, and content presentation.",
    ],
    future:
      "Add the repository, live deployment, screenshots, player features, playlists, and a complete technical write-up.",
  },
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const activityItems = [
  "Researching Bangla NLP and multilingual LLM behavior",
  "Building API-first full stack projects",
  "Designing live dashboard and map interactions",
  "Shipping Windows tools with polished desktop UI",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const project = useProjectFromPath();
  const isResume = window.location.pathname === "/resume";

  if (project) return <ProjectPage project={project} />;
  if (isResume) return <ResumePage />;

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <ActivityStrip />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function useProjectFromPath() {
  return useMemo(() => {
    const match = window.location.pathname.match(/^\/projects\/([^/]+)/);
    return match ? projects.find((item) => item.slug === match[1]) : null;
  }, []);
}

function Navbar({ menuOpen, setMenuOpen }) {
  const goTo = (id) => {
    setMenuOpen(false);
    window.history.pushState({}, "", "/");
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  return (
    <header className="navbar">
      <a className="brand" href="/" aria-label="Go to home">
        <span>HS</span>
        <strong>Sayem</strong>
      </a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {navItems.map(([label, id]) => (
          <button key={id} type="button" onClick={() => goTo(id)}>
            {label}
          </button>
        ))}
        <a href="/resume">Resume</a>
      </nav>
      <button className="icon-button mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy reveal">
        <p className="eyebrow">Full Stack Developer - AI, NLP & LLM Enthusiast</p>
        <h1>Hi, I am Hasan Mohammad Sayem.</h1>
        <p className="hero-text">
          I build full stack applications, AI-focused experiments, research tools, dashboards, and desktop utilities. My favorite work sits between strong backend logic, clean user experience, and deep NLP/LLM ideas.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="/resume">
            <FileText size={18} /> View Resume
          </a>
          <a className="secondary-button" href="/Hasan-Mohammad-Sayem-Resume.pdf" download>
            <Download size={18} /> Download PDF
          </a>
          <a className="secondary-button" href="#projects">
            View Projects <ArrowRight size={18} />
          </a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={20} />
          </a>
          <a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook profile">
            <Facebook size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email Hasan">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="hero-stage reveal">
        <div className="hero-photo-wrap">
          <img src="/assets/hasan-sayem.png" alt="Hasan Mohammad Sayem" className="hero-photo" />
        </div>
        <div className="floating-panel">
          <Activity size={18} />
          <span>Currently exploring</span>
          <strong>NLP, LLMs, APIs</strong>
        </div>
      </div>
    </section>
  );
}

function ActivityStrip() {
  return (
    <section className="activity-strip" aria-label="Live activity highlights">
      <div className="activity-track">
        {[...activityItems, ...activityItems].map((item, index) => (
          <span key={`${item}-${index}`}>
            <Sparkles size={16} /> {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section split-section reveal">
      <div>
        <p className="section-kicker">About Me</p>
        <h2>Curious about code, AI, and systems that actually help people.</h2>
      </div>
      <div className="prose rich-panel">
        <p>
          My programming journey has grown from learning web fundamentals into building full stack applications, desktop tools, dashboards, and research-driven AI work. I enjoy the point where an idea becomes useful: an API returns the right data, a map interaction becomes clear, or an evaluation reveals how a language model is behaving.
        </p>
        <p>
          I enjoy backend API work, frontend interfaces, and deeper AI topics like NLP, LLM behavior, cross-lingual representations, Bangla language technology, and neural approaches to language understanding. Outside programming, I love heavy travelling and I am a regular football player.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Technical toolkit</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <article className="skill-card lift-card" key={group.title}>
              <div className="skill-icon"><Icon /></div>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section split-section education-band reveal">
      <div>
        <p className="section-kicker">Education</p>
        <h2>Academic background</h2>
      </div>
      <article className="timeline-card lift-card">
        <GraduationCap size={28} />
        <div>
          <h3>BSc in Computer Science and Engineering</h3>
          <p>BRAC University</p>
          <p>Passing Year: 2026</p>
          <p className="muted">
            Thesis: Probing Cross-Lingual Lexical Representations in Multilingual Large Language Models: A Surface-Controlled Evaluation for Low-Resource Bangla Dyslexia Screening.
          </p>
        </div>
      </article>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected work</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card lift-card" key={project.slug}>
            <ProjectVisual project={project} />
            <div className="project-card-body">
              <p className="card-eyebrow">{project.eyebrow}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="mini-feature-row">
                {project.stack.slice(0, 3).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="details-link" href={`/projects/${project.slug}`}>
                View Details <ArrowRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return <img className="project-image" src={project.image} alt={`${project.name} screenshot`} />;
  }

  return (
    <div className={`visual-card ${project.imageType}`}>
      {project.imageType === "thesis" && (
        <>
          <BrainCircuit size={44} />
          <span>LLM lexical probe</span>
          <strong>Bangla NLP Research</strong>
        </>
      )}
      {project.imageType === "game" && (
        <>
          <Rocket size={44} />
          <span>Interactive 3D objective</span>
          <strong>Tree Watering Game</strong>
        </>
      )}
      {project.imageType === "music" && (
        <>
          <BookOpen size={44} />
          <span>Music experience</span>
          <strong>Amar Gan</strong>
        </>
      )}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section reveal">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let us build something useful.</h2>
      </div>
      <div className="contact-grid">
        <a href={`mailto:${profile.email}`} className="contact-card lift-card">
          <Mail />
          <span>Email</span>
          <strong>{profile.email}</strong>
        </a>
        <a href={`tel:${profile.phone}`} className="contact-card lift-card">
          <Phone />
          <span>Phone / WhatsApp</span>
          <strong>{profile.phone}</strong>
        </a>
        <div className="contact-card lift-card">
          <MapPin />
          <span>Location</span>
          <strong>{profile.location}</strong>
        </div>
      </div>
    </section>
  );
}

function ProjectPage({ project }) {
  return (
    <>
      <PageNav />
      <main className="project-detail">
        <section className="project-hero reveal">
          <div>
            <p className="section-kicker">{project.eyebrow}</p>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
            <div className="project-actions">
              {project.live ? (
                <a className="primary-button" href={project.live} target="_blank" rel="noreferrer">
                  Live Project <ExternalLink size={18} />
                </a>
              ) : (
                <span className="disabled-pill">Live link coming soon</span>
              )}
              {project.github ? (
                <a className="secondary-button" href={project.github} target="_blank" rel="noreferrer">
                  GitHub Repository <Github size={18} />
                </a>
              ) : (
                <span className="disabled-pill">Repository to be updated</span>
              )}
              {project.slug === "bangla-dyslexia-llm-thesis" && (
                <span className="disabled-pill">Published paper link coming soon</span>
              )}
            </div>
          </div>
          <ProjectVisual project={project} />
        </section>

        <section className="project-stats">
          <article><span>Role</span><strong>{project.role}</strong></article>
          <article><span>Stack Items</span><strong>{project.stack.length}</strong></article>
          <article><span>Feature Notes</span><strong>{project.features.length}</strong></article>
        </section>

        <section className="detail-grid">
          <article className="lift-card">
            <h2>Main Technology Stack</h2>
            <div className="chips">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          <article className="lift-card">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="lift-card">
            <h2>Challenges Faced</h2>
            <ul>
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="wide lift-card">
            <h2>Potential Improvements & Future Plans</h2>
            <p>{project.future}</p>
          </article>
        </section>
      </main>
    </>
  );
}

function ResumePage() {
  return (
    <>
      <PageNav />
      <main className="resume-page">
        <section className="resume-hero reveal">
          <div>
            <p className="section-kicker">Resume</p>
            <h1>Hasan Mohammad Sayem</h1>
            <p>Full Stack Developer focused on AI, NLP, LLMs, backend APIs, dashboards, and practical software products.</p>
            <div className="hero-actions">
              <a className="primary-button" href="/Hasan-Mohammad-Sayem-Resume.pdf" download>
                <Download size={18} /> Download PDF
              </a>
              <a className="secondary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </div>
          <div className="resume-contact-card lift-card">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub Profile</a>
          </div>
        </section>

        <section className="resume-layout">
          <aside className="resume-side">
            <ResumeBlock title="Core Skills">
              <div className="chips">
                {skills.flatMap((group) => group.items).slice(0, 26).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </ResumeBlock>
            <ResumeBlock title="Education">
              <p><strong>BSc in CSE</strong></p>
              <p>BRAC University</p>
              <p>Passing Year: 2026</p>
            </ResumeBlock>
            <ResumeBlock title="Interests">
              <p>AI research, backend APIs, NLP, LLMs, travelling, and regular football.</p>
            </ResumeBlock>
          </aside>

          <section className="resume-main">
            <ResumeBlock title="Profile">
              <p>
                CSE student and full stack developer with a strong interest in AI, NLP, multilingual LLMs, backend architecture, and polished user interfaces. Comfortable building web apps, desktop tools, dashboards, maps, and research-focused systems.
              </p>
            </ResumeBlock>
            <ResumeBlock title="Thesis">
              <p>
                Probing Cross-Lingual Lexical Representations in Multilingual Large Language Models: A Surface-Controlled Evaluation for Low-Resource Bangla Dyslexia Screening.
              </p>
            </ResumeBlock>
            <ResumeBlock title="Projects">
              <div className="resume-project-list">
                {projects.map((project) => (
                  <article key={project.slug}>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <div className="mini-feature-row">
                      {project.stack.slice(0, 5).map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </ResumeBlock>
          </section>
        </section>
      </main>
    </>
  );
}

function ResumeBlock({ title, children }) {
  return (
    <article className="resume-block lift-card">
      <h2>{title}</h2>
      {children}
    </article>
  );
}

function PageNav() {
  return (
    <header className="project-page-nav">
      <a href="/" className="secondary-button">
        <ArrowLeft size={18} /> Back to Portfolio
      </a>
      <a href="/resume" className="secondary-button">
        <FileText size={18} /> Resume
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub profile">
        <Github size={21} />
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>Hasan Mohammad Sayem</span>
      <span>Full Stack Developer focused on AI, NLP, LLMs, and useful products.</span>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
