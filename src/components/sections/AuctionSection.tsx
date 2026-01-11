import styles from "./AuctionSection.module.css";
import { Download, Zap, Users, ShieldCheck } from "lucide-react";
import { FaApple, FaAndroid } from "react-icons/fa6";

interface AuctionSectionProps {
  dict: any;
}

export default function AuctionSection({ dict }: AuctionSectionProps) {
  const { auction } = dict;

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{auction.title}</h2>
          <p className={styles.sectionSubtitle}>{auction.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Download App First */}
          <div
            className={`${styles.card} ${styles.blueCard} ${styles.largeCard}`}
          >
            <div className={styles.iconBox}>
              <Download size={40} color="#1d5fe8" />
            </div>
            <h3 className={styles.cardTitle}>{auction.cards.download.title}</h3>
            <p className={styles.cardDesc}>
              {auction.cards.download.description}
            </p>
            <div className={styles.btnRow}>
              <button className="btn-white">
                <div className="btn-content">
                  <FaAndroid size={20} />
                  <span>Download for Android</span>
                </div>
              </button>
              <button className="btn-black">
                <div className="btn-content">
                  <FaApple size={20} />
                  <span>Download for iOS</span>
                </div>
              </button>
            </div>
          </div>

          {/* Card 2: Real-Time Bidding */}
          <div className={`${styles.card} ${styles.greyCard}`}>
            <div className={styles.iconBox}>
              <Zap size={40} fill="#1d5fe8" stroke="#1d5fe8" />
            </div>
            <h3 className={styles.cardTitleBlack}>
              {auction.cards.realtime.title}
            </h3>
            <p className={styles.cardDescMuted}>
              {auction.cards.realtime.description}
            </p>
          </div>

          {/* Card 3: Negotiate Instantly */}
          <div className={`${styles.card} ${styles.greyCard}`}>
            <div className={styles.iconBox}>
              <Users size={40} color="#1d5fe8" />
            </div>
            <h3 className={styles.cardTitleBlack}>
              {auction.cards.negotiate.title}
            </h3>
            <p className={styles.cardDescMuted}>
              {auction.cards.negotiate.description}
            </p>
          </div>

          {/* Card 4: Track Your Wins */}
          <div
            className={`${styles.card} ${styles.darkCard} ${styles.wideCard} ${styles.bottomCard}`}
          >
            <h3 className={styles.cardTitle}>{auction.cards.track.title}</h3>
            <p className={styles.cardDesc}>{auction.cards.track.description}</p>
          </div>

          {/* Card 5: 100% Secure */}
          <div
            className={`${styles.card} ${styles.greyCard} ${styles.bottomCard}`}
          >
            <h3 className={styles.cardTitleBlack}>
              {auction.cards.secure.title}
            </h3>
            <p className={styles.cardDescMuted}>
              {auction.cards.secure.description}
            </p>
          </div>

          {/* Card 6: Join Thousands */}
          <div
            className={`${styles.card} ${styles.blueCard} ${styles.bottomCard}`}
          >
            <h3 className={styles.cardTitle}>{auction.cards.join.title}</h3>
            <p className={styles.cardDesc}>{auction.cards.join.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
