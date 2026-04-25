'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between w-full'>
        {/* Hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className='flex flex-col gap-[5px] group z-30'
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className='w-6 h-[2px] transition-all duration-300'
            style={{
              background: 'var(--text-muted)',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className='w-4 h-[2px] transition-all duration-300'
            style={{
              background: 'var(--text-muted)',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className='w-6 h-[2px] transition-all duration-300'
            style={{
              background: 'var(--text-muted)',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>

        {/* Desktop nav links */}
        <nav className='hidden md:flex items-center gap-8'>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className='text-sm font-medium transition-colors duration-200'
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-brand)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Resume button */}
        <a
          href='/resume.pdf'
          download
          className='hidden md:block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg border transition-colors duration-200'
          style={{
            color: 'var(--accent-brand)',
            borderColor: 'var(--accent-brand)',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--accent-brand)';
            (e.currentTarget as HTMLElement).style.color = 'white';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = 'var(--accent-brand)';
          }}
        >
          Resume
        </a>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className='absolute inset-0 z-20 flex flex-col items-center justify-center gap-8 rounded-3xl md:hidden'
            style={{ background: 'var(--bg-card)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className='text-2xl font-bold tracking-tight'
                style={{ color: 'var(--text-primary)' }}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href='/resume.pdf'
              download
              className='text-sm font-semibold tracking-widest uppercase px-6 py-3 rounded-xl border'
              style={{ color: 'var(--accent-brand)', borderColor: 'var(--accent-brand)' }}
              onClick={() => setOpen(false)}
            >
              Resume ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
