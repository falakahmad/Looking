import Image from "next/image";
import { Lightbulb, PenTool, Monitor, Puzzle } from "lucide-react";
import styles from "./AppChoiceSection.module.css";

interface AppChoiceSectionProps {
  dict: any;
}

export default function AppChoiceSection({ dict }: AppChoiceSectionProps) {
  const { appChoice } = dict;

  const getBottomIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lightbulb size={40} strokeWidth={1.5} />;
      case 1:
        return <PenTool size={40} strokeWidth={1.5} />;
      case 2:
        return <Monitor size={40} strokeWidth={1.5} />;
      case 3:
        return <Puzzle size={40} strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{appChoice.title}</h2>
          <p className={styles.subtitle}>{appChoice.subtitle}</p>
        </div>

        <div className={styles.vizWrapper}>
          <div className={styles.orbits}>
            <div className={styles.orbitLine} />
            <div className={styles.orbitLine} />
            <div className={styles.orbitLine} />
          </div>

          <div className={styles.centerNode}>
            <div className={styles.progressCircle}>
              <svg viewBox="0 0 100 100">
                <defs>
                  <linearGradient
                    id="progressGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#1d5fe8" />
                    <stop offset="100%" stopColor="#003087" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" className={styles.track} />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className={styles.progress}
                  stroke="url(#progressGrad)"
                />
              </svg>
              <div className={styles.centerText}>
                <h3>{appChoice.center.value}</h3>
                <p>{appChoice.center.label}</p>
              </div>
            </div>
          </div>

          {/* Floating Orbit Items - Grouped for connectivity */}
          <div className={`${styles.orbitItem} ${styles.item1}`}>
            <div className={styles.orbitCard}>
              <h4>{appChoice.orbitCards[0].title}</h4>
              <p>{appChoice.orbitCards[0].description}</p>
            </div>
            <div className={styles.avatarWrap}>
              <Image src={avatars[0]} alt="User" width={60} height={60} />
            </div>
          </div>

          <div className={`${styles.orbitItem} ${styles.item2}`}>
            <div className={styles.orbitCard}>
              <h4>{appChoice.orbitCards[1].title}</h4>
              <p>{appChoice.orbitCards[1].description}</p>
            </div>
            <div className={styles.avatarWrap}>
              <Image src={avatars[1]} alt="User" width={60} height={60} />
            </div>
          </div>

          <div className={`${styles.orbitItem} ${styles.item3}`}>
            <div className={styles.orbitCard}>
              <h4>{appChoice.orbitCards[2].title}</h4>
              <p>{appChoice.orbitCards[2].description}</p>
            </div>
            <div className={styles.avatarWrap}>
              <Image src={avatars[2]} alt="User" width={60} height={60} />
            </div>
          </div>

          <div className={`${styles.orbitItem} ${styles.item4}`}>
            <div className={styles.orbitCard}>
              <h4>{appChoice.orbitCards[3].title}</h4>
              <p>{appChoice.orbitCards[3].description}</p>
            </div>
            <div className={styles.avatarWrap}>
              <Image src={avatars[3]} alt="User" width={60} height={60} />
            </div>
          </div>
        </div>

        <div className={styles.bottomGrid}>
          {appChoice.bottomGrid.map((item: any, index: number) => (
            <div key={index} className={styles.gridCard}>
              <div className={styles.iconBox} style={{ color: item.color }}>
                {getBottomIcon(index)}
              </div>
              <h3 className={styles.gridTitle}>{item.title}</h3>
              <p className={styles.gridDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
