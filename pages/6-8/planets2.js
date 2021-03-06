import Link from 'next/link';
import styles from '../../styles/Planets.module.css';
import { useState } from 'react';
import Header from '../../components/Header';

export default function Home() {
  const [textColor, setTextColor] = useState('black');

  let setColor = function (e) {
    console.log(e.target.value);
    setTextColor('green');
  };
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.planetsMain}>
        <div className={styles.planetsQuestion}>
          <h1>
            Home to the tallest mountain in the solar system (Olympus Mons), has
            the largest dust storms in the solar system, has 2 small moons
            (Phobos and Deimos)
          </h1>
        </div>
        <div className={styles.planetsAnswers}>
          <button onClick={setColor} value="Venus">
            Venus
          </button>
          <button onClick={setColor} value="Mars" style={{ color: textColor }}>
            Mars
          </button>
          <button onClick={setColor} value="Jupiter">
            Neptune
          </button>
          <button onClick={setColor} value="Earth">
            Earth
          </button>
        </div>
        <div>
          <Link
            href="/6-8/planets3
          "
            passHref
          >
            <button>Watch Interview</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
