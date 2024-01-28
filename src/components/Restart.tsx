// type pour les props de Restart.
interface RestartProps {
  onRestart: () => void; // Fonction à exécuter lorsque le bouton est cliqué.
}

// Déclaration du composant Restart en typant directement les props avec l'interface RestartProps.
const Restart = ({ onRestart }: RestartProps) => {
  return (
    // Bouton qui, lorsqu'il est cliqué, déclenche la fonction onRestart.
    <button
      className="bg-primary hover:bg-secondary text-white hover:text-primary font-bold py-2 px-4 rounded mt-4"
      onClick={onRestart}
    >
      Recommencer
    </button>
  );
};

export default Restart;
