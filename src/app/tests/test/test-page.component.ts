import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-tage.component.scss']
})
export class TestPageComponent implements OnInit{
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  quiz = {
    name: "История РК",
    iconPath: "./assets/KZ.png",
    questionsCount: 40,
    backgroundColor: "rgba(8, 106, 254, 1)",
    questions: [
      {
        id: 1,
        question: "If M is mass of water that rises in capillary tube of radius ‘r’, then mass of water rising in a capillary tube of radius ‘2r’ is:",
        answers: [
          {
            answer: "Мы один человек?",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
      {
        id: 2,
        question: "Кто мы?2",
        answers: [
          {
            answer: "Мы один человек?2",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?2",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?2",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?2",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
      {
        id: 3,
        question: "Кто мы?3",
        answers: [
          {
            answer: "Мы один человек?",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
      {
        id: 4,
        question: "Кто мы?4",
        answers: [
          {
            answer: "Мы один человек?",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
      {
        id: 5,
        question: "Кто мы?5",
        answers: [
          {
            answer: "Мы один человек?",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
      {
        id: 6,
        question: "Кто мы?6",
        answers: [
          {
            answer: "Мы один человек?",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
      {
        id: 7,
        question: "Кто мы?7",
        answers: [
          {
            answer: "Мы один человек?",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
      {
        id: 8,
        question: "Кто мы?8",
        answers: [
          {
            answer: "Мы один человек?",
            isAnswer: true,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
          {
            answer: "Мы один человек?",
            isAnswer: false,
            isSelected: false
          },
        ]
      },
    ]
  }
  selectedQuestion = this.quiz.questions[0]

  ngOnInit() {
    // @ts-ignore
    window.addEventListener("load", () => {
      // @ts-ignore
      document.getElementById("current_question").innerText = this.selectedQuestion.question
      this.selectQuestion();
    })
  }

  selectQuestion() {
    const qButtons = Array.from(document.getElementsByClassName("test_page__content__outline__questions__question"));
    qButtons[0].classList.add("selected")
    qButtons.forEach(qButton => {
      qButton.addEventListener("click", () => {
        qButtons.map(qButton => qButton.classList.remove("selected"))
        const questionId = parseInt(<string>Array.from(qButton.attributes).find(el => el.name == "id")?.value)
        qButton.classList.add("selected")
        // @ts-ignore
        this.selectedQuestion = this.quiz.questions[questionId]
        // @ts-ignore
        document.getElementById("current_question").innerText = this.selectedQuestion.question
        this.highlightSelectedAnswers()
      })
    })
  }

  highlightSelectedAnswers() {
    const selectedAnswerIndex = this.selectedQuestion.answers.findIndex(answer => answer.isSelected);
    if (selectedAnswerIndex !== -1) {
      setTimeout(() => {
        const currentAnswers = document.querySelectorAll(".test_page__content__current_question__answers__list__answer");
        currentAnswers[selectedAnswerIndex].classList.add("selected");
      }, 10)
    }
  }

  selectAnswer(answerIndex: number) {
    const currentAnswers = document.querySelectorAll(".test_page__content__current_question__answers__list__answer");
    currentAnswers.forEach(cA => cA.classList.remove("selected"));
    this.selectedQuestion.answers.forEach(answer => answer.isSelected = false);
    currentAnswers[answerIndex].classList.add("selected"); // Highlight the selected answer
    this.selectedQuestion.answers[answerIndex].isSelected = true; // Update the selected answer in the data model
  }
}
