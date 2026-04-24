'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import FloatingCube from '@/components/hero/floating-shape';
import { RandomFloatingCubes } from '@/components/hero/floating-shape';

const experiences = [
  {
    role: 'Software Development Engineer Intern',
    company: 'MachanX',
    type: 'Full-time',
    period: 'Dec 2025 — Present',
    desc: 'Designed scalable backend services with Java Spring Boot. Engineered an automated lead-to-seller assignment system using category and city-based logic. Integrated WhatsApp messaging APIs and built a dynamic templating system for configurable messages.',
    tags: ['Spring Boot', 'PostgreSQL', 'WhatsApp API'],
  },
  {
    role: 'Software Developer',
    company: 'Zentience',
    type: 'Contract',
    period: 'Jul 2023 — Jan 2025',
    desc: 'Developed and maintained full-stack features using React (Next.js) and Nest.js in production. Integrated RESTful APIs ensuring consistent data flow. Improved UI responsiveness and load time by 25%.',
    tags: ['React', 'Nest.js', 'Testing'],
  },
];

/* ── helpers ── */
function Tag({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className='text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md'
      style={
        accent
          ? {
              color: 'var(--accent)',
              background: 'rgba(201,106,58,0.12)',
              border: '1px solid rgba(201,106,58,0.3)',
            }
          : {
              color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
            }
      }
    >
      {label}
    </span>
  );
}

function BentoCard({
  children,
  icon,
  title,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`rounded-2xl p-5 flex flex-col gap-4 ${className}`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        borderColor: 'var(--accent)',
        boxShadow: '0 8px 32px rgba(201,106,58,0.1)',
      }}
    >
      <div className='flex items-center gap-3'>
        <span
          className='w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0'
          style={{
            background: 'rgba(201,106,58,0.15)',
            color: 'var(--accent)',
          }}
        >
          {icon}
        </span>
        <h3
          className='font-bold text-base'
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>
      </div>
      {children}
    </motion.div>
  );
}

