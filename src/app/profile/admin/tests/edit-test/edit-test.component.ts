import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-page-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.scss']
})
export class EditTestComponent implements OnInit {
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  tests = [
    {
      id: 1,
      name: "История РК",
      iconPath: "./assets/KZ.png",
      questionsCount: 40,
      backgroundColor: "rgba(8, 106, 254, 1)",
      questions: [
        {
          id: 1,
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
    },
    {
      id: 2,
      name: "Математика",
      iconPath: "./assets/books.png",
      questionsCount: 40,
      backgroundColor: "rgba(254, 8, 45, 1)",
      questions: [
        {
          id: 1,
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
    },
    {
      id: 3,
      name: "Физика",
      iconPath: "./assets/telescope.png",
      questionsCount: 40,
      backgroundColor: "rgba(87, 254, 8, 1)",
      questions: [
        {
          id: 1,
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
          topic: "lorem ipsum",
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
  ]

  editingTest = {
    id: 0,
    name: "none",
    iconPath: 'none',
    questionsCount: 0,
    backgroundColor: 'none',
    questions: [
      {
        id: 0,
        topic: "none",
        question: "none",
        answers: [
          {
            answer: 'none',
            isAnswer: false
          }
        ]
      }
    ]
  }
  selectedQuestion = {
    id: 0,
    topic: "none",
    question: "none",
    answers: [
      {
        answer: "none",
        isAnswer: false
      }
    ]
  }

  testId = 0
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.testId = params['id'];
      // @ts-ignore
      this.editingTest = this.tests.find(test => test.id == this.testId)
      this.selectedQuestion = this.editingTest.questions[0]
    });

    // @ts-ignore
    window.addEventListener("load", () => {
      // @ts-ignore
      document.getElementById("QUESTION_TEXT").value = this.selectedQuestion.question
      // @ts-ignore
      document.getElementById("QUESTION_TOPIC").innerText = "Тема: " + this.selectedQuestion.topic
      this.selectedQuestion.answers.forEach(answer => {
        if (answer.isAnswer) {
          // @ts-ignore
          document.getElementById("IS_ANSWER").checked = true
        }
      })
      this.selectQuestion()
    })
  }

  selectQuestion() {
    const qButtons = Array.from(document.getElementsByClassName("edit_test__content__outline__questions__question"));
    qButtons[0].classList.add("selected")
    qButtons.forEach(qButton => {
      qButton.addEventListener("click", () => {
        qButtons.map(qButton => qButton.classList.remove("selected"))
        const questionId = parseInt(<string>Array.from(qButton.attributes).find(el => el.name == "id")?.value)
        qButton.classList.add("selected")
        // @ts-ignore
        this.selectedQuestion = this.editingTest.questions[questionId]
        // @ts-ignore
        document.getElementById("QUESTION_TEXT").value = this.selectedQuestion.question
        // @ts-ignore
        document.getElementById("QUESTION_TOPIC").innerText = "Тема: " + this.selectedQuestion.topic
        this.selectedQuestion.answers.forEach((answer, index) => {
          if (answer.isAnswer) {
            // @ts-ignore
            document.getElementById("IS_ANSWER").checked = true
            this.checkAnswer(index)
            answer.isAnswer = true;
          }
        })
        console.log(this.selectedQuestion.answers)
      })
    })
  }
  checkAnswer(answerIndex: number) {
    const currentAnswers = document.querySelectorAll(".edit_test__content__current_question__answers__list__answer");
    Array.from(currentAnswers[answerIndex].children).forEach(cA => {
      if (cA.classList.contains("edit_test__content__current_question__answers__list__answer__check_is_answer")) {
        setTimeout(() => {
          // @ts-ignore
          cA.children[0].checked = true;
        }, 10)
      }
    })

    this.selectedQuestion.answers.forEach((answer, index) => {
      answer.isAnswer = false;
    })
    this.selectedQuestion.answers[answerIndex].isAnswer = true
    console.log(this.selectedQuestion.answers)
  }
}
