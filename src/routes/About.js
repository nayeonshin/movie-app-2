import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.card}>
      <p className={styles.card__introduction}>
        Movie App is a simple function-based React app that lists movies from
        YTS.
      </p>
      <span>- Nayeon</span>
    </div>
  );
}

export default About;