export default function SkillsExperience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-50px', '50px']);
  const lineHeight = useTransform(scrollYProgress, [0.45, 0.9], ['0%', '100%']);

  return (
    <section
      ref={ref}
      className='relative flex flex-col items-center overflow-hidden py-20 px-6'
      style={{ background: 'var(--bg-main)' }}
    >
      {/* bg glow */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{
          y: bgY,
          background:
            'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(201,106,58,0.07) 0%, transparent 70%)',
        }}
      />
      <RandomFloatingCubes count={3} seed={0} />

      {/* ── SECTION HEADER ── */}
      <motion.div
        className='w-full max-w-5xl z-10 mb-12 flex items-start justify-between gap-6'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='flex-1'>
          <p
            className='text-xs font-semibold tracking-[0.3em] uppercase mb-3'
            style={{ color: 'var(--accent)' }}
          >
            Technical Arsenal
          </p>
          <h2
            className='text-3xl md:text-4xl font-black leading-none mb-5'
            style={{ color: 'var(--text-primary)' }}
          >
            Skills &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>Experience</span>
          </h2>
          <p
            className='text-sm leading-relaxed max-w-xs'
            style={{ color: 'var(--text-muted)' }}
          >
            Skilled in React, Next.js, Node.js, and modern databases.
            Experienced in designing efficient APIs, optimizing performance,
            and building real-time systems.
          </p>
        </div>

        {/* Avatar image top-right */}
       
      </motion.div>

      {/* ── BENTO GRID ── */}
      <div className='w-full max-w-5xl z-10 mb-20'>
        {/* Row 1: Frontend Core (wider) + Immersive Tech */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <BentoCard
            delay={0}
            icon='▦'
            title='Frontend Core'
            className='min-h-[160px]'
          >
            <div className='flex flex-wrap gap-2'>
              {[
                'React.js',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'HTML5',
                'CSS3/SCSS',
              ].map((t) => (
                <Tag
                  key={t}
                  label={t}
                />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            delay={0.08}
            icon='◈'
            title='Immersive Tech'
            className='min-h-[160px]'
          >
            <div className='flex flex-wrap gap-2'>
              {['Three.js', 'WebGL', 'Blender', 'Framer Motion', 'GSAP'].map(
                (t) => (
                  <Tag
                    key={t}
                    label={t}
                  />
                ),
              )}
            </div>
          </BentoCard>
        </div>

        {/* Row 2: Backend (small) + Workflow (small) + UI Architecture (wide) */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <BentoCard
            delay={0.14}
            icon='⬡'
            title='Backend'
            className='min-h-[180px]'
          >
            <ul className='flex flex-col gap-2'>
              {['Node.js', 'GraphQL', 'PostgreSQL', 'Prisma'].map((t) => (
                <li
                  key={t}
                  className='text-sm'
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard
            delay={0.2}
            icon='⚒'
            title='Workflow'
            className='min-h-[180px]'
          >
            <ul className='flex flex-col gap-2'>
              {['Git / GitHub', 'Docker', 'AWS / Vercel', 'CI/CD'].map((t) => (
                <li
                  key={t}
                  className='text-sm'
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* UI Architecture — no icon, special layout */}
          <motion.div
            className='rounded-2xl p-5 flex flex-col justify-between min-h-[180px] relative overflow-hidden'
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26, duration: 0.5 }}
            whileHover={{
              borderColor: 'var(--accent)',
              boxShadow: '0 8px 32px rgba(201,106,58,0.1)',
            }}
          >
            {/* decorative grid texture bottom-right */}
            <div
              className='absolute bottom-0 right-0 w-28 h-28 opacity-[0.08]'
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg,var(--accent) 0,var(--accent) 1px,transparent 1px,transparent 18px),repeating-linear-gradient(90deg,var(--accent) 0,var(--accent) 1px,transparent 1px,transparent 18px)',
              }}
            />
            <div>
              <h3
                className='font-bold text-base mb-2'
                style={{ color: 'var(--text-primary)' }}
              >
                UI Architecture
              </h3>
              <p
                className='text-sm leading-relaxed'
                style={{ color: 'var(--text-muted)' }}
              >
                Designing high-fidelity systems in Figma with engineering
                precision.
              </p>
            </div>
            <div className='flex gap-2 flex-wrap'>
              <Tag
                label='✦ Figma'
                accent
              />
              <Tag
                label='✦ Adobe CC'
                accent
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── TIMELINE HEADING ── */}
      <motion.div
        className='w-full max-w-5xl z-10 mb-10'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className='text-2xl md:text-3xl font-black'
          style={{ color: 'var(--text-primary)' }}
        >
          Professional <span style={{ color: 'var(--accent)' }}>Timeline</span>
        </h2>
      </motion.div>

      {/* ── TIMELINE (left-aligned, dot on left) ── */}
      <div className='relative w-full max-w-5xl z-10 mb-20'>
        {/* vertical line */}
        <div
          className='absolute left-[7px] top-2 bottom-2 w-px'
          style={{ background: 'var(--border)' }}
        >
          <motion.div
            className='w-full origin-top'
            style={{
              height: lineHeight,
              background: 'var(--accent)',
              opacity: 0.6,
            }}
          />
        </div>

        <div className='flex flex-col gap-6 pl-10'>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className='relative'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              {/* dot */}
              <motion.div
                className='absolute -left-[2.45rem] top-6 w-3.5 h-3.5 rounded-full z-10'
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 12px rgba(201,106,58,0.5)',
                }}
                whileInView={{ scale: [0, 1.5, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              />

              <motion.div
                className='rounded-2xl p-6'
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                whileHover={{
                  borderColor: 'var(--accent)',
                  boxShadow: '0 8px 32px rgba(201,106,58,0.1)',
                }}
              >
                {/* top row */}
                <div className='flex items-start justify-between gap-4 mb-3'>
                  <div>
                    <h3
                      className='text-base font-semibold'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.role}
                    </h3>
                    <p className='text-sm mt-0.5'>
                      <span style={{ color: 'var(--accent)' }}>
                        {exp.company}
                      </span>
                      <span style={{ color: 'var(--text-muted)' }}>
                        {' '}
                        · {exp.type}
                      </span>
                    </p>
                  </div>
                  <span
                    className='text-xs whitespace-nowrap mt-0.5 flex-shrink-0'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p
                  className='text-sm leading-relaxed mb-4'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {exp.desc}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {exp.tags.map((tag) => (
                    <Tag
                      key={tag}
                      label={tag}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA CARD ── */}
      <motion.div
        className='w-full max-w-5xl z-10 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden'
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* subtle glow */}
        <div
          className='absolute inset-0 pointer-events-none rounded-3xl'
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(201,106,58,0.07) 0%, transparent 70%)',
          }}
        />
        <div className='z-10'>
          <h3
            className='text-2xl md:text-3xl font-black mb-2'
            style={{ color: 'var(--text-primary)' }}
          >
            Ready for the next{' '}
            <span style={{ color: 'var(--accent)' }}>Innovation?</span>
          </h3>
          <p
            className='text-sm'
            style={{ color: 'var(--text-muted)' }}
          >
            Currently available for high-impact technical roles and creative
            collaborations.
          </p>
        </div>
        <div className='flex gap-3 z-10 flex-shrink-0'>
          <motion.button
            className='px-6 py-3 rounded-xl font-semibold text-sm text-white'
            style={{
              background: 'var(--accent)',
              boxShadow: '0 4px 20px rgba(201,106,58,0.3)',
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 6px 28px rgba(201,106,58,0.45)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.button>
          <motion.button
            className='px-6 py-3 rounded-xl font-semibold text-sm'
            style={{
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              background: 'transparent',
            }}
            whileHover={{ borderColor: 'var(--accent)', scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
