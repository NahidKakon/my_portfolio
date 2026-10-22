'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const wordsArray = words ? words.trim().split(/\s+/) : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      filter: filter ? 'blur(10px)' : 'none',
    },
    visible: {
      opacity: 1,
      filter: filter ? 'blur(0px)' : 'none',
      transition: { duration: duration || 0.5 },
    },
  };

  return (
    <div className={cn('text-left leading-snug tracking-wide', className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            variants={wordVariants}
            className="inline-block mr-1.5"
            // FORCE inline black color (bypasses global CSS & Tailwind dark mode conflicts)
            style={{ color: '#111827' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

// 'use client';
// import { motion } from 'framer-motion';
// import { cn } from '@/lib/utils';

// export const TextGenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5,
// }) => {
//   // Safely handle empty strings or spaces
//   const wordsArray = words ? words.trim().split(/\s+/) : [];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05,
//       },
//     },
//   };

//   const wordVariants = {
//     hidden: {
//       opacity: 0,
//       filter: filter ? 'blur(10px)' : 'none',
//     },
//     visible: {
//       opacity: 1,
//       filter: filter ? 'blur(0px)' : 'none',
//       transition: {
//         duration: duration || 0.5,
//       },
//     },
//   };

//   return (
//     <div className={cn('text-left leading-snug tracking-wide', className)}>
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {wordsArray.map((word, idx) => (
//           <motion.span
//             key={word + idx}
//             variants={wordVariants}
//             className="text-black dark:text-white inline-block mr-1.5"
//           >
//             {word}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };