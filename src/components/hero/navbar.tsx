import { motion } from 'framer-motion';
export default function Navbar() {
  return (
    <div className='flex items-center justify-between w-full'>
      {/* Hamburger */}
      <button className='flex flex-col gap-[5px] group'>
        <span className='w-6 h-[2px] transition-colors' style={{ background: 'var(--text-muted)' }} />
        <span className='w-4 h-[2px] transition-colors' style={{ background: 'var(--text-muted)' }} />
        <span className='w-6 h-[2px] transition-colors' style={{ background: 'var(--text-muted)' }} />
      </button>

      {/* Logo */}
      <motion.div
        className='absolute left-1/2 -translate-x-1/2 font-bold text-lg tracking-tight'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      
      </motion.div>
    </div>
  );
}