import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown.jsx';
import convention from '../img/convention.webp';
import conventionHalf from '../img/convention-half.webp';
import benson from '../img/benson.png';
import kermitTheFrog from '../img/kermit-the-frog.png';
import waylonSmithers from '../img/waylon-smithers.png';
import styles from '../style/Game.module.css';

function Convention() {
  // const [top, setTop] = useState(0);
  // const [left, setLeft] = useState(0);
  // const [display, setDisplay] = useState('none');
  const [setIsGame, setCharacters, isGame] = useOutletContext();
  const [inlineStyles, setInlineStyles] = useState({ display: 'none' });

  const characters = useRef([
    { name: 'Benson', img: benson },
    { name: 'Kermit the Frog', img: kermitTheFrog },
    { name: 'Waylon Smithers', img: waylonSmithers },
  ]);

  useEffect(() => {
    setIsGame(true);
    setCharacters(characters.current);
    window.scrollTo(0, 0);
  }, [setIsGame, setCharacters]);

  function handleClick(e) {
    const display = inlineStyles.display === 'none' ? 'block' : 'none';
    let top = null;
    let left = null;
    let bottom = null;
    let right = null;

    if (display === 'block') {
      if (e.nativeEvent.offsetY > e.target.height - 230) {
        bottom = e.target.height - e.nativeEvent.offsetY;
      } else {
        top = e.nativeEvent.offsetY;
      }

      if (e.nativeEvent.offsetX > e.target.width - 221) {
        right = e.target.width - e.nativeEvent.offsetX;
      } else {
        left = e.nativeEvent.offsetX;
      }
    }

    setInlineStyles({ display, top, left, bottom, right });
  }

  if (isGame) {
    return (
      <div className={styles.illustrationContainer}>
        <img
          onClick={(e) => handleClick(e)}
          className={styles.fullIllustration}
          srcSet={`${conventionHalf} 1800w, ${convention} 3600w`}
          sizes='(max-width: 600px) 1800px, 3600px'
          src={convention}
          alt='Convention'
        />
        <Dropdown characters={characters.current} inlineStyles={inlineStyles} />
      </div>
    );
  }
}

export default Convention;
