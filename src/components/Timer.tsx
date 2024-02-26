import { useEffect, useState } from "react";
import clk from "../assets/img/icons8-temps.gif";

interface TimerProps {
  duration: number; // Durée en secondes
  onTimeUp: () => void; // Fonction appelée lorsque le temps est écoulé
}

const Timer = ({ duration, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  // Fonction pour convertir les secondes en minutes:secondes
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-primary flex items-center">
      <img src={clk} alt="Temps restant" className="h-7 mr-2" />
      {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
