
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Youtube, Instagram, Award, Users } from 'lucide-react';
import { STAGGER_CONTAINER, FADE_UP, HOVER_LIFT } from '../animations/variants';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  targetNumber: number;
  suffix?: string;
}

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    stiffness: 45,
    damping: 18,
  });
  
  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <span ref={ref} className="font-heading font-bold text-3xl md:text-4xl text-dental-dark">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const StatCard: React.FC<StatItemProps> = ({ icon, label, targetNumber, suffix }) => {
  return (
    <motion.div
      variants={FADE_UP}
      whileHover={HOVER_LIFT}
      className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-50 shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-dental-blue mb-6">
        {icon}
      </div>
      <Counter value={targetNumber} suffix={suffix} />
      <p className="mt-2 text-gray-500 font-medium tracking-tight uppercase text-xs md:text-sm">
        {label}
      </p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Youtube size={28} />,
      targetNumber: 1.41,
      suffix: "L+",
      label: "YouTube Subscribers",
    },
    {
      icon: <Instagram size={28} />,
      targetNumber: 15,
      suffix: "K+",
      label: "Instagram Community",
    },
    {
      icon: <Award size={28} />,
      targetNumber: 10,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      icon: <Users size={28} />,
      targetNumber: 1000,
      suffix: "+",
      label: "Happy Patients",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 pb-20 px-6">
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              targetNumber={stat.targetNumber}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
