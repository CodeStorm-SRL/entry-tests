export const POINT_PER_QUESTION = 10;

export type QuestionType = {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
};

export const arrOfQuestions: QuestionType[] = [
  {
    id: 1,
    answers: ["Larry Bird", "LeBron James", "Kobe Bryant", "Magic Johnson"],
    correctAnswer: "LeBron James",
    question:
      "Who is widely considered the greatest basketball player of all time?",
  },
  {
    id: 2,
    answers: [
      "Golden State Warriors",
      "Los Angeles Lakers",
      "Chicago Bulls",
      "Boston Celtics",
    ],
    correctAnswer: "Boston Celtics",
    question: "Which team has the most NBA championships?",
  },
  {
    id: 3,
    answers: [
      "Kawhi Leonard",
      "Giannis Antetokounmpo",
      "Stephen Curry",
      "James Harden",
    ],
    correctAnswer: "Giannis Antetokounmpo",
    question: "Who won the NBA MVP in the 2020-2021 season?",
  },
  {
    id: 4,
    answers: ["1996", "2003", "1984", "1990"],
    correctAnswer: "2003",
    question: "In which year did LeBron James enter the NBA draft?",
  },
  {
    id: 5,
    answers: [
      "Larry Bird",
      "Shaquille O'Neal",
      "Hakeem Olajuwon",
      "Tim Duncan",
    ],
    correctAnswer: "Tim Duncan",
    question: "Who was the first overall pick in the 1997 NBA Draft?",
  },
  {
    id: 6,
    answers: [
      "Kevin Durant",
      "Kyrie Irving",
      "Klay Thompson",
      "Draymond Green",
    ],
    correctAnswer: "Kevin Durant",
    question:
      "Which player suffered a torn Achilles during the 2019 NBA Finals?",
  },
  {
    id: 7,
    answers: [
      "Miami Heat",
      "Los Angeles Clippers",
      "Toronto Raptors",
      "Milwaukee Bucks",
    ],
    correctAnswer: "Toronto Raptors",
    question: "Which team won the NBA Championship in the 2018-2019 season?",
  },
  {
    id: 8,
    answers: [
      "Wilt Chamberlain",
      "Kareem Abdul-Jabbar",
      "Karl Malone",
      "Dirk Nowitzki",
    ],
    correctAnswer: "Kareem Abdul-Jabbar",
    question: "Who is the all-time leading scorer in NBA history?",
  },
  {
    id: 9,
    answers: ["Derrick Rose", "Russell Westbrook", "Chris Paul", "Steve Nash"],
    correctAnswer: "Derrick Rose",
    question: "Who was the youngest player to win the NBA MVP award?",
  },
  {
    id: 10,
    answers: [
      "San Antonio Spurs",
      "Oklahoma City Thunder",
      "Memphis Grizzlies",
      "Minnesota Timberwolves",
    ],
    correctAnswer: "San Antonio Spurs",
    question: "Which team did Tim Duncan spend his entire NBA career with?",
  },
];
