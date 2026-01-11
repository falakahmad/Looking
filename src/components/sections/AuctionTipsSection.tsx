import styles from "./AuctionTipsSection.module.css";

interface AuctionTipsSectionProps {
  dict: any;
}

export default function AuctionTipsSection({ dict }: AuctionTipsSectionProps) {
  const { auctionTips } = dict;

  const renderCard = (data: any) => (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{data.title}</h3>
      <ul className={styles.list}>
        {data.list.map((item: string, index: number) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.checkIcon}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
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
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{auctionTips.title}</h2>
          <p className={styles.subtitle}>{auctionTips.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {renderCard(auctionTips.buyers)}
          {renderCard(auctionTips.sellers)}
        </div>
      </div>
    </section>
  );
}
