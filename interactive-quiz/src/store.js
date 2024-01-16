import { reactive } from "vue";

export const store = reactive({
  currentQuestionIndex: 0,

  filmQuestions: [
    {
      question: "🧙‍♂️📚🚂",
      answer: 1,
      options: [
        " Il Signore degli Anelli",
        "Harry Potter",
        "Il Mago di Oz",
        "The Chronicles of Narnia",
      ],
      selected: null,
    },
    {
      question: "🍫🏭🏭",
      answer: 1,
      options: [
        "Rambo",
        "Willy Wonka & the Chocolate Factory",
        "Chocolat",
        "The Candyman",
      ],
      selected: null,
    },
    {
      question: "👨‍🚀🚀🌌",
      answer: 0,
      options: ["Interstellar", "Gravity", "The Martian", "Apollo 31"],
      selected: null,
    },
    {
      question: "🐭🍜🏠",
      answer: 2,
      options: [
        "Stuart Little",
        "The Tale of Despereaux",
        "Ratatouille",
        "The Secret of NIMH",
      ],
      selected: null,
    },
    {
      question: "🦁👑🌅",
      answer: 3,
      options: ["The Jungle Book", "Madagascar", "Born Free", "The Lion King"],
      selected: null,
    },
    {
      question: "👽📞🚲",
      answer: 0,
      options: [
        "E.T. the Extra-Terrestrial",
        "Close Encounters of the Third Kind",
        "Contact",
        "Arrival",
      ],
      selected: null,
    },
    {
      question: "🏹👧🔥",
      answer: 2,
      options: ["Brave", "Mulan", "The Hunger Games", "The Princess Diaries"],
      selected: null,
    },
    {
      question: "🚢🌊❄️",
      answer: 3,
      options: [
        "The Perfect Storm",
        "Pirates of the Caribbean",
        "Master and Commander: The Far Side of the World",
        "Titanic",
      ],
      selected: null,
    },
    {
      question: "🏴‍☠️📜⛵️",
      answer: 0,
      options: [
        "Pirates of the Caribbean",
        "Treasure Island",
        "Blackbeard's Ghost",
        "Cutthroat Island",
      ],
      selected: null,
    },
    {
      question: "👸👠🕰️",
      answer: 1,
      options: [
        "Beauty and the Beast",
        "Cinderella",
        "Sleeping Beauty",
        "Alice in Wonderland",
      ],
      selected: null,
    },
  ],
});

export default store;
