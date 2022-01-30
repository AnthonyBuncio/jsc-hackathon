import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.visionContainer}>
          <h1 className={styles.visionTitle}>Why STEM?</h1>
          <p className={styles.visionP}>
            STEM education gives people skills that make them more employable
            and ready to meet the current labor demand. It encompasses the whole
            range of experiences and skills. Each STEM component brings a
            valuable contribution to a well-rounded education. Science gives
            learners an in-depth understanding of the world around us. It helps
            them to become better at research and critical thinking. Technology
            prepares young people to work in an environment full of high-tech
            innovations. Engineering allows students to enhance problem-solving
            skills and apply knowledge in new projects. Mathematics enables
            people to analyze information, eliminate errors, and make conscious
            decisions when designing solutions. STEM education links these
            disciplines into a cohesive system. Thus, it prepares professionals
            who can transform society with innovation and sustainable solutions.
          </p>
        </div>
      </main>
    </div>
  );
}
