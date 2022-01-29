import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ready, Set, STEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.rocketsMain}>
        <div className={styles.storyContainer}></div>
        <div className={styles.rocketContainer}></div>
      </main>
    </div>
  );
}