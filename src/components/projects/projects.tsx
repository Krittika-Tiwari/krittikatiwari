'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import FloatingCube from '@/components/hero/floating-shape';
import { RandomFloatingCubes } from '@/components/hero/floating-shape';

/* ── DATA ── */
const featured = {
  title: 'SmartCV',
  category: 'AI & ML · Full Stack',
  desc: 'AI-powered resume builder used by 10+ users. Features a dynamic editor with real-time validation, live preview, Gemini API for AI content generation, Clerk auth, and secure PDF export.',
  tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'Clerk'],
  github: 'https://github.com/Krittika-Tiwari/smartcv',
  live: 'https://smartcv-eight.vercel.app/',
  image: '/projects/smartcv.png',
};

const smallProjects = [
  {
    title: 'Blink',
    desc: 'Real-time collaborative whiteboard supporting multiple concurrent users. Features cursor tracking, collaborative drawing tools, and synchronized UI state.',
    tags: ['Next.js', 'Liveblocks', 'Convex'],
    live: 'https://blink-lovat.vercel.app/',
    image: '/projects/blink.png',
  },
 
];

const insights = [
  {
    date: 'March 3, 2026',
    title: 'Optimizing Performance in Next.js Apps',
    desc: 'Deep dive into code splitting, lazy loading, and caching strategies for production-grade apps...',
  },
 
];

