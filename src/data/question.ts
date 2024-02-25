import q1 from "../assets/img/ippc.png"
import q2 from "../assets/img/navip.png"
import q3 from "../assets/img/IPTU.png"
import q4 from "../assets/img/atpu.png"
import q5 from "../assets/img/mwtuqcm.png"
import q6 from "../assets/img/fichiers2.png"
import q7 from "../assets/img/aversa.png"
import q8 from "../assets/img/aversab.png"

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
      image:q2
    },
    {
      question: "Sur quelles bornes d'IPTU peut-on câbler les Entrées",
      options: ["1-2 et 3-4", "5-6 et 7-8", "9-10 et 11-12", "9-11 et 13-14"],
      correctAnswer: "1-2 et 3-4",
      image:q3
    },
    {
      question: "Sur quelles bornes d'IPTU peut-on câbler les Sorties",
      options: ["1-2 et 3-4", "5-6 et 7-8", "9-10 et 11-12", "9-11 et 13-14"],
      correctAnswer: "5-6 et 7-8",
      image:q3
    },
    {
      question: "Sur quelles bornes d'IPTU peut-on câbler les Alarmes en configuration NO",
      options: ["1-2 et 3-4", "5-6 et 7-8", "9-11 et 12-14", "10-11 et 13-14"],
      correctAnswer: "9-11 et 12-14",
      image:q3
    },
    {
      question: "Une TAC est équipée d'une carte d'alimentation ATPU00 (48Vcc). Quelle modification doit-on réaliser si on souhaite l'alimenter en 127Vcc ?",
      options: ["Déplacer un cavalier sur 127Vcc", "Rien, la carte est compatible 48Vcc et 127Vcc", "Changer la carte pour une ATPU0.1", "Se câbler sur le connecteur RTC"],
      correctAnswer: "Changer la carte pour une ATPU0.1",
      image:q4
    },
    {
      question: "Quel est la fonction de la carte MWTU ?",
      options: ["Communiquer sur un lien IP", "Communiquer sur un lien FO", "Configurer l'équipement", "Alimenter la carte en 127Vcc"],
      correctAnswer: "Configurer l'équipement",
      image:q5
    },
    {
      question: "L'utilisateur dispose d'un fichier type. Dans quel ordre doit-il procéder pour le charger dans l'équipement ?",
      options: ["Cliquer sur Acquérir puis Programmer", "Cliquer sur Ouvrir puis Programmer", "Cliquer sur Acquérir puis Sauvegarder", "Cliquer sur Sauvegarder puis Programmer"],
      correctAnswer: "Cliquer sur Ouvrir puis Programmer",
      image:q6
    },
    {
      question: "De quel type est cette affectation de commandes ?",
      options: ["A -> A", "A -> B", "A -> A+B", "A -> A+B+C+D"],
      correctAnswer: "A -> A",
      image:q7
    },
    {
      question: "De quel type est cette affectation de commandes ?",
      options: ["A -> A+B", "A -> A", "A -> B", "A -> A+B+C+D"],
      correctAnswer: "A -> A+B",
      image:q8
    },
    
  ];
  
  export default questions;
