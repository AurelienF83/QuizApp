import { useEffect, useState } from 'react';

// type pour les props de Timer.
interface TimerProps {
  duration: number; // Durée en secondes
  onTimeUp: () => void; // Fonction appelée lorsque le temps est écoulé
}

// Déclaration du composant Timer en typant directement les props avec l'interface TimerProps.
const Timer = ({ duration, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Si le temps restant est à 0, déclencher onTimeUp et terminer l'effet.
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Création d'un intervalle pour décompter le temps.
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Nettoyage de l'intervalle lorsque le composant est démonté ou mis à jour.
    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]); // Dépendances de l'effet : timeLeft et onTimeUp.

  return (
    <div className='text-primary'>
      Temps restant : {timeLeft} secondes
    </div>
  );
};

export default Timer;

