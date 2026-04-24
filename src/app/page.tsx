import Hero from '@/components/hero/hero';
import TechStack from '@/components/techstack/tech-stack';
import Projects from '@/components/projects/projects';
import Contact from '@/components/contact/contact';

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-main)', color: 'var(--text-primary)' }}>
      <section id='home'><Hero /></section>
      <section id='tech'><TechStack /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /></section>
    </main>
  );
}
