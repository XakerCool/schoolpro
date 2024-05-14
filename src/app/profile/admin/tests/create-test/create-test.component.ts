import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-admin-page-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
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
          },
          {
            answer: "1",
          },
          {
            answer: "1",
          },
          {
            answer: "1",
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

  ngOnInit() {

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
          },
          {
            answer: (this.test.questions.length + 1).toString(),
          },
          {
            answer: (this.test.questions.length + 1).toString(),
          },
          {
            answer: (this.test.questions.length + 1).toString(),
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
      const answInputElem = answElem.querySelector(".create_test__content__current_question__answers__list__answer__text__input") as HTMLInputElement;
      // @ts-ignore
      console.log(this.test.questions[this.currentQuestionId].questionAnswers[answElem.id])
      // @ts-ignore
      answInputElem.value = this.test.questions[this.currentQuestionId].questionAnswers[answElem.id].answer;
    })
  }
}
