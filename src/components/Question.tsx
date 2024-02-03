interface QuestionProps {
  data: {
    question: string;
    type?: string;
    options?: string[];
    correctAnswer: string;
    image?: string;
    exclude?: number[]; // Ajout du champ optionnel 'exclude'
  };
  setSelectedAnswer: (answer: string) => void;
  selectedAnswer: string;
}

const Question = ({ data, setSelectedAnswer, selectedAnswer }: QuestionProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  // Ajouter une fonction pour gérer la validation lors de la soumission ou du changement

  return (
    <div>
      <div className="flex justify-center">
        {data.image && <img src={data.image} alt={data.question} className="max-w-full h-auto" />}
      </div>
      <h2 className="text-lg font-semibold">{data.question}</h2>

      {data.type === "ip" ? (
        <div className="mt-10 flex justify-center">
          <div className="text-left">
            <label htmlFor="ipAddress" className="block text-sm font-medium text-primary">
              IP Address
            </label>
            <input
              id="ipAddress"
              type="text" // Modifier pour "text" car "ip" n'est pas un type valide
              value={selectedAnswer}
              onChange={handleChange}
              className="mt-0.5 p-2 border rounded"
              placeholder="123.123.123.123"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-3 mt-8 ml-28">
          {data.options?.map((option, index) => (
            <label key={index} className="flex items-center">
              <div onClick={() => setSelectedAnswer(option)} className="flex items-center space-x-2 cursor-pointer">
                <div
                  className={`w-4 h-4 rounded-sm border-2 ${selectedAnswer === option ? "bg-primary" : "bg-secondary"}`}
                ></div>
                <span className="select-none">{option}</span>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
