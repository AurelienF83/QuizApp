import q1 from "../assets/img/MADE44.png"

const questions = [
    {
      question: "Configurez l'adresse IP de votre PC afin de pouvoir vous connecter à une TAC TPU-1",
      type: "ip",
      correctAnswer: "172.16.6.x",
      image: q1,
      exclude: [3],
    },
    {
      question: "Veuillez saisir l'adresse IP pour se connecter à une TAC TPU-1",
      type: "ip",
      correctAnswer: "172.16.6.3",
      image:q1
    },
    {
      question: "Sur quelles bornes d'IPTU peut-on câbler les Entrées",
      options: ["1-2 et 3-4", "5-6 et 7-8", "9-10 et 11-12", "9-11 et 13-14"],
      correctAnswer: "1-2 et 3-4",
    },
    {
      question: "Sur quelles bornes d'IPTU peut-on câbler les Sorties",
      options: ["1-2 et 3-4", "5-6 et 7-8", "9-10 et 11-12", "9-11 et 13-14"],
      correctAnswer: "5-6 et 7-8",
    },
    {
      question: "Sur quelles bornes d'IPTU peut-on câbler les Alarmes en configuration NO",
      options: ["1-2 et 3-4", "5-6 et 7-8", "9-11 et 12-14", "10-11 et 13-14"],
      correctAnswer: "9-11 et 12-14",
    },
    {
      question: "Quel est le plus grand océan du monde ?",
      options: ["Océan Atlantique", "Océan Pacifique", "Océan Indien", "Océan Arctique"],
      correctAnswer: "Océan Pacifique",
    },
    {
      question: "Dans quelle ville se trouve la tour Eiffel ?",
      options: ["Paris", "Berlin", "Londres", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Quel est le plus petit pays du monde ?",
      options: ["Monaco", "Luxembourg", "Vatican", "Malte"],
      correctAnswer: "Vatican",
    },
    {
      question: "Qui a découvert la pénicilline ?",
      options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
      correctAnswer: "Alexander Fleming",
    },
    {
      question: "Quel est le plus haut sommet du monde ?",
      options: ["Mont Blanc", "K2", "Mont Everest", "Kilimandjaro"],
      correctAnswer: "Mont Everest",
    },
  ];
  
  export default questions;
