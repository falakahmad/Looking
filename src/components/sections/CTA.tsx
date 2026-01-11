import styles from "./CTA.module.css";

interface CTAProps {
  dict: any;
}

export default function CTA({ dict }: CTAProps) {
  return (
    <section id="cta" className="section-padding">
      <div className="container">
        <div className={styles.ctaBox}>
          <span className={styles.tag}>{dict.cta.tag}</span>
          <h2 className={styles.title}>{dict.cta.title}</h2>
          <p className={styles.subtitle}>{dict.cta.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
