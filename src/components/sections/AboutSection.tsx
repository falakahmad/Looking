import styles from "./AboutSection.module.css";
import Image from "next/image";

interface AboutSectionProps {
  dict: any;
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const { about } = dict;

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.leftCol}>
            <div className={styles.imageBox}>
              <Image
                src="/trusted-marketplace.png?v2"
                alt="Trusted Marketplace"
                width={485}
                height={484}
                className={styles.aboutImg}
              />
            </div>
          </div>

          <div className={styles.rightCol}>
            <h2 className={styles.title}>{about.title}</h2>
            <p className={styles.description}>{about.description}</p>

            <ul className={styles.featureList}>
              {about.features.map((feature: any, index: number) => (
                <li key={index} className={styles.featureItem}>
                  <div className={styles.checkIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke="#fbbc05"
                        strokeWidth="2"
                      />
                      <path
                        d="M10 16L14 20L22 12"
                        stroke="#fbbc05"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.statsRow}>
              {about.stats.map((stat: any, index: number) => (
                <div key={index} className={styles.statBox}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
