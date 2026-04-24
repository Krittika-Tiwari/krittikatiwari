'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import FloatingCube from '@/components/hero/floating-shape';
import { RandomFloatingCubes } from '@/components/hero/floating-shape';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-60px', '60px']);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      ref={ref}
      className='relative min-h-screen flex flex-col overflow-hidden py-24 px-6'
      style={{ background: 'var(--bg-main)' }}
    >
      {/* bg glow bottom-center */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{
          y: bgY,
          background:
            'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(201,106,58,0.10) 0%, transparent 65%)',
        }}
      />
      <RandomFloatingCubes count={3} seed={4} />

      <div className='relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start'>
        {/* ── LEFT COLUMN ── */}
        <motion.div
          className='flex flex-col gap-8 md:w-[42%] flex-shrink-0'
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Heading */}
          <div>
            <h2
              className='text-4xl md:text-5xl font-black leading-none mb-1'
              style={{ color: 'var(--text-primary)' }}
            >
              {"Let's"}
            </h2>
            <h2
              className='text-4xl md:text-5xl font-black leading-none'
              style={{ color: 'var(--accent)' }}
            >
              Connect.
            </h2>
            <p
              className='mt-5 text-sm leading-relaxed max-w-xs'
              style={{ color: 'var(--text-muted)' }}
            >
              Currently focused on strengthening DSA and exploring AI/ML
              to build intelligent, future-ready solutions. Let&apos;s connect
              and build something impactful.
            </p>
          </div>

          {/* Contact info cards */}
          <div className='flex flex-col gap-3'>
            <ContactCard
              icon='✉'
              label='EMAIL ME'
              value='krittikatiwari122004@gmail.com'
            />
            <ContactCard
              icon='📍'
              label='CURRENT BASE'
              value='Delhi, India'
            />
          </div>

          {/* Social Command Center */}
          <div>
            <p
              className='text-[10px] font-semibold tracking-[0.3em] uppercase mb-4'
              style={{ color: 'var(--text-muted)' }}
            >
              Social Command Center
            </p>
            <div className='flex gap-3'>
              {[
                {
                  label: 'in',
                  href: 'https://www.linkedin.com/in/krittikatiwari/',
                  title: 'LinkedIn',
                },
                {
                  label: (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z' />
                    </svg>
                  ),
                  href: 'https://github.com/Krittika-Tiwari',
                  title: 'GitHub',
                },
              ].map((s) => (
                <motion.a
                  key={s.title}
                  href={s.href}
                  target='_blank'
                  title={s.title}
                  className='w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold'
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                  whileHover={{
                    borderColor: 'var(--accent)',
                    color: 'var(--accent)',
                    scale: 1.08,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          className='flex flex-col gap-4 flex-1'
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {/* Form card */}
          <div
            className='rounded-3xl p-6 md:p-8 flex flex-col gap-6'
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6'
            >
              {/* Row 1: Name + Email */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <UnderlineField
                  id='name'
                  label='FULL IDENTITY'
                  type='text'
                  placeholder='John Doe'
                />
                <UnderlineField
                  id='email'
                  label='DIGITAL ADDRESS'
                  type='email'
                  placeholder='john@company.com'
                />
              </div>

              {/* Row 2: Mission dropdown */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='mission'
                  className='text-[10px] font-semibold tracking-[0.25em] uppercase'
                  style={{ color: 'var(--text-muted)' }}
                >
                  Mission Parameter
                </label>
                <div className='relative'>
                  <select
                    id='mission'
                    required
                    className='w-full px-0 py-3 text-sm appearance-none outline-none bg-transparent cursor-pointer'
                    style={{
                      color: 'var(--text-primary)',
                      borderBottom: '1px solid var(--border)',
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = 'var(--accent)')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = 'var(--border)')
                    }
                  >
                    <option value=''>Frontend Engineering</option>
                    <option value='backend'>Backend Engineering</option>
                    <option value='fullstack'>Full Stack Development</option>
                    <option value='consulting'>Technical Consulting</option>
                    <option value='other'>Other</option>
                  </select>
                  <span
                    className='absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    ∨
                  </span>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='message'
                  className='text-[10px] font-semibold tracking-[0.25em] uppercase'
                  style={{ color: 'var(--text-muted)' }}
                >
                  Detailed Brief
                </label>
                <textarea
                  id='message'
                  rows={5}
                  placeholder='Describe the future we are building...'
                  required
                  className='w-full px-0 py-3 text-sm outline-none resize-none bg-transparent'
                  style={{
                    color: 'var(--text-primary)',
                    borderBottom: '1px solid var(--border)',
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = 'var(--accent)')
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = 'var(--border)')
                  }
                />
              </div>

              {/* Submit */}
              <motion.button
                type='submit'
                className='w-full py-4 rounded-2xl text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2'
                style={{
                  background: sent ? 'rgba(201,106,58,0.3)' : 'var(--accent)',
                  color: 'white',
                  boxShadow: sent ? 'none' : '0 4px 24px rgba(201,106,58,0.3)',
                }}
                whileHover={
                  !sent
                    ? {
                        scale: 1.02,
                        boxShadow: '0 8px 32px rgba(201,106,58,0.45)',
                      }
                    : {}
                }
                whileTap={!sent ? { scale: 0.98 } : {}}
              >
                {sent ? (
                  '✓ Connection Engaged!'
                ) : (
                  <>
                    Engage Connection
                    <span className='text-base'>→</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Status card */}
          <motion.div
            className='rounded-3xl px-6 py-4 flex items-center justify-between gap-4'
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className='flex items-center gap-4'>
              {/* Avatar */}
              <div
                className='w-12 h-12 rounded-full overflow-hidden flex-shrink-0'
                style={{ border: '2px solid rgba(201,106,58,0.4)' }}
              >
                <Image
                  src='/avatar.png'
                  alt='Krittika'
                  width={48}
                  height={48}
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <p
                  className='text-sm font-bold'
                  style={{ color: 'var(--text-primary)' }}
                >
                  Status: Available
                </p>
                <p
                  className='text-xs'
                  style={{ color: 'var(--text-muted)' }}
                >
                  Response time: &lt; 24 hours
                </p>
              </div>
            </div>

            {/* Live indicator */}
            <div className='flex items-center gap-2 flex-shrink-0'>
              <motion.span
                className='w-2 h-2 rounded-full'
                style={{ background: 'var(--accent)' }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span
                className='text-[10px] font-semibold tracking-widest uppercase'
                style={{ color: 'var(--accent)' }}
              >
                Live Connection
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── FOOTER ── */}
      <motion.div
        className='relative z-10 w-full max-w-5xl mx-auto mt-20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4'
        style={{ borderTop: '1px solid var(--border)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p
          className='text-sm font-black tracking-tight'
          style={{ color: 'var(--text-primary)' }}
        >
          KRITTIKA
        </p>
        <p
          className='text-xs'
          style={{ color: 'var(--text-muted)' }}
        >
          © {new Date().getFullYear()} Krittika Tiwari. Engineered for the
          future.
        </p>
        <div className='flex gap-6'>
          {[{ l: 'LinkedIn', href: 'https://www.linkedin.com/in/krittikatiwari/' }, { l: 'GitHub', href: 'https://github.com/Krittika-Tiwari' }, { l: 'Email', href: 'mailto:krittikatiwari122004@gmail.com' }].map(({ l, href }) => (
            <a
              key={l}
              href={href}
              target='_blank'
              className='text-[10px] font-semibold tracking-widest uppercase transition-colors'
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--accent)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              {l}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ── Sub-components ── */

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      className='flex items-center gap-4 px-5 py-4 rounded-2xl'
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      whileHover={{ borderColor: 'var(--accent)', x: 4 }}
    >
      <span
        className='w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0'
        style={{ background: 'rgba(201,106,58,0.15)', color: 'var(--accent)' }}
      >
        {icon}
      </span>
      <div>
        <p
          className='text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5'
          style={{ color: 'var(--text-muted)' }}
        >
          {label}
        </p>
        <p
          className='text-sm font-semibold'
          style={{ color: 'var(--text-primary)' }}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function UnderlineField({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='text-[10px] font-semibold tracking-[0.25em] uppercase'
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required
        className='w-full px-0 py-3 text-sm outline-none bg-transparent placeholder:opacity-30'
        style={{
          color: 'var(--text-primary)',
          borderBottom: '1px solid var(--border)',
        }}
        onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
        onBlur={(e) => (e.target.style.borderBottomColor = 'var(--border)')}
      />
    </div>
  );
}
