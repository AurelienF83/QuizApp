import { useState } from "react";
import Question from "./components/Question";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";
import Answer from "./components/Answer";
import Restart from "./components/Restart";
import questions from "./data/question";
import { Button } from "@/components/ui/button";
import { isValidIP } from "./data/utils";
import logo from "./assets/img/MADE44.png";
import trophy from "./assets/img/quiz.png";
import start from "./assets/img/icons8-jouer-48.png";
import trophee from "./assets/img/trophee.png";
import fb from "./assets/img/facebook.png";
import twitter from "./assets/img/twitter.png";
import yt from "./assets/img/youtube.png";
import lin from "./assets/img/linkedin.png";

const App = () => {
  // Déclaration des états avec useState.
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [givenAnswers, setGivenAnswers] = useState<string[]>([]);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [currentReviewQuestion, setCurrentReviewQuestion] = useState<number>(0);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  // logique pour gérer la soumission de réponse
  const handleAnswerSubmission = () => {
    const current = questions[currentQuestion];
    let isAnswerCorrect = false;

    if (current.type === "ip" && current.correctAnswer.includes("x")) {
      // Fonction isValidIP pour valider les réponses de type IP.
      isAnswerCorrect = isValidIP(selectedAnswer, current.correctAnswer, current.exclude);
    } else {
      // Pour les autres types de questions, rester en fonctionnement normal
      isAnswerCorrect = selectedAnswer === current.correctAnswer;
    }

    if (isAnswerCorrect) {
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
    <div className="bg-[#0c0f17] min-h-screen flex flex-col justify-center items-center relative">
      <div className="absolute top-0 m-4">
        <img src={logo} alt="Logo" className="h-12" />
      </div>

      {quizStarted && <div className="absolute top-4 left-1/2 transform -translate-x-1/2"></div>}

      {!quizStarted ? (
        <div className="flex flex-col h-[400px] w-[800px] rounded-2xl bg-gray-900 shadow-2xl items-center justify-start pt-4">
          <span className="text-secondary text-xl font-bold">QCM TAC TPU-1</span>
          <img src={trophee} alt="Logo" className="h-16 mt-12" />
          <div className="flex-grow flex flex-col items-center justify-center">
            <p className="text-secondary text-lg animate-pulse">Cliquez pour commencer</p>
            <button
              className="animate-pulse bg-secondary rounded-lg flex items-center justify-center transform transition-transform hover:scale-110 px-6 py-2 shadow-lg shadow-secondary/40 my-4"
              onClick={() => setQuizStarted(true)}
            >
              <img src={start} alt="Start" className="w-8 h-8" />
            </button>
          </div>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/madeofficiel/" target="_blank" rel="noopener noreferrer">
              <img
                src={fb}
                alt="Facebook"
                className="w-7 h-7 cursor-pointer transition duration-200 ease-in-out hover:scale-110"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src={twitter}
                alt="Twitter"
                className="w-7 h-7 cursor-pointer transition duration-200 ease-in-out hover:scale-110"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UClT3pgvhFnR00Ot46j8TQPA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={yt}
                alt="Youtube"
                className="w-7 h-7 cursor-pointer transition duration-200 ease-in-out hover:scale-110"
              />
            </a>
            <a href="https://fr.linkedin.com/company/made-sa" target="_blank" rel="noopener noreferrer">
              <img
                src={lin}
                alt="Linkedin"
                className="w-7 h-7 cursor-pointer transition duration-200 ease-in-out hover:scale-110"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl max-w-4xl w-3/4 flex flex-col">
          {!isQuizFinished && <Timer key={currentQuestion} duration={600} onTimeUp={handleAnswerSubmission} />}
          {!isQuizFinished ? (
            <div className="flex-grow mt-4">
              <div className="text-center">
                <Question
                  data={questions[currentQuestion]}
                  setSelectedAnswer={setSelectedAnswer}
                  selectedAnswer={selectedAnswer}
                />
              </div>
              <div className="text-center mt-4">
                <Button variant="default" className="font-bold py-2 px-4 " onClick={handleAnswerSubmission}>
                  Valider
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center flex-grow">
              <div className="text-primary text-lg font-semibold">Quiz terminé ! Votre score : {score}/10</div>
              <img src={trophy} alt="Trophy" className="h-20 mt-4" />
            </div>
          )}

          <div className="mt-4 text-center">{!isQuizFinished ? `${currentQuestion + 1}/${questions.length}` : ""}</div>
          {!isQuizFinished && <ProgressBar current={currentQuestion + 1} total={questions.length} />}
          {isQuizFinished && (
            <>
              <Restart onRestart={restartQuiz} />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-secondary font-bold py-2 px-4 rounded mt-4 "
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
      )}
    </div>
  );
};

export default App;
