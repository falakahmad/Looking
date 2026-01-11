import styles from "./Footer.module.css";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

interface FooterProps {
  dict: any;
}

export default function Footer({ dict }: FooterProps) {
  const { footer } = dict;
  const { whatsappCard } = footer;

  return (
    <footer className={styles.footer}>
      {/* Main Blue Container */}
      <div className={styles.mainBox}>
        {/* Top CTA Section */}
        <div className={styles.ctaRow}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.waTitle}>{whatsappCard.title}</h2>
            <p className={styles.waSubtitle}>{whatsappCard.subtitle}</p>
          </div>
          <div className={styles.ctaRight}>
            <label className={styles.inputLabel}>
              {whatsappCard.inputLabel}
            </label>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder={whatsappCard.inputPlaceholder}
                className={styles.waInput}
              />
              <button className={styles.waButton}>
                <FaWhatsapp size={20} />
                {whatsappCard.button}
              </button>
            </div>
            <p className={styles.waLegal}>
              {whatsappCard.legal} <a href="#">{whatsappCard.privacyLink}</a>
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Branding Section */}
        <div className={styles.brandingCol}>
          <div className={styles.logoBox}>
            <Image
              src="/logo.png"
              alt="Looking Logo"
              width={360}
              height={120}
              className={styles.footerLogo}
              quality={100}
            />
          </div>

          <div className={styles.storeBadges}>
            <a href="#" className={styles.badge}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                width={140}
                height={42}
              />
            </a>
            <a href="#" className={styles.badge}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width={160}
                height={42}
              />
            </a>
          </div>

          <nav className={styles.navLinks}>
            {footer.nav.map((link: any, idx: number) => (
              <a key={idx} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.legalRows}>
            <a href="#">{footer.links.privacy}</a>
            <span className={styles.sep}>|</span>
            <a href="#">{footer.links.terms}</a>
            <span className={styles.sep}>|</span>
            <a href="#" className={styles.deleteBtn}>
              {footer.links.delete}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Social Row */}
      <div className={styles.bottomRow}>
        <p className={styles.rights}>{footer.rights}</p>
        <div className={styles.socials}>
          <a href="#" className={styles.socialBtn}>
            <FaInstagram size={20} color="white" />
          </a>
          <a href="#" className={styles.socialBtn}>
            <FaFacebookF size={20} color="white" />
          </a>
          <a href="#" className={styles.socialBtn}>
            <FaXTwitter size={20} color="white" />
          </a>
          <a href="#" className={styles.socialBtn}>
            <FaLinkedinIn size={20} color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
