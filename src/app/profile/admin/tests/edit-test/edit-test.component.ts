import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-page-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.scss', './edit-test-adaptive.component.scss']
})
export class EditTestComponent implements OnInit {
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  tests = [
    {
      id: 1,
      name: "История РК",
      img: {
        name: "KZ.png",
        size: 0
      },
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
      img: {
        name: "books.png",
        size: 0
      },
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
      img: {
        name: "telescope.png",
        size: 0
      },
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
    img: {
      name: '',
      size: ''
    },
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
  currentQuestionId = 0
  secondsOnPage = 0
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
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
    })
  }

  addNewQuestion() {
    // Add an empty object to currentQuestionAnswers array
    this.editingTest.questions.push(
      {
        id: this.editingTest.questions.length + 1,
        question: "lorem ipsum dolor sit amet",
        topic: "lorem",
        answers: [
          {
            answer: (this.editingTest.questions.length + 1).toString(),
            isAnswer: false,
          },
          {
            answer: (this.editingTest.questions.length + 1).toString(),
            isAnswer: false,
          },
          {
            answer: (this.editingTest.questions.length + 1).toString(),
            isAnswer: false,
          },
          {
            answer: (this.editingTest.questions.length + 1).toString(),
            isAnswer: false,
          }
        ]
      });
  }

  selectQuestion(e: any) {
    this.currentQuestionId = e.currentTarget.id;
    const qButtons = Array.from(document.getElementsByClassName("edit_test__content__outline__questions__question"));
    qButtons.forEach(qButton => {
      qButton.classList.remove("selected")
      // @ts-ignore
      document.getElementById("QUESTION_TEXT").value = this.editingTest.questions[this.currentQuestionId].question
      // @ts-ignore
      document.getElementById("QUESTION_TOPIC").value = this.editingTest.questions[this.currentQuestionId].topic
    })
    e.currentTarget.classList.add("selected");
    this.fillAnswers();
  }

  fillAnswers() {
    const answersElem = Array.from(document.getElementsByClassName("edit_test__content__current_question__answers__list__answer"));
    answersElem.forEach(answElem => {
      answElem.classList.remove("selected");
    })
    answersElem.forEach(answElem => {
      const answInputElem = answElem.querySelector(".edit_test__content__current_question__answers__list__answer__text__input") as HTMLInputElement;
      // @ts-ignore
      if (this.editingTest.questions[this.currentQuestionId].answers[answElem.id].isAnswer) {
        answElem.classList.add("selected");
      }
      // @ts-ignore
      answInputElem.value = this.editingTest.questions[this.currentQuestionId].answers[answElem.id].answer;
    })
  }

  checkAnswer(answerIndex: number, e: any) {
    this.editingTest.questions[this.currentQuestionId].answers.forEach((answer, index) => {
      answer.isAnswer = false;
    })
    this.editingTest.questions[this.currentQuestionId].answers[answerIndex].isAnswer = true
    Array.from(document.getElementsByClassName("edit_test__content__current_question__answers__list__answer")).forEach(item => {
      item.classList.remove("selected");
    })
    e.currentTarget.classList.add("selected");
  }

  saveQuestion() {
    const qTopicElem = document.getElementById("QUESTION_TOPIC") as HTMLInputElement;
    const qTextElem = document.getElementById("QUESTION_TEXT") as HTMLInputElement;


    this.editingTest.questions[this.currentQuestionId].topic = qTopicElem.value;
    this.editingTest.questions[this.currentQuestionId].question = qTextElem.value;

    const answersElems = Array.from(document.getElementsByClassName("edit_test__content__current_question__answers__list__answer"));
    answersElems.forEach(aE => {
      const answerTextElem = aE.querySelector(".edit_test__content__current_question__answers__list__answer__text__input") as HTMLInputElement;
      // @ts-ignore
      this.editingTest.questions[this.currentQuestionId].answers[aE.id].answer = answerTextElem.value;
    })
  }

  saveTest() {
    const testNameElem = document.getElementById("TEST_NAME") as HTMLInputElement;
    this.editingTest.name = testNameElem.value;

  }

  async handleFileInput(event: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Perform actions with the file, such as getting its path
      const imagePath = URL.createObjectURL(file);
      const imgElement = document.getElementById("test_icon_img") as HTMLImageElement;
      imgElement.src = imagePath;

      this.editingTest.img.name = file.name;
      this.editingTest.img.size = file.size;
    }
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Админская страница редактирования теста",
        "duration": this.secondsOnPage
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
}
