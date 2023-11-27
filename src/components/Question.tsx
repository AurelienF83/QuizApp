// types pour les props de Question.
interface QuestionProps {
  data: {
    question: string;
    options: string[];
    correctAnswer: string;
    image?: string; 
  };
  setSelectedAnswer: (answer: string) => void;
  selectedAnswer: string;
}

// Déclaration du composant Question
const Question = ({ data, setSelectedAnswer, selectedAnswer }: QuestionProps) => {
  return (
    <div>
      {/* Affichage de la question */}
      <div className="flex justify-center">
        {data.image && <img src={data.image} alt={data.question} className="max-w-full h-auto" />}
      </div>
      <h2 className="text-lg font-semibold">{data.question}</h2>

      {/* Liste des options de réponse */}
      <div className="flex flex-col space-y-3 mt-8 ml-28">
        {data.options.map((option, index) => (
          <label key={index} className="flex items-center">
            {/* Carré et texte de l'option */}
            <div onClick={() => setSelectedAnswer(option)} className="flex items-center space-x-2 cursor-pointer">
              {/* Carré qui change de couleur selon si l'option est sélectionnée */}
              <div className={`w-4 h-4 rounded-sm border-2 ${selectedAnswer === option ? 'bg-primary' : 'bg-secondary'}`}></div>
              {/* Texte de l'option */}
              <span className="select-none">{option}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;








