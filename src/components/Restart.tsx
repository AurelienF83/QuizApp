// type pour les props de Restart.
interface RestartProps {
  onRestart: () => void;
}

// Composant reset du QCM
const Restart = ({ onRestart }: RestartProps) => {
  return (
    // Bouton restart du QCM
    <button
      className="bg-primary hover:bg-gray-700 text-secondary font-bold py-2 px-4 rounded mt-4"
      onClick={onRestart}
    >
      Recommencer
    </button>
  );
};

export default Restart;
