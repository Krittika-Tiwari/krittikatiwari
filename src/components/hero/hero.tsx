'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FloatingCube from './floating-shape';
import Navbar from './navbar';
import SocialSidebar from './social-sidebar';

export default function Hero() {
  return (
    <section
      className='min-h-screen flex items-center justify-center p-4 sm:p-4 relative'
      style={{
        background:
          'radial-gradient(ellipse at 60% 40%, var(--bg-subtle) 0%, var(--bg-main) 100%)',
      }}
    >

      <FloatingCube className='-top-4 right-12' size='lg' delay={0.2} />
      <FloatingCube className='bottom-4 left-8' size='md' delay={1} />
      <FloatingCube className='bottom-16 left-24 hidden sm:block' size='sm' delay={0.7} />


      <motion.div
        className='relative w-full max-w-6xl'
        style={{ minHeight: 'clamp(500px, 85vh, 680px)' }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className='relative w-full rounded-3xl sm:p-[5px] p-[3px] animated-border overflow-hidden' style={{ minHeight: 'clamp(680px, 90vh, 820px)', height: 'clamp(680px, 90vh, 820px)' }}>
          <div
            className='relative w-full h-full rounded-3xl overflow-hidden'
            style={{
              background: 'var(--bg-card)',
              boxShadow: '0 32px 80px var(--shadow-soft)',
            }}
          >
            <div
              className='absolute inset-0 pointer-events-none'
              style={{
                background:
                  'radial-gradient(ellipse 60% 70% at 75% 50%, var(--accent-soft) 0%, transparent 70%)',
              }}
            />

            {/* ── NAVBAR ── */}
            <div className='absolute top-6 left-8 right-8 z-20 hidden md:block'>
              <Navbar />
            </div>

            {/* ── SOCIAL SIDEBAR ── */}
            <div className='absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:block'>
              <SocialSidebar />
            </div>

            {/* ── SCROLL DOWN indicator ── */}
            <div className='absolute bottom-8 left-8 z-20 flex-col items-center gap-2 hidden md:flex'>
              <motion.div
                className='text-gray-600 text-[10px] tracking-[0.3em] uppercase'
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                scroll down
              </motion.div>
              <motion.div
                className='w-px h-8 bg-gradient-to-b from-[--accent]/60 to-transparent'
                animate={{ scaleY: [1, 0.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>

            {/* ── MAIN GRID ── */}
            <div className='flex flex-col-reverse md:grid md:grid-cols-2 h-full items-center pt-16 md:pt-0 pb-6 md:pb-0 -mt-8 md:mt-0'>
              {/* LEFT: text content */}
              <div className='pl-6 md:pl-40 pr-6 md:pr-8 space-y-5 z-10 text-center md:text-left'>
                <motion.p
                  className='flex items-center justify-center md:justify-start gap-3 text-sm'
                  style={{ color: 'var(--text-muted)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span
                    className='w-8 h-px inline-block'
                    style={{ background: 'var(--text-muted)' }}
                  />
                  Hello
                </motion.p>
                <motion.h1
                  className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight md:whitespace-nowrap'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <span style={{ color: 'var(--text-primary)' }}>{"I'm"} </span>
                  <span style={{ color: 'var(--text-primary)' }}>
                    Krittika{' '}
                    <span style={{ color: 'var(--accent)' }}>Tiwari</span>
                  </span>
                </motion.h1>

                {/* Code/dev icon row */}

                <motion.p
                  className='max-w-sm mx-auto md:mx-0 text-base leading-relaxed'
                  style={{ color: 'var(--text-secondary)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className='text-xl font-bold' style={{ color: 'var(--accent)' }}>Software Developer</span>{' '}skilled in React, Next.js &amp; Node.js —
                  building scalable apps, efficient APIs, and exploring AI/ML.
                </motion.p>



                <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
                  <motion.a
                    href='#projects'
                    className='text-white px-7 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200'
                    style={{
                      background: 'var(--accent)',
                      boxShadow: '0 4px 24px var(--accent-glow)',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 }}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: '0 6px 32px var(--accent-glow)',
                      background: 'var(--accent-hover)',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Work
                  </motion.a>
                  <motion.a
                    href='/Krittika_Tiwari.pdf'
                    download
                    className='px-7 py-3 rounded-xl text-sm font-semibold tracking-wide border transition-all duration-200'
                    style={{
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border-brand)',
                      background: 'transparent',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 }}
                    whileHover={{
                      scale: 1.04,
                      borderColor: 'var(--accent-brand)',
                      color: 'var(--accent-brand)',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Resume ↓
                  </motion.a>
                </div>
              </div>

              <div className='flex justify-center items-center relative h-full'>
                {/* Floating 3D cubes around character */}
                <motion.div
                  className='absolute top-16 right-16 w-10 h-10 hidden md:block'
                  animate={{ y: [0, -14, 0], rotate: [0, 20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                >
                  <div
                    className='w-full h-full rounded-md opacity-90'
                    style={{
                      background: 'var(--accent)',
                      transform: 'rotate(-8deg) skewX(-8deg)',
                    }}
                  />
                </motion.div>

                <motion.div
                  className='absolute top-32 right-8 w-7 h-7 hidden md:block'
                  animate={{ y: [0, -10, 0], rotate: [0, -15, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <div
                    className='w-full h-full rounded-md opacity-80'
                    style={{
                      background: 'var(--accent)',
                      transform: 'rotate(12deg) skewX(5deg)',
                    }}
                  />
                </motion.div>

                <motion.div
                  className='absolute bottom-24 right-24 w-9 h-9 hidden md:block'
                  animate={{ y: [0, -12, 0], rotate: [0, 10, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.6,
                  }}
                >
                  <div
                    className='w-full h-full rounded-md opacity-75'
                    style={{
                      background: 'var(--accent-hover)',
                      transform: 'rotate(-15deg) skewX(-6deg)',
                    }}
                  />
                </motion.div>

                {/* Character — vertically centered, large */}
                <motion.div

                  className='relative z-10 !w-[340px] !h-[340px] sm:!w-[420px] sm:!h-[420px] md:!w-[580px] md:!h-[580px]'
                  style={{  }}
                  animate={{ y: [0, -16, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src='/character.png'
                    alt='Developer character'
                    fill
                    sizes='(max-width: 640px) 340px, (max-width: 768px) 420px, 580px'
                    className='object-cover'
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* ── Inside card floating cubes (top-right & bottom-left) ── */}
            <FloatingCube className='top-4 right-6' size='md' delay={0.4} />
            <FloatingCube className='bottom-6 left-40 hidden sm:block' size='sm' delay={1.2} />
          </div>
        </div>

        {/* Right arrow nav button (outside card, like reference) */}
       
      </motion.div>
    </section>
  );
}
