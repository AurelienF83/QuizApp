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
      <h2 className="text-lg font-semibold">{data.question}</h2>
      <div className="flex justify-center">
        {data.image && <img src={data.image} alt={data.question} className="mt-1 max-w-full h-auto max-h-82" />}
      </div>

      {data.type === "ip" ? (
        <div className="mt-8 flex justify-center">
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
        <div className="mt-8 mx-auto space-y-3 columns-2 max-w-xl">
          {data.options?.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 cursor-pointer border border-bg-primary p-2 rounded-md hover:bg-gray-100"
              onClick={() => setSelectedAnswer(option)}
            >
              <div
                className={`w-4 h-4 rounded-sm border-2 ${selectedAnswer === option ? "bg-primary" : "bg-secondary"}`}
              ></div>
              <span className="select-none">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
