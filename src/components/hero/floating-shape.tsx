'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function FloatingCube({
  className,
  delay = 0,
  size = 'md',
}: {
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeMap = { sm: 'w-8 h-8', md: 'w-14 h-14', lg: 'w-20 h-20' };
  return (
    <motion.div
      className={`absolute ${sizeMap[size]} ${className ?? ''}`}
      animate={{ y: [0, -18, 0], rotate: [0, 15, -10, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <div className='relative w-full h-full'>
        <div
          className='absolute inset-0 rounded-md'
          style={{ background: 'var(--accent)', transform: 'rotate(-10deg) skewX(-10deg) skewY(5deg)', opacity: 0.85 }}
        />
        <div
          className='absolute inset-0 rounded-md'
          style={{ background: 'var(--accent-hover)', transform: 'rotate(-10deg) skewX(-10deg) skewY(5deg) translateX(6px) translateY(6px)', opacity: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

// Deterministic "random" positions based on index — no hydration mismatch
const POSITIONS = [
  { top: '12%',  left: '8%'  },
  { top: '18%',  left: '82%' },
  { top: '55%',  left: '5%'  },
  { top: '48%',  left: '90%' },
  { top: '78%',  left: '15%' },
  { top: '72%',  left: '78%' },
  { top: '30%',  left: '50%' },
  { top: '88%',  left: '55%' },
];

export function RandomFloatingCubes({ count = 2, seed = 0 }: { count?: number; seed?: number }) {
  const cubes = POSITIONS.slice(seed % POSITIONS.length)
    .concat(POSITIONS.slice(0, seed % POSITIONS.length))
    .slice(0, count);

  return (
    <>
      {cubes.map((pos, i) => (
        <motion.div
          key={i}
          className='absolute w-8 h-8 hidden md:block'
          style={{ top: pos.top, left: pos.left }}
          animate={{ y: [0, -14, 0], rotate: [0, 12, -8, 0] }}
          transition={{ duration: 5 + i * 1.3, repeat: Infinity, ease: 'easeInOut', delay: i * 1.1 }}
        >
          <div className='relative w-full h-full'>
            <div
              className='absolute inset-0 rounded-md'
              style={{ background: 'var(--accent)', transform: 'rotate(-10deg) skewX(-10deg) skewY(5deg)', opacity: 0.5 }}
            />
            <div
              className='absolute inset-0 rounded-md'
              style={{ background: 'var(--accent-hover)', transform: 'rotate(-10deg) skewX(-10deg) skewY(5deg) translateX(5px) translateY(5px)', opacity: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}