/* ── PROJECT IMAGE PLACEHOLDER (when no real image) ── */
function ProjectImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#1a1208] ${className}`}>
      {/* Gradient overlay always shown */}
      <div
        className='absolute inset-0 z-10'
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,106,58,0.25) 0%, rgba(10,8,4,0.6) 70%)',
        }}
      />
      {/* Decorative grid */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,rgba(201,106,58,0.5) 0,rgba(201,106,58,0.5) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(201,106,58,0.5) 0,rgba(201,106,58,0.5) 1px,transparent 1px,transparent 40px)',
        }}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 100vw, 50vw'
        className='object-cover mix-blend-luminosity opacity-60'
        onError={() => {}}
      />
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-60px', '60px']);

  return (
    <section
      ref={ref}
      className='relative flex flex-col overflow-hidden py-20 px-6'
      style={{ background: 'var(--bg-main)' }}
    >
      {/* bg glow */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{
          y: bgY,
          background:
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,106,58,0.07) 0%, transparent 70%)',
        }}
      />
      <RandomFloatingCubes count={3} seed={2} />

      <div className='relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16'>
        {/* ── EDITORIAL HEADER ── */}
        <motion.div
          className='flex items-start justify-between gap-6'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex-1'>
            <span
              className='inline-block text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-5'
              style={{
                border: '1px solid rgba(201,106,58,0.4)',
                color: 'var(--accent)',
                background: 'rgba(201,106,58,0.08)',
              }}
            >
              Portfolio Reel
            </span>
            <h2
              className='text-3xl md:text-4xl font-black leading-none tracking-tight mb-4'
              style={{ color: 'var(--text-primary)' }}
            >
              ENGINEERED
              <br />
              <span style={{ color: 'var(--accent)' }}>FOR IMPACT.</span>
            </h2>
            <p
              className='text-sm leading-relaxed max-w-xs'
              style={{ color: 'var(--text-muted)' }}
            >
              Built impactful projects including an AI-powered resume builder
              and a collaborative whiteboard, with a focus on real-world impact.
            </p>
          </div>

          {/* Avatar */}
        
        </motion.div>

        <motion.div
          className='rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[380px]'
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          whileHover={{
            borderColor: 'var(--accent)',
            boxShadow: '0 16px 48px rgba(201,106,58,0.12)',
          }}
        >
          {/* Left: image */}
          <ProjectImage
            src={featured.image}
            alt={featured.title}
            className='min-h-[280px] md:min-h-full'
          />

          {/* Right: content */}
          <div className='flex flex-col justify-center p-8 gap-4'>
            <p
              className='text-[10px] font-semibold tracking-[0.25em] uppercase'
              style={{ color: 'var(--text-muted)' }}
            >
              {featured.category}
            </p>
            <h3
              className='text-2xl md:text-3xl font-black leading-tight'
              style={{ color: 'var(--text-primary)' }}
            >
              {featured.title}
            </h3>
            <p
              className='text-sm leading-relaxed'
              style={{ color: 'var(--text-muted)' }}
            >
              {featured.desc}
            </p>
            <div className='flex flex-wrap gap-2'>
              {featured.tags.map((t) => (
                <span
                  key={t}
                  className='text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md'
                  style={{
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className='flex gap-3 mt-2'>
              <motion.a
                href={featured.live}
                target='_blank'
                className='px-5 py-2.5 rounded-xl text-sm font-semibold text-white'
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 4px 16px rgba(201,106,58,0.3)',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Live ↗
              </motion.a>
              <motion.a
                href={featured.github}
                target='_blank'
                className='px-5 py-2.5 rounded-xl text-sm font-semibold'
                style={{
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                  background: 'transparent',
                }}
                whileHover={{ borderColor: 'var(--accent)', scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Case Study
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* ── SMALL PROJECT CARDS (2 col) ── */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {smallProjects.map((p, i) => (
            <motion.div
              key={p.title}
              className='rounded-2xl overflow-hidden flex flex-col'
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{
                borderColor: 'var(--accent)',
                boxShadow: '0 12px 36px rgba(201,106,58,0.1)',
                y: -4,
              }}
            >
              {/* Image */}
              <ProjectImage
                src={p.image}
                alt={p.title}
                className='h-48'
              />

              {/* Content */}
              <div className='p-5 flex flex-col gap-3'>
                <h3
                  className='text-base font-bold'
                  style={{ color: 'var(--text-primary)' }}
                >
                  {p.title}
                </h3>
                <p
                  className='text-sm leading-relaxed'
                  style={{ color: 'var(--text-muted)' }}
                >
                  {p.desc}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className='text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md'
                      style={{
                        color: 'var(--text-muted)',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={p.live}
                  target='_blank'
                  className='text-sm font-semibold flex items-center gap-1 mt-1'
                  style={{ color: 'var(--accent)' }}
                  whileHover={{ x: 4 }}
                >
                  View Live →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── LATEST INSIGHTS ── */}
        <div>
          <motion.div
            className='flex items-end justify-between mb-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2
                className='text-2xl md:text-3xl font-black tracking-tight'
                style={{ color: 'var(--text-primary)' }}
              >
                LATEST INSIGHTS
              </h2>
              <p
                className='text-sm mt-1'
                style={{ color: 'var(--text-muted)' }}
              >
                Documenting the process of engineering the future.
              </p>
            </div>
            <motion.a
              href='#'
              className='text-sm font-semibold flex items-center gap-1 flex-shrink-0'
              style={{ color: 'var(--text-muted)' }}
              whileHover={{ color: 'var(--accent)' }}
            >
              View Archive ↗
            </motion.a>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {insights.map((post, i) => (
              <motion.div
                key={i}
                className='rounded-2xl p-5 flex flex-col gap-3 cursor-pointer'
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{
                  borderColor: 'var(--accent)',
                  boxShadow: '0 8px 24px rgba(201,106,58,0.08)',
                  y: -3,
                }}
              >
                <p
                  className='text-[10px] font-semibold tracking-[0.2em]'
                  style={{ color: 'var(--text-muted)' }}
                >
                  {post.date}
                </p>
                <h4
                  className='text-sm font-bold leading-snug'
                  style={{ color: 'var(--text-primary)' }}
                >
                  {post.title}
                </h4>
                <p
                  className='text-xs leading-relaxed flex-1'
                  style={{ color: 'var(--text-muted)' }}
                >
                  {post.desc}
                </p>
                {/* Author row */}
                <div
                  className='flex items-center gap-2 mt-1 pt-3'
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <div
                    className='w-6 h-6 rounded-full flex-shrink-0 overflow-hidden'
                    style={{ background: 'rgba(201,106,58,0.2)' }}
                  >
                    <Image
                      src='/avatar.png'
                      alt='Author'
                      width={24}
                      height={24}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <span
                    className='text-[10px] font-semibold tracking-widest uppercase'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    By Krittika
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
