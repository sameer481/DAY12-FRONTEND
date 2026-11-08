import React, { useState } from "react";
import styles from "./FinalSectionStyling.module.css";

/**
 * FinalSectionStyling Component
 * Demonstrates:
 * 1. Design Token architecture & theme toggling (Light / Dark mode)
 * 2. High-impact Final Call-to-Action (CTA) section with ambient radial glow
 * 3. Polished social proof rating badges & avatar stacks
 * 4. Micro-interactions: hover lifts, glassmorphism card elevation, shimmer buttons
 * 5. Complete modern footer with dynamic date and scroll-to-top feature
 */
const FinalSectionStyling = () => {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.darkTheme : ""}`}>
      {/* Top Bar with Theme Toggle */}
      <div className={styles.topBar}>
        <span className={styles.courseTag}>Day 12: Final Section Styling</span>
        <button
          className={styles.themeToggleBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {/* Main Showcase Container */}
      <main className={styles.mainContainer}>
        {/* Decorative Ambient Background Glows */}
        <div className={styles.glowOrbPrimary}></div>
        <div className={styles.glowOrbSecondary}></div>

        {/* 1. Final CTA Card (Glassmorphism & Depth) */}
        <section className={styles.finalCtaSection}>
          <div className={styles.ctaCard}>
            {/* Social Proof Pill Badge */}
            <div className={styles.socialProofBadge}>
              <div className={styles.avatarStack}>
                <span className={styles.avatar}>🧑‍💻</span>
                <span className={styles.avatar}>👩‍🎨</span>
                <span className={styles.avatar}>👨‍💼</span>
              </div>
              <div className={styles.ratingInfo}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingText}>5.0 rated by 10,000+ engineers</span>
              </div>
            </div>

            {/* Main Headline & Subtitle */}
            <h2 className={styles.ctaHeading}>
              Ready to Master Modern Frontend Styling?
            </h2>
            <p className={styles.ctaSubtitle}>
              Take your design systems from prototype to production with clean CSS
              architecture, responsive layouts, and accessible micro-interactions.
            </p>

            {/* Interactive Email Capture Form */}
            {subscribed ? (
              <div className={styles.successMessage}>
                🎉 Thank you for subscribing! Check your inbox for starter templates.
              </div>
            ) : (
              <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    className={styles.emailInput}
                    placeholder="Enter your work email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className={styles.submitBtn}>
                    Get Started Free →
                  </button>
                </div>
              </form>
            )}

            {/* Trust Markers & Guarantees */}
            <div className={styles.trustMarkers}>
              <span>✓ No credit card required</span>
              <span>✓ Instant access</span>
              <span>✓ Open source code</span>
            </div>
          </div>
        </section>

        {/* 2. Feature Value Props (Grid with Elevation & Hover) */}
        <section className={styles.valuePropsSection}>
          <div className={styles.valueCard}>
            <div className={styles.iconCircle}>🎨</div>
            <h3>Design Tokens</h3>
            <p>
              Standardized variables for spacing, elevations, colors, and border radii
              ensure total visual consistency across every component.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.iconCircle}>✨</div>
            <h3>Micro-Interactions</h3>
            <p>
              Subtle hover elevation lifts, button focus rings, and transition curves
              create an intuitive and responsive tactile feel.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.iconCircle}>📐</div>
            <h3>Fluid Responsiveness</h3>
            <p>
              Mobile-first architecture ensures flawless rendering across smartphones,
              tablets, laptops, and ultra-wide desktop monitors.
            </p>
          </div>
        </section>
      </main>

      {/* 3. Polished Production Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandCol}>
            <h3 className={styles.brandTitle}>FrontendMastery</h3>
            <p className={styles.brandDesc}>
              Practical frontend engineering curriculum focused on semantic HTML,
              modern CSS, Flexbox, and React design patterns.
            </p>
          </div>

          <div className={styles.footerLinksCol}>
            <h4>Curriculum</h4>
            <a href="#flexbox">Day 9: Flexbox Basics</a>
            <a href="#sections">Day 10: Section Layouts</a>
            <a href="#rwd">Day 11: Responsiveness</a>
            <a href="#styling">Day 12: Section Styling</a>
          </div>

          <div className={styles.footerLinksCol}>
            <h4>Community</h4>
            <a href="https://github.com/sameer481" target="_blank" rel="noreferrer">
              GitHub Repositories
            </a>
            <a href="#docs">Documentation</a>
            <a href="#discord">Discord Community</a>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Scroll-to-Top */}
        <div className={styles.footerBottomBar}>
          <p>© {new Date().getFullYear()} Frontend Project. All rights reserved.</p>
          <button className={styles.backToTopBtn} onClick={scrollToTop}>
            Back to Top ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

export default FinalSectionStyling;
