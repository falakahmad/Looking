import styles from "./ExperienceAppSection.module.css";
import Image from "next/image";

interface ExperienceAppSectionProps {
  dict: any;
}

export default function ExperienceAppSection({
  dict,
}: ExperienceAppSectionProps) {
  const { experienceApp } = dict;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{experienceApp.title}</h2>
          <p className={styles.subtitle}>{experienceApp.subtitle}</p>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/app-mockup.png"
          alt="App Mockup"
          width={1920}
          height={800}
          className={styles.mockupImg}
          priority
        />
      </div>
    </section>
  );
}
