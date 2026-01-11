import styles from "./HowItWorksSection.module.css";

interface HowItWorksSectionProps {
  dict: any;
}

export default function HowItWorksSection({ dict }: HowItWorksSectionProps) {
  const { howItWorks } = dict;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{howItWorks.title}</h2>
          <p className={styles.subtitle}>{howItWorks.subtitle}</p>
        </div>

        <div className={styles.stepsWrapper}>
          <div className={styles.svgWrapper}>
            <svg
              viewBox="0 0 1200 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.curvedLine}
              preserveAspectRatio="none"
            >
              <path
                d="M 150 175 C 300 175, 300 55, 450 55 C 600 55, 600 245, 750 245 C 900 245, 900 145, 1050 145"
                stroke="#1d5fe8"
                strokeWidth="3"
                strokeDasharray="8 12"
                strokeOpacity="0.2"
              />
            </svg>
          </div>

          <div className={styles.stepsGrid}>
            {howItWorks.steps.map((step: any, index: number) => (
              <div
                key={index}
                className={`${styles.stepBox} ${styles[`step${index + 1}`]}`}
              >
                <div
                  className={`${styles.numberBox} ${
                    step.type === "blue" ? styles.bgBlue : styles.bgYellow
                  }`}
                >
                  {step.number}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
