import Image from "next/image";
import styles from "./CategoriesSection.module.css";

interface CategoriesSectionProps {
  dict: any;
}

export default function CategoriesSection({ dict }: CategoriesSectionProps) {
  const { categories } = dict;

  const getIconPath = (index: number) => {
    return `/categories/img${index + 1}.png`;
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{categories.title}</h2>
          <p className={styles.subtitle}>{categories.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {categories.list.map((item: any, index: number) => (
            <div
              key={index}
              className={`${styles.card} ${
                item.type === "blue" ? styles.blueCard : styles.yellowCard
              }`}
            >
              <div className={styles.imgContainer}>
                <Image
                  src={getIconPath(index)}
                  alt={item.title}
                  width={80}
                  height={80}
                  className={styles.iconImg}
                />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <span
                className={`${styles.listings} ${
                  item.type === "blue" ? styles.textBlue : styles.textYellow
                }`}
              >
                {item.listings}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
