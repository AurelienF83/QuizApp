// types attendus pour les props 'current' et 'total'.
interface ProgressBarProps {
  current: number; // Numéro de la question actuelle dans le quiz.
  total: number; // Nombre total de questions dans le quiz.
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  // Calcul du pourcentage de progression basé sur la question actuelle et le total.
  const progressPercentage = (current / total) * 100;

  return (
    // Barre de progression
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div className="bg-primary h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
