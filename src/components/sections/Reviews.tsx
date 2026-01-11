"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Reviews.module.css";

interface Review {
  id: number;
  name: string; // This corresponds to the title in the user's request (e.g., "id", "quo")
  body: string;
  email: string; // This corresponds to the user name/email
}

// Fixed fallback data matching the user's specific request EXACTLY
const MOCKED_REVIEWS = [
  {
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  },
  {
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem",
  },
  {
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est",
  },
  {
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati",
  },
  {
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et",
  },
  {
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint aut qs",
    email: "Presley.Mueller@myrl.com",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur",
  },
];

interface ReviewsProps {
  dict: any;
}

export default function Reviews({ dict }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We utilize the mocked data directly to ensure styling matches user request perfectly,
    // but typically this would fetch.
    setReviews(MOCKED_REVIEWS);
    setLoading(false);
  }, []);

  // Duplicate for marquee loop
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  if (loading) {
    return (
      <section id="reviews" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{dict.reviews.title}</h2>
          <div className={styles.loadingWrapper}>
            <div className={styles.spinner}></div>
            <p>{dict.reviews.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{dict.reviews.title}</h2>
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {marqueeReviews.map((review, index) => {
            // Extract "Title" (first word of name)
            const title = review.name.split(" ")[0];
            // Avatar letter from Title
            const avatarChar = title.charAt(0).toUpperCase();

            return (
              <div key={`${review.id}-${index}`} className={styles.reviewCard}>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>{avatarChar}</div>
                  <div className={styles.userDetails}>
                    <span className={styles.userTitle}>{title}</span>
                    <span className={styles.userName}>{review.email}</span>
                  </div>
                </div>
                <p className={styles.content}>"{review.body}"</p>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbc05" strokeWidth={0} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
