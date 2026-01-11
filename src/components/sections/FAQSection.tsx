"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

interface FAQSectionProps {
  dict: any;
}

export default function FAQSection({ dict }: FAQSectionProps) {
  const { faq } = dict;
  const [openId, setOpenId] = useState<string | null>("02"); // Open the second one by default as per image

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{faq.title}</h2>
          <p className={styles.subtitle}>{faq.subtitle}</p>
        </div>

        <div className={styles.faqList}>
          {faq.list.map((item: any) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${
                openId === item.id ? styles.active : ""
              }`}
            >
              <button
                className={styles.questionRow}
                onClick={() => toggleFAQ(item.id)}
              >
                <span className={styles.faqId}>{item.id}</span>
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon}>
                  {openId === item.id ? "✕" : "＋"}
                </span>
              </button>
              {openId === item.id && (
                <div className={styles.answerRow}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
