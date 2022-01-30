import Head from 'next/head';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Head>
        <title>Ready, Set, STEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeHeader}>
        <div>
          <h1 className={styles.homeTitle}>Ready, Set, STEM</h1>
        </div>
        <div>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}>
              <Link href="/" passHref>
                <button className={styles.linkButton}>Home</button>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/our-vision" passHref>
                <button className={styles.linkButton}>Our Vision</button>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/stars" passHref>
                <button className={styles.linkButton}>
                  Reach for the Stars Stories
                </button>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/games" passHref>
                <button className={styles.linkButton}>Games</button>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/community-outreach" passHref>
                <button className={styles.linkButton}>
                  Community Outreach
                </button>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/why-stem" passHref>
                <button className={styles.linkButton}>Why STEM?</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
