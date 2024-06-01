import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-page-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss', './create-test-adaptive.component.scss']
})
export class CreateTestComponent implements OnInit{
  test = {
    name: "",
    questions: [
      {
        id: 1,
        question: "lorem ipsum dolor sit amet",
        topic: "lorem",
        questionAnswers: [
          {
            answer: "1",
            isAnswer: false,
          },
          {
            answer: "1",
            isAnswer: false,
          },
          {
            answer: "1",
            isAnswer: false,
          },
          {
            answer: "1",
            isAnswer: false,
          }
        ]
      }
    ],
    img: {
      name: "",
      size: ""
    }
  }
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  currentQuestionAnswers = [
    {},
    {},
    {},
    {}
  ]
  currentQuestionId = 0
  secondsOnPage = 0

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
  }

  checkAnswer(answerIndex: number, e: any) {
    this.test.questions[this.currentQuestionId].questionAnswers.forEach((answer, index) => {
      answer.isAnswer = false;
    })
    this.test.questions[this.currentQuestionId].questionAnswers[answerIndex].isAnswer = true;
    Array.from(document.getElementsByClassName("create_test__content__current_question__answers__list__answer")).forEach(item => {
      item.classList.remove("selected");
    })
    e.currentTarget.classList.add("selected");
  }

  saveQuestion() {
    const qTopicElem = document.getElementById("QUESTION_TOPIC") as HTMLInputElement;
    const qTextElem = document.getElementById("QUESTION_TEXT") as HTMLInputElement;

    this.test.questions[this.currentQuestionId].topic = qTopicElem.value;
    this.test.questions[this.currentQuestionId].question = qTextElem.value;

    const answersElems = Array.from(document.getElementsByClassName("create_test__content__current_question__answers__list__answer"));
    answersElems.forEach(aE => {
      const answerTextElem = aE.querySelector(".create_test__content__current_question__answers__list__answer__text__input");
      // @ts-ignore
      this.test.questions[this.currentQuestionId].questionAnswers[aE.id].answer = answerTextElem.value;
    })
  }

  saveTest() {
    const testNameElem = document.getElementById("TEST_NAME") as HTMLInputElement;
    this.test.name = testNameElem.value;

    console.log(this.test)
  }

  async handleFileInput(event: any) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Perform actions with the file, such as getting its path
      const imagePath = URL.createObjectURL(file);
      const imgElement = document.getElementById("test_icon_img") as HTMLImageElement;
      imgElement.src = imagePath;

      this.test.img.name = file.name;
      this.test.img.size = file.size;
    }
  }

  addNewQuestion() {
    // Add an empty object to currentQuestionAnswers array
    this.test.questions.push(
      {
        id: this.test.questions.length + 1,
        question: "lorem ipsum dolor sit amet",
        topic: "lorem",
        questionAnswers: [
          {
            answer: (this.test.questions.length + 1).toString(),
            isAnswer: false,
          },
          {
            answer: (this.test.questions.length + 1).toString(),
            isAnswer: false,
          },
          {
            answer: (this.test.questions.length + 1).toString(),
            isAnswer: false,
          },
          {
            answer: (this.test.questions.length + 1).toString(),
            isAnswer: false,
          }
        ]
    });
  }

  selectQuestion(e: any) {
    this.currentQuestionId = e.currentTarget.id;
    const qButtons = Array.from(document.getElementsByClassName("create_test__content__outline__questions__question"));
    qButtons.forEach(qButton => {
      qButton.classList.remove("selected")
      // @ts-ignore
      document.getElementById("QUESTION_TEXT").value = this.test.questions[this.currentQuestionId].question
      // @ts-ignore
      document.getElementById("QUESTION_TOPIC").value = this.test.questions[this.currentQuestionId].topic
    })
    e.currentTarget.classList.add("selected");
    this.fillAnswers();
  }

  fillAnswers() {
    const answersElem = Array.from(document.getElementsByClassName("create_test__content__current_question__answers__list__answer"));
    answersElem.forEach(answElem => {
      answElem.classList.remove("selected");
    })
    answersElem.forEach(answElem => {
      const answInputElem = answElem.querySelector(".create_test__content__current_question__answers__list__answer__text__input") as HTMLInputElement;
      // @ts-ignore
      if (this.test.questions[this.currentQuestionId].questionAnswers[answElem.id].isAnswer) {
        answElem.classList.add("selected");
      }
      // @ts-ignore
      answInputElem.value = this.test.questions[this.currentQuestionId].questionAnswers[answElem.id].answer;
    })
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Страница создания теста",
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
