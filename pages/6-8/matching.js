import Link from 'next/link';
import styles from '../../styles/Matching.module.css';
import React, { useState } from 'react';
import Header from '../../components/Header';

const matchingData = [
  ['Density', 'amount per unit size'],
  ['Gravity', 'the force of attraction between masses'],
  ['Matter', 'that which has mass and occupies space'],
  [
    'Potential Energy',
    'energy stored by a body or system by virtue of its position',
  ],
  ['Speed', 'the rate of which something happens'],
];

export default function Home() {
  const [numClicked, setNumClicked] = useState(0);
  const [textColorA, setTextColorA] = useState('black');
  const [textColorB, setTextColorB] = useState('black');
  const [textColorC, setTextColorC] = useState('black');
  const [textColorD, setTextColorD] = useState('black');
  const [textColorE, setTextColorE] = useState('black');

  let addWord = function (e) {
    setNumClicked((numClicked += 1));
  };

  let addDef = function (e) {
    setNumClicked((numClicked += 1));

    // if (numClicked % 2 === 0) {
    //   setTextColorA('green');
    // } else if (numClicked % 4 === 0) {
    //   setTextColorB('green');
    // } else if (numClicked % 6 === 0) {
    //   setTextColorC('green');
    // } else if (numClicked % 8 === 0) {
    //   setTextColorD('green');
    // } else if (numClicked % 10 === 0) {
    //   setTextColorE('green');
    // }

    if (numClicked % 10 === 0) {
      setTextColorE('green');
    } else if (numClicked % 8 === 0) {
      setTextColorD('green');
    } else if (numClicked % 6 === 0) {
      setTextColorC('green');
    } else if (numClicked % 4 === 0) {
      setTextColorB('green');
    } else {
      setTextColorA('green');
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.matchingMain}>
        <div className={styles.wordContainer}>
          <button onClick={addWord} style={{ color: textColorA }}>
            Density
          </button>
          <button onClick={addWord} style={{ color: textColorB }}>
            Gravity
          </button>
          <button onClick={addWord} style={{ color: textColorC }}>
            Matter
          </button>
          <button onClick={addWord} style={{ color: textColorD }}>
            Potential Energy
          </button>
          <button onClick={addWord} style={{ color: textColorE }}>
            Speed
          </button>
        </div>
        <div className={styles.definitionContainer}>
          <button onClick={addDef} style={{ color: textColorD }}>
            energy stored by a body or system by virtue of its position
          </button>
          <button onClick={addDef} style={{ color: textColorC }}>
            that which has mass and occupies space
          </button>
          <button onClick={addDef} style={{ color: textColorB }}>
            the force of attraction between masses
          </button>
          <button onClick={addDef} style={{ color: textColorE }}>
            the rate of which something happens
          </button>
          <button onClick={addDef} style={{ color: textColorA }}>
            amount per unit size
          </button>
        </div>
        <div>
          <Link href="/6-8/matching2" passHref>
            <button>Watch Interview</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
