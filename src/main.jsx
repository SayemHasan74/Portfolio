import React, { useEffect, useMemo, useState } from "react";
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

const buildTools = [
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Rocket },
  { name: "MongoDB", icon: Layers3 },
  { name: "Python", icon: BrainCircuit },
  { name: "Tailwind", icon: Sparkles },
  { name: "Vite", icon: Activity },
  { name: "GitHub", icon: Github },
  { name: "REST APIs", icon: Target },
];

const projects = [
  {
    slug: "soundsip",
    name: "SoundSip",
    eyebrow: "Music App",
    imageType: "music",
    role: "Full-stack developer in group project",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Socket.io", "Node.js", "Express", "MongoDB", "Mongoose", "Clerk", "Cloudinary"],
    description:
      "A Spotify-inspired full-stack real-time music streaming web application with playback controls, playlists, favorites, social features, and admin content management.",
    summary:
      "SoundSip is a group-built music streaming platform. My work focused on the persistent music player, global playback state, queue controls, shuffle/repeat logic, liked songs, playlist management, home dashboard sections, listening history, user search, settings integration, and real-time activity broadcasting with Socket.io.",
    live: "https://soundsip.onrender.com",
    github: "https://github.com/SayemHasan74/SoundSip",
    features: [
      "Persistent bottom playback bar with play/pause, next/previous, progress seek, volume, mute, shuffle, and repeat modes.",
      "Zustand-powered player state with a hidden HTML audio component handling actual playback.",
      "Liked Songs page, heart buttons, favorites store, favorite stats, and auto-synced Liked Songs playlist.",
      "Playlist CRUD with create, edit, delete, public/private visibility, add/remove songs, and protection for the special Liked Songs playlist.",
      "Home dashboard sections for featured songs, trending songs, Made For You, recently played tracks, and browse albums.",
      "Socket.io activity broadcasting so friends can see the currently playing song in real time.",
      "User profile integration, user search by name or handle, and settings for audio quality, playback, and privacy.",
    ],
    challenges: [
      "Keeping player state synchronized across the bottom player, song cards, queues, playlists, and route changes.",
      "Implementing shuffle in a way that truly randomizes the queue while still allowing the original order to be restored.",
      "Syncing likes, favorite stats, and the special Liked Songs playlist without creating inconsistent UI states.",
      "Broadcasting listening activity in real time without making normal playback interactions feel delayed.",
      "Coordinating frontend and backend features inside a group project with shared ownership boundaries.",
    ],
    future:
      "Polish production deployment, add stronger music recommendation logic, improve mobile listening layouts, expand analytics for listening history, and refine real-time social features such as chat and friend activity.",
  },
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
      "Research framing that connects NLP, accessibility, cognitive screening, and Bangla language technology.",
      "Published paper link section included for future publication update.",
    ],
    challenges: [
      "Controlling surface-level word effects while still evaluating lexical representation quality.",
      "Working in a low-resource Bangla context where ready-made datasets and benchmarks are limited.",
      "Connecting linguistic evaluation, model analysis, and assistive screening goals in one thesis direction.",
      "Keeping the evaluation methodology explainable enough for both NLP-focused readers and accessibility-focused readers.",
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
      "Emergency coordination modules for SOS requests, volunteer tasks, NGO inventory, relief camps, aid distribution, notifications, incidents, and analytics.",
      "MVC backend structure with JWT/RBAC, Mongoose models, media upload support, and role-protected routes.",
    ],
    challenges: [
      "Keeping map state, filters, markers, and backend data synchronized cleanly.",
      "Designing dashboard screens that stay readable during emergency-style workflows.",
      "Coordinating frontend integration inside a team project with multiple roles and feature areas.",
      "Representing emergency locations and operational status clearly without overwhelming the map UI.",
    ],
    future:
      "Improve real-time tracking, add stronger notification flows, refine analytics, and add better mobile support for responders in the field.",
  },
  {
    slug: "devpulse-issue-tracker-api",
    name: "DevPulse Issue Tracker API",
    eyebrow: "Backend API",
    imageType: "api",
    role: "Backend developer",
    stack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "JWT", "bcrypt", "Raw SQL"],
    description:
      "A backend API project for an internal issue tracker with authentication, roles, issue management, filtering, sorting, and system metrics.",
    summary:
      "DevPulse is a production-deployed backend API for issue tracking. Users can register and log in, contributors can create and update their own open issues, maintainers can manage issues, and everyone can view issue lists and details with filtering and sorting support.",
    live: "https://devpulse-o72j.onrender.com/",
    github: "https://github.com/SayemHasan74/devpulse",
    features: [
      "User registration and login with hashed passwords.",
      "JWT authentication with contributor and maintainer roles.",
      "Issue creation, listing, single issue details, update, and delete flows.",
      "Filtering by issue type and status, plus newest/oldest sorting.",
      "Maintainer-only basic system metrics endpoint.",
      "PostgreSQL schema with users and issues tables, unique emails, reporter ownership, status/type fields, and timestamps.",
      "Consistent success/error JSON responses for API consumers.",
    ],
    challenges: [
      "Designing secure role-based access for contributor and maintainer actions.",
      "Writing raw SQL queries while keeping API responses consistent and predictable.",
      "Structuring filters, sorting, validation, and protected routes cleanly in TypeScript.",
      "Deploying the backend with environment-based database credentials and production build/start commands.",
    ],
    future:
      "Add frontend dashboard screens, stronger validation, pagination, email notifications, API documentation, and richer maintainer analytics.",
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
      "Temperature source detection that prefers reliable CPU package/Tdie/Core Max sensors and shows detected sensor names.",
      "Settings stored locally as JSON under the user's app data folder.",
    ],
    challenges: [
      "Collecting FPS and hardware sensor values reliably across different Windows machines.",
      "Handling missing hardware sensors without showing misleading temperature data.",
      "Making the overlay configurable while keeping the on-screen display minimal and clean.",
      "Avoiding unsafe game injection by relying on PresentMon/ETW instead of DLL injection.",
      "Accounting for anti-cheat, exclusive fullscreen, administrator permission, and unsupported laptop sensor cases.",
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
      "Playlist panel with add, remove, select, next, previous, and shuffle-ready logic.",
      "Resume position history stored in SQLite and restored across sessions.",
      "Subtitle loading, audio/subtitle track menus, online subtitle finder, and external subtitle support.",
      "Screenshot capture with timestamped filenames.",
      "A-B loop controls, speed cycling, fit/cover fullscreen modes, drag-and-drop support, and always-on-top toggle.",
      "Frameless Windows 11-style dark UI with overlay playback controls.",
    ],
    challenges: [
      "Combining a native-feeling PyQt interface with mpv-backed playback controls.",
      "Managing playlist state, resume history, subtitles, and screenshots without making the UI feel heavy.",
      "Supporting both local media and URL playback in a consistent flow.",
      "Keeping keyboard shortcuts, overlay controls, and fullscreen behavior predictable in a frameless desktop window.",
      "Handling local setup requirements such as mpv-2.dll while keeping the run flow simple for Windows users.",
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
    stack: ["3D Game Development", "Interactive Gameplay", "Tree Watering Mechanics", "Level Design", "Game Logic"],
    description:
      "A 3D game project centered on tree watering gameplay, environmental interaction, and objective-based mechanics.",
    summary:
      "The project explores simple 3D interaction design through a task-based game loop where the player navigates an environment and interacts with trees. It focuses on player feedback, movement, objective clarity, and building the foundation for a small playable experience.",
    live: "",
    github: "https://github.com/SayemHasan74/GameProject",
    features: [
      "3D tree watering game concept based on a simple environmental objective.",
      "Player movement and interaction loop centered around locating and watering trees.",
      "Task-based gameplay foundation that can be expanded into levels, scoring, and progression.",
      "Small, focused game idea that keeps the objective understandable for players.",
    ],
    challenges: [
      "Designing clear 3D interactions around a simple tree-watering objective.",
      "Making the player understand when they are close enough to interact with a tree.",
      "Organizing movement, interaction, and objective-completion logic so the game can grow later.",
      "Keeping the scope realistic because the public README currently documents only the core tree-watering idea.",
    ],
    future:
      "Add stronger visuals, sound feedback, more levels, scoring, progression, and a clearer game menu flow.",
  },
];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Education", "education"],
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
  useDynamicPageEffects();

  if (project) {
    return (
      <>
        <BackgroundEffects />
        <ProjectPage project={project} />
      </>
    );
  }

  if (isResume) {
    return (
      <>
        <BackgroundEffects />
        <ResumePage />
      </>
    );
  }

  return (
    <>
      <BackgroundEffects />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Projects />
        <NowBuilding />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function useDynamicPageEffects() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(
      ".reveal, .project-card, .stack-row, .season-timeline article, .build-timeline article, .contact-list a, .research-chips span, .hero-actions a"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );

    revealItems.forEach((item, index) => {
      const shouldStagger = item.matches(".research-chips span, .hero-actions a");
      item.style.setProperty("--reveal-delay", shouldStagger ? `${Math.min(index % 5, 4) * 45}ms` : "0ms");
      observer.observe(item);
    });

    const timelines = [...document.querySelectorAll(".season-timeline, .build-timeline")];

    const updateTimeline = () => {
      const viewportAnchor = window.innerHeight * 0.48;

      timelines.forEach((timeline) => {
        const rect = timeline.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (viewportAnchor - rect.top) / Math.max(rect.height, 1)));
        timeline.style.setProperty("--timeline-progress", `${progress * 100}%`);

        timeline.querySelectorAll("article").forEach((item) => {
          const itemRect = item.getBoundingClientRect();
          item.classList.toggle("is-active", itemRect.top < viewportAnchor);
        });
      });
    };

    updateTimeline();
    requestAnimationFrame(updateTimeline);
    setTimeout(updateTimeline, 120);
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);
    window.addEventListener("hashchange", updateTimeline);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
      window.removeEventListener("hashchange", updateTimeline);
    };
  }, []);
}

