import './styles/index.css';
import './styles/editorial.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { ExperienceEducationSkills } from './components/ExperienceEducationSkills';
import { Insights } from './components/Insights';
import { VisualStatement } from './components/VisualStatement';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <ExperienceEducationSkills />
        <Insights />
        <VisualStatement />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
