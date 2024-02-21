import { useEffect, useState } from "react";
import clk from "../assets/img/icons8-temps.gif";

// type pour les props de Timer.
interface TimerProps {
  duration: number;
  onTimeUp: () => void; // Fonction appelée lorsque le temps est écoulé
}

const Timer = ({ duration, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Si le temps restant est à 0, déclencher onTimeUp pour passer à question suivante
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Décompte du temps
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Reset timer si écoulé ou question suivante
    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-primary flex items-center">
      <img src={clk} alt="Temps restant" className="h-7 mr-2" />
      {timeLeft} secondes
    </div>
  );
};

export default Timer;
