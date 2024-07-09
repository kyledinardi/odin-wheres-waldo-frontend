import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import Game from './Game.jsx';
import cyberpunkCity from '../img/cyberpunk-city.webp';
import cyberpunkCityHalf from '../img/cyberpunk-city-half.webp';
import batman from '../img/batman.png';
import jabbaTheHutt from '../img/jabba-the-hutt.png';
import tomCat from '../img/tom-cat.png';

function CyberpunkCity() {
  const [
    setIsGame,
    setCharacters,
    setIsGameOver,
    isGame,
    characters,
    isGameOver,
    timerValue,
  ] = useOutletContext();

  useEffect(() => {
    setIsGame(true);
    window.scrollTo(0, 0);

    setCharacters([
      { name: 'Batman', img: batman },
      { name: 'Jabba the Hutt', img: jabbaTheHutt },
      { name: 'Tom Cat', img: tomCat },
    ]);
  }, [setIsGame, setCharacters]);

  if (isGame) {
    return (
      <Game
        setCharacters={(c) => setCharacters(c)}
        setIsGameOver={(g) => setIsGameOver(g)}
        characters={characters}
        isGameOver={isGameOver}
        timerValue={timerValue}
        imageObj={{
          name: 'cyberpunkCity',
          full: cyberpunkCity,
          half: cyberpunkCityHalf,
          width: 1988,
          height: 3708,
        }}
        dropdownDimensions={{ width: 181, height: 217 }}
      />
    );
  }
}

export default CyberpunkCity;
