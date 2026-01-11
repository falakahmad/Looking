import styles from "./Hero.module.css";
import Image from "next/image";
import { FaApple, FaAndroid } from "react-icons/fa6";

interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <div className={styles.leftCol}>
            <h1 className={styles.title}>
              {dict.hero.titlePrefix}
              <span>{dict.hero.titleAccent}</span>
              {dict.hero.titleSuffix}
            </h1>
            <p className={styles.subtitle}>{dict.hero.subtitle}</p>

            <div className={styles.buttonGroup}>
              <button className="btn-blue">
                <div className="btn-content">
                  <FaAndroid size={24} />
                  <span>{dict.hero.androidBtn}</span>
                </div>
              </button>
              <button className="btn-black">
                <div className="btn-content">
                  <FaApple size={24} />
                  <span>{dict.hero.iosBtn}</span>
                </div>
              </button>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/dubai-skyline.png?v=2"
                alt="Dubai Skyline"
                width={522}
                height={479}
                priority
                className={styles.skylineImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
