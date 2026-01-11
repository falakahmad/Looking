import { FaApple, FaAndroid } from "react-icons/fa6";
import { Zap } from "lucide-react";
import styles from "./LiveAuctionDemo.module.css";
import Image from "next/image";

interface LiveAuctionDemoProps {
  dict: any;
}

export default function LiveAuctionDemo({ dict }: LiveAuctionDemoProps) {
  const { liveAuctionDemo, common } = dict;
  const { product, recentBids, labels } = liveAuctionDemo;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{liveAuctionDemo.title}</h2>
          <p className={styles.subtitle}>{liveAuctionDemo.subtitle}</p>
        </div>

        <div className={styles.flexContainer}>
          {/* Left Column: Product Info Card */}
          <div className={`${styles.card} ${styles.leftCard}`}>
            <div className={styles.productImageContainer}>
              <Image
                src="/patek-watch.png"
                alt={product.title}
                fill
                className={styles.productImage}
                sizes="(max-width: 443px) 100vw, 443px"
              />
              <span className={styles.badge}>{product.tag}</span>
            </div>
            <div className={styles.productContent}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDesc}>{product.description}</p>

              <div className={styles.bidInfo}>
                <div className={styles.bidLabel}>{labels.currentBid}</div>
                <div className={styles.bidValue}>{product.currentBid}</div>
              </div>

              <div className={styles.timerRow}>
                <Zap size={18} className={styles.timerIcon} />
                <span>
                  {labels.timeLeftPrefix} {product.timeLeft}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bids List Card */}
          <div className={`${styles.card} ${styles.rightCard}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.recentBidTitle}>{labels.recentBidTitle}</h3>
            </div>
            <div className={styles.bidsList}>
              {recentBids.list.map((bid: any, index: number) => (
                <div key={index} className={styles.bidItem}>
                  <div className={styles.bidderInfo}>
                    <div className={styles.bidderName}>{bid.name}</div>
                    <div className={styles.bidTime}>{bid.time}</div>
                  </div>
                  <div className={styles.bidAmount}>{bid.amount}</div>
                </div>
              ))}
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.footerText}>{recentBids.cta}</div>
              <div className={styles.appBtns}>
                <button className="btn-blue">
                  <div className="btn-content">
                    <FaAndroid size={24} />
                    <span>{common.android}</span>
                  </div>
                </button>
                <button className="btn-black">
                  <div className="btn-content">
                    <FaApple size={24} />
                    <span>{common.ios}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
