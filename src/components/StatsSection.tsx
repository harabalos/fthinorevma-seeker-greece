import { useEffect, useState, useRef } from 'react';
import { Building2, FileText, Phone, Star } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  number: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, number, suffix = '', label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 50;
        const stepTime = duration / steps;
        const stepValue = number / steps;
        
        let current = 0;
        const interval = setInterval(() => {
          current += stepValue;
          if (current >= number) {
            setCount(number);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, stepTime);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div 
      ref={ref}
      className={`text-center p-6 rounded-xl bg-gradient-card shadow-md transition-all duration-700 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-orange">
          {icon}
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Τα Νούμερά Μας Μιλούν
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Χιλιάδες Έλληνες εμπιστεύονται την Follow Up για να βρουν το καλύτερο πρόγραμμα ρεύματος
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<Building2 className="w-8 h-8 text-primary-foreground" />}
            number={17}
            label="Πάροχοι Ρεύματος"
            delay={0}
          />
          <StatItem
            icon={<FileText className="w-8 h-8 text-primary-foreground" />}
            number={462}
            suffix="+"
            label="Αναλύσεις Προσφορών"
            delay={200}
          />
          <StatItem
            icon={<Phone className="w-8 h-8 text-primary-foreground" />}
            number={2150}
            suffix="+"
            label="Κλήσεις Ενδιαφέροντος"
            delay={400}
          />
          <StatItem
            icon={<Star className="w-8 h-8 text-primary-foreground" />}
            number={94.6}
            suffix="%"
            label="Ικανοποιημένοι Πελάτες"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;