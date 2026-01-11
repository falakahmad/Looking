import styles from "./WhyChooseSection.module.css";
import { Gavel, ShieldCheck, Zap, Users } from "lucide-react";

interface WhyChooseSectionProps {
  dict: any;
}

export default function WhyChooseSection({ dict }: WhyChooseSectionProps) {
  const { whyChoose } = dict;

  const getIcon = (title: string) => {
    const props = { size: 28, strokeWidth: 2, fill: "currentColor" };
    switch (title) {
      case "Live Auctions":
        return <Gavel {...props} />;
      case "Secure Trading":
        return <ShieldCheck {...props} />;
      case "Instant Listings":
        return <Zap {...props} />;
      case "Community Trust":
        return <Users {...props} />;
      default:
        return null;
    }
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{whyChoose.title}</h2>
          <p className={styles.subtitle}>{whyChoose.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {whyChoose.list.map((item: any, index: number) => (
            <div key={index} className={styles.card}>
              <div
                className={`${styles.iconWrapper} ${
                  item.type === "blue" ? styles.iconBlue : styles.iconYellow
                }`}
              >
                {getIcon(item.title)}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
