import styles from "./AuctionExperience.module.css";

interface AuctionExperienceProps {
  dict: any;
}

export default function AuctionExperience({ dict }: AuctionExperienceProps) {
  const { auctionExperience } = dict;

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{auctionExperience.title}</h2>
          <p className={styles.subtitle}>{auctionExperience.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {auctionExperience.steps.map((step: any, index: number) => (
            <div
              key={index}
              className={`${styles.card} ${
                step.primary ? styles.primaryCard : ""
              }`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.numberBadge}>{step.number}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
              </div>
              <p className={styles.cardDesc}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.proTipBox}>
          <div className={styles.proTipContent}>
            <span className={styles.lightbulb}>💡</span>
            <p>
              <strong>{auctionExperience.proTipPrefix}</strong>{" "}
              {auctionExperience.proTip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
