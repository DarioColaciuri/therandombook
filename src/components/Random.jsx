import Button from "./Button.jsx";
import songs from "../utils/songs.json";
import { useState } from "react";
import "../../public/random.css";

const Random = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [displayedSong, setDisplayedSong] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const getRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  };

  const handleButtonClick = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setCurrentSong(null);
    let spinCount = 0;

    const spinInterval = setInterval(() => {
      const song = getRandomSong();
      setDisplayedSong(song);
      spinCount += 1;

      if (spinCount > 20) {
        clearInterval(spinInterval);
        setTimeout(() => {
          setCurrentSong(song);
          setIsSpinning(false);
        }, 0);
      }
    }, 100);
  };

  return (
    <>
      <div className="content">
        <Button onClick={handleButtonClick} />
        <div className="result-container">
          <div className={`result ${isSpinning ? "spinning" : ""}`}>
            {isSpinning ? (
              <>
                <div className="title">{displayedSong.song}</div>
                <div className="artist">{displayedSong.artist}</div>
                <div className="page">página {displayedSong.page}</div>
                <div className="stars">{displayedSong.stars}</div>
              </>
            ) : currentSong ? (
              <>
                <div className="title">{currentSong.song}</div>
                <div className="artist">{currentSong.artist}</div>
                <div className="page">página {currentSong.page}</div>
                <div className="stars">{currentSong.stars}</div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Random;
