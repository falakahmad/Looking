import { FaApple, FaAndroid } from "react-icons/fa6";
import { BarChart3, Users, Zap, Crown } from "lucide-react";
import styles from "./PremiumAdsSection.module.css";

interface PremiumAdsSectionProps {
  dict: any;
}

export default function PremiumAdsSection({ dict }: PremiumAdsSectionProps) {
  const { premiumAds } = dict;

  const getCardIcon = (index: number) => {
    const props = { size: 28, strokeWidth: 2 };
    switch (index) {
      case 0: // 3x More Views
        return <BarChart3 {...props} />;
      case 1: // Faster Sales
        return <Zap {...props} fill="currentColor" />;
      case 2: // More Buyers
        return <Users {...props} />;
      case 3: // Top Placement
        return <Crown {...props} />;
      default:
        return null;
    }
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <h2 className={styles.title}>{premiumAds.title}</h2>
            <p className={styles.description}>{premiumAds.subtitle}</p>

            <ul className={styles.checklist}>
              {premiumAds.checklist.map((item: string, index: number) => (
                <li key={index} className={styles.checkItem}>
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

            <div className={styles.btnRow}>
              <button className="btn-blue">
                <div className="btn-content">
                  <FaAndroid size={20} />
                  <span>{dict.common.android}</span>
                </div>
              </button>
              <button className="btn-black">
                <div className="btn-content">
                  <FaApple size={20} />
                  <span>{dict.common.ios}</span>
                </div>
              </button>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.cardsGrid}>
              {premiumAds.cards.map((card: any, index: number) => (
                <div
                  key={index}
                  className={`${styles.smallCard} ${
                    card.type === "blue" ? styles.blueCard : styles.greyCard
                  } ${styles[`card${index + 1}`]}`}
                >
                  <div
                    className={
                      card.type === "blue" ? styles.iconWhite : styles.iconBlue
                    }
                  >
                    {getCardIcon(index)}
                  </div>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
