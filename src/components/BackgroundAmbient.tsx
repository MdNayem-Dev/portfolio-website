import React from 'react';

export const BackgroundAmbient: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="soft-orb w-[480px] h-[480px] bg-indigo-100/70 dark:bg-indigo-950/30 -top-24 -left-20" />
      <div className="soft-orb w-[420px] h-[420px] bg-purple-100/60 dark:bg-purple-950/25 -bottom-20 -right-20" />
      <div className="soft-orb w-[340px] h-[340px] bg-sky-100/60 dark:bg-sky-950/20 top-1/3 right-12" />
      {/* Light Mode Grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Dark Mode Grid */}
      <div
        className="absolute inset-0 opacity-[0.20] hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
