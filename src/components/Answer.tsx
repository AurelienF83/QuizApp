import { Button } from "@/components/ui/button";

// Définition des types pour les props
interface AnswerProps {
  question: { question: string; correctAnswer: string };
  givenAnswer: string;
  onPrevious: () => void;
  onNext: () => void;
}

// Déclaration du composant fonctionnel avec typage direct des props
const Answer = ({ question, givenAnswer, onPrevious, onNext }: AnswerProps) => {
  return (
    <div>
      <p>
        <strong>Question:</strong> {question.question}
      </p>
      <p>
        <strong>Votre réponse:</strong> {givenAnswer}
      </p>
      <p>
        <strong>Bonne réponse:</strong> {question.correctAnswer}
      </p>
      <div className=" flex mt-4 justify-between">
        <Button onClick={onPrevious}>Previous</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
};

export default Answer;
