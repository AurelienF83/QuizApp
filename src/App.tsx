import { useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";
import Answer from "./components/Answer";
import Restart from "./components/Restart";
import questions from "./data/question";
import { Button } from "@/components/ui/button";

const App = () => {
  // Déclaration des états avec useState.
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [givenAnswers, setGivenAnswers] = useState<string[]>([]);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [currentReviewQuestion, setCurrentReviewQuestion] = useState<number>(0);

  // logique pour gérer la soumission de réponse
  const handleAnswerSubmission = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const newGivenAnswers = [...givenAnswers, selectedAnswer];
    setGivenAnswers(newGivenAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }

    setSelectedAnswer("");
  };

  //logique pour redémarrer le quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setIsQuizFinished(false);
    setGivenAnswers([]);
    setShowAnswers(false);
    setCurrentReviewQuestion(0);
  };

  //logique pour afficher/cacher les réponses
  const toggleAnswerDisplay = () => {
    setShowAnswers(!showAnswers);
  };

  //logique pour la question suivante
  const handleNext = () => {
    if (currentReviewQuestion < givenAnswers.length - 1) {
      setCurrentReviewQuestion(currentReviewQuestion + 1);
    }
  };

  //logique pour la question précédente
  const handlePrevious = () => {
    if (currentReviewQuestion > 0) {
      setCurrentReviewQuestion(currentReviewQuestion - 1);
    }
  };

  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <div className="bg-secondary p-8 rounded-2xl w-1/2 flex flex-col">
        {!isQuizFinished && <Timer key={currentQuestion} duration={50} onTimeUp={handleAnswerSubmission} />}
        <h1 className="text-2xl font-bold text-center my-4">QCM TAC TPU-1 IP</h1>

        {!isQuizFinished ? (
          <div className="flex-grow">
            <div className="text-center">
              <Question
                data={questions[currentQuestion]}
                setSelectedAnswer={setSelectedAnswer}
                selectedAnswer={selectedAnswer}
              />
            </div>
            <div className="text-center mt-8">
              <Button variant="default" className="font-bold py-2 px-4 " onClick={handleAnswerSubmission}>
                Valider
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center flex-grow">Quiz terminé ! Votre score : {score}</div>
        )}

        <div className="mt-4 text-center">{!isQuizFinished ? `${currentQuestion + 1}/${questions.length}` : ""}</div>
        {!isQuizFinished && <ProgressBar current={currentQuestion + 1} total={questions.length} />}

        {isQuizFinished && (
          <>
            <Restart onRestart={restartQuiz} />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={toggleAnswerDisplay}
            >
              Afficher les réponses
            </button>
          </>
        )}

        {showAnswers && (
          <Answer
            question={questions[currentReviewQuestion]}
            givenAnswer={givenAnswers[currentReviewQuestion]}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default App;