function useProjectFromPath() {
  return useMemo(() => {
    const match = window.location.pathname.match(/^\/projects\/([^/]+)/);
    return match ? projects.find((item) => item.slug === match[1]) : null;
  }, []);
}

function BackgroundEffects() {
  useEffect(() => {
    const particles = [...document.querySelectorAll(".particle-field span")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || particles.length === 0) return;

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const radius = isCoarsePointer ? 250 : 210;
    const maxForce = isCoarsePointer ? 96 : 78;
    let frame = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const updateParticles = () => {
      frame = 0;
      particles.forEach((particle) => {
        const rect = particle.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const x = cx - mouseX;
        const y = cy - mouseY;
        const distance = Math.hypot(x, y);
        if (distance > radius || distance === 0) {
          particle.style.setProperty("--push-x", "0px");
          particle.style.setProperty("--push-y", "0px");
          return;
        }

        const force = (1 - distance / radius) * maxForce;
        particle.style.setProperty("--push-x", `${(x / distance) * force}px`);
        particle.style.setProperty("--push-y", `${(y / distance) * force}px`);
      });
    };

    const moveDust = (x, y) => {
      mouseX = x;
      mouseY = y;
      if (!frame) frame = window.requestAnimationFrame(updateParticles);
    };

    const requestUpdate = (event) => moveDust(event.clientX, event.clientY);

    const requestTouchUpdate = (event) => {
      const touch = event.touches?.[0];
      if (touch) moveDust(touch.clientX, touch.clientY);
    };

    const resetParticles = () => {
      mouseX = -9999;
      mouseY = -9999;
      if (!frame) frame = window.requestAnimationFrame(updateParticles);
    };

    window.addEventListener("pointermove", requestUpdate, { passive: true });
    window.addEventListener("pointerdown", requestUpdate, { passive: true });
    window.addEventListener("pointercancel", resetParticles);
    window.addEventListener("pointerleave", resetParticles);
    window.addEventListener("touchstart", requestTouchUpdate, { passive: true });
    window.addEventListener("touchmove", requestTouchUpdate, { passive: true });
    window.addEventListener("touchend", resetParticles);
    window.addEventListener("touchcancel", resetParticles);

    return () => {
      window.removeEventListener("pointermove", requestUpdate);
      window.removeEventListener("pointerdown", requestUpdate);
      window.removeEventListener("pointercancel", resetParticles);
      window.removeEventListener("pointerleave", resetParticles);
      window.removeEventListener("touchstart", requestTouchUpdate);
      window.removeEventListener("touchmove", requestTouchUpdate);
      window.removeEventListener("touchend", resetParticles);
      window.removeEventListener("touchcancel", resetParticles);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="space-light" aria-hidden="true"></div>
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 112 }).map((_, index) => {
          const x = (index * 37) % 100;
          const y = (index * 61) % 100;
          const size = 1.2 + (index % 4) * 0.62;
          const duration = 4.8 + (index % 8);
          const delay = -1 * ((index * 0.47) % 10);
          const dx = -70 + (index % 8) * 31;
          const dy = -120 - (index % 7) * 34;

          return (
            <span
              key={index}
              style={{
                "--x": `${x}%`,
                "--y": `${y}%`,
                "--s": `${size}px`,
                "--d": `${duration}s`,
                "--delay": `${delay}s`,
                "--dx": `${dx}px`,
                "--dy": `${dy}px`,
              }}
            />
          );
        })}
      </div>
    </>
  );
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
        <h1>{profile.name}</h1>
        <p className="hero-lede">Full-stack developer working where multilingual NLP research meets shipped software.</p>
        <div className="abstract-block">
          <span>Abstract</span>
          <p>
            I study how multilingual language models represent low-resource languages, and build the systems around those ideas:
            backend APIs, dashboards, desktop tools, and production interfaces that move research into usable software.
          </p>
        </div>
        <div className="research-chips">
          <span>BRAC University - CSE</span>
          <span>Dhaka, Bangladesh</span>
          <span>NLP - Backend - Web</span>
        </div>
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
        <div className="hero-figure-card">
          <div className="hero-photo-wrap">
            <img src="/assets/hasan-sayem.jpg" alt="Hasan Mohammad Sayem" className="hero-photo" decoding="async" fetchPriority="high" />
          </div>
          <p className="figure-caption">
            <strong>Fig. 0.</strong> Hasan Mohammad Sayem - full-stack engineering, Bangla NLP research, backend APIs, and product interfaces.
          </p>
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
  const focusCards = [
    {
      title: "Full-stack systems",
      copy: "React interfaces, Node/Express APIs, real-time features, dashboards, and production-minded web apps.",
      icon: Code2,
    },
    {
      title: "AI and Bangla NLP",
      copy: "Multilingual LLM probing, Bangla text research, practical AI experiments, and research tools.",
      icon: BrainCircuit,
    },
    {
      title: "Tools people can use",
      copy: "Desktop utilities, maps, trackers, music platforms, and clean workflows that make complex ideas usable.",
      icon: Rocket,
    },
  ];

  const facts = [
    ["Based in", "Dhaka, Bangladesh"],
    ["Studying", "CSE at BRAC"],
    ["Focus", "MERN / AI / NLP"],
    ["Award", "Duke Bronze"],
  ];

  return (
    <section id="about" className="section about-section reveal">
      <div className="about-dossier">
        <div className="about-orbit-icon">
          <GraduationCap size={22} />
        </div>
        <p className="section-kicker">Current Track</p>
        <h2>CSE student building full-stack products, research tools, and AI-minded systems.</h2>
        <p>
          BRAC University student focused on clean web apps, backend APIs, Bangla NLP research, dashboards, and software that feels useful beyond the demo.
        </p>

        <div className="about-award">
          <div className="award-icon">
            <Trophy size={20} />
          </div>
          <div>
            <span>Award</span>
            <strong>The Duke of Edinburgh's International Award</strong>
            <p>Bronze Medalist, recognized through service, skill development, physical recreation, and adventurous journey work.</p>
          </div>
        </div>

        <div className="about-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <MapPin size={13} />
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="about-story">
        <p className="about-lead">
          I like building from the point where an idea is still messy. A music platform needs real playback state, a research project needs careful probing, a tracker needs reliable data flow, and a dashboard needs to make decisions easier.
        </p>
        <p>
          My work sits between full-stack engineering and AI research. I enjoy React frontends, Node/Express backends, MongoDB data models, desktop utilities, and Bangla NLP experiments with multilingual LLMs. The part that keeps me hooked is turning technical pieces into something coherent enough for people to actually use.
        </p>
        <p>
          I also enjoy team projects. I care about communication, shared ownership, and keeping momentum when features, bugs, and deadlines all arrive at once. Outside code, astronomy and space keep me curious about patterns, systems, and the long view.
        </p>

        <div className="about-focus-grid">
          {focusCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title}>
                <Icon size={20} />
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="numbered-heading">
        <span>02</span>
        <h2>The stack that starts every match</h2>
      </div>
      <div className="stack-list">
        {skills.map((group, index) => {
          const Icon = group.icon;
          return (
            <article className="stack-row" key={group.title}>
              <span className="stack-index">0{index + 1}</span>
              <div className="stack-title">
                <Icon size={18} />
                <strong>{group.title}</strong>
              </div>
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
    <section id="education" className="section season-section reveal">
      <div className="numbered-heading">
        <span>03 - Season Timeline</span>
        <h2>How the season's gone</h2>
      </div>
      <div className="season-timeline">
        <article>
          <span>Spring 2026</span>
          <h3>B.Sc. Thesis</h3>
          <p>Probing Cross-Lingual Lexical Representations in Multilingual LLMs for Bangla Dyslexia Screening.</p>
        </article>
        <article>
          <span>2026</span>
          <h3>Full-stack and research projects</h3>
          <p>Shipping APIs, dashboards, desktop tools, music platforms, and emergency response interfaces.</p>
        </article>
        <article>
          <span>2022 - 2026</span>
          <h3>BSc in Computer Science and Engineering</h3>
          <p>BRAC University, Dhaka. Coursework across NLP, databases, systems, software design, and web interfaces.</p>
        </article>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <TechFlowStrip />
      <div className="numbered-heading">
        <span>01</span>
        <h2>Contributions</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card lift-card" key={project.slug}>
            <div className="project-card-body">
              <p className="card-eyebrow">Fig. {index + 1} - {project.eyebrow}</p>
              <p className="project-status">{project.live ? "Shipped" : project.github ? "Documented" : "In progress"}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="mini-feature-row">
                {project.stack.slice(0, 3).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-card-actions">
                <a className="details-link" href={`/projects/${project.slug}`}>
                  More Details <ArrowRight size={17} />
                </a>
                {project.live && (
                  <a className="details-link live-link" href={project.live} target="_blank" rel="noreferrer">
                    Live <ExternalLink size={16} />
                  </a>
                )}
                {project.github && (
                  <a className="details-link github-link" href={project.github} target="_blank" rel="noreferrer">
                    GitHub <Github size={16} />
                  </a>
                )}
              </div>
            </div>
            <div className="project-visual-wrap">
              <ProjectVisual project={project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechFlowStrip() {
  const marqueeItems = [...buildTools, ...buildTools];

  return (
    <div className="tech-flow-strip" aria-label="What I build with">
      <div className="tech-flow-copy">
        <span>What I build with</span>
        <p>Full-stack, AI research, dashboards, APIs, and polished interfaces.</p>
      </div>
      <div className="tech-flow-window" aria-hidden="true">
        <div className="tech-flow-track">
          {marqueeItems.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <span className="tech-flow-pill" key={`${tool.name}-${index}`}>
                <Icon size={17} />
                {tool.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function NowBuilding() {
  const buildingItems = [
    {
      title: "Bangla SMS Smishing Detection",
      meta: "AI / Security",
      description:
        "Reuses my thesis' probing methodology - RSA, causal ablation, multi-model probing - for detecting smishing and spam patterns in Bangla SMS text, using BanglaBarta as the primary dataset.",
      progress: 60,
      note: "Dataset prep complete; probing pipeline next",
    },
    {
      title: "Football Live Match Tracker",
      meta: "PWA",
      description:
        "Real-time La Liga and Champions League score tracker built as a PWA, tuned to Bangladesh Standard Time, with backend caching to stay within free-tier sports API limits.",
      progress: 35,
      note: "Backend caching layer in progress",
    },
  ];

  return (
    <section id="now-building" className="section now-building-section reveal">
      <div className="build-panel">
        <div className="build-heading">
          <span>Current Work</span>
          <h2>Now Building</h2>
        </div>
        <div className="build-timeline">
          {buildingItems.map((item) => (
            <article className="build-card" key={item.title}>
              <div className="build-card-top">
                <span className="build-status">In Progress</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="build-progress" style={{ "--progress": `${item.progress}%` }} aria-label={`${item.title} progress ${item.progress}%`}>
                <span style={{ width: `${item.progress}%` }}></span>
              </div>
              <small>{item.note}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return <img className="project-image" src={project.image} alt={`${project.name} screenshot`} loading="lazy" decoding="async" />;
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
      {project.imageType === "api" && (
        <>
          <Target size={44} />
          <span>JWT issue tracker API</span>
          <strong>DevPulse Backend</strong>
        </>
      )}
      {project.imageType === "music" && (
        <>
          <BookOpen size={44} />
          <span>Full-stack streaming app</span>
          <strong>SoundSip</strong>
        </>
      )}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section reveal">
      <div className="appendix">
        <div className="numbered-heading">
          <span>04</span>
          <h2>Appendix</h2>
        </div>
        <p><sup>1</sup> Off the clock: football, travelling, and turning small ideas into useful software.</p>
        <p><sup>2</sup> Also builds desktop tools, dashboards, media players, overlays, and backend APIs.</p>
      </div>
      <div className="correspondence">
        <div>
          <h2>Correspondence</h2>
          <p>Open to research collaborations, internships, backend/API work, and interesting full-stack projects. The fastest way to reach me is email.</p>
        </div>
        <div className="contact-list">
          <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/SayemHasan74</strong></a>
          <a href={`tel:${profile.phone}`}><span>Phone</span><strong>{profile.phone}</strong></a>
          <a href="/Hasan-Mohammad-Sayem-Resume.pdf" download><span>Resume</span><strong>Download PDF</strong></a>
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
                <a className="primary-button live-link" href={project.live} target="_blank" rel="noreferrer">
                  Live Project <ExternalLink size={18} />
                </a>
              ) : (
                <span className="disabled-pill">Live link coming soon</span>
              )}
              {project.github ? (
                <a className="secondary-button github-link" href={project.github} target="_blank" rel="noreferrer">
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
