import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-tage.component.scss', './test-page-adaptive.component.scss']
})
export class TestPageComponent implements OnInit{
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  quiz = {
    name: "История РК",
    iconPath: "./assets/KZ.png",
    questionsCount: 40,
    questions: [
      {
        id: 1,
        topic: "lorem ipsum",
        question: "If M is mass of water that rises in capillary tube of radius ‘r’, then mass of water rising in a capillary tube of radius ‘2r’ is:If M is mass of water that rises in capillary tube of radius ‘r’, then mass of water rising in a capillary tube of radius ‘2r’ is:If M is mass of water that rises in capillary tube of radius ‘r’, then mass of water rising in a capillary tube of radius ‘2r’ is:If M is mass of water that rises in capillary tube of radius ‘r’, then mass of water rising in a capillary tube of radius ‘2r’ is:",
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
  selectedQuestion = this.quiz.questions[0]
  secondsOnPage = 0
  courseId = 0

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)

    setTimeout(() => {
      this.logTime()
    }, 20000)

    this.http.get("/api/"+this.courseId+"/tests").subscribe((res: any) => {
      this.quiz = res;
    })

    // @ts-ignore
    window.addEventListener("load", () => {
      // @ts-ignore
      document.getElementById("current_question_text").innerText = this.selectedQuestion.question
      // @ts-ignore
      document.getElementById("current_question_topic").innerText = "Тема: " + this.selectedQuestion.topic
      this.selectQuestion();
    })
  }

  logTime() {
    const userId = getCookie('user_id');
    if (!userId) {
      console.error('User ID not found in cookies');
      return;
    }

    this.http.post("/api/log_time/",
      {
        "action": `User: ${userId}: Страница викторины`,
        "duration": this.secondsOnPage
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).subscribe((res: any) => {
      console.log(res);
    }, (error) => {
      console.error('Error logging time:', error);
    });
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
        document.getElementById("current_question_text").innerText = this.selectedQuestion.question
        // @ts-ignore
        document.getElementById("current_question_topic").innerText = "Тема: " + this.selectedQuestion.topic
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

  answer() {
    let selectedAnswer = null;

    this.selectedQuestion.answers.forEach(item => {
      if (item.isAnswer) {
        selectedAnswer = item;
      }
    })

    this.http.post("/api/courses/check-test/",
      {
        "test_id": this.selectedQuestion.id,
        "answer": selectedAnswer
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
      }
    ).subscribe((res: any) => {
      console.log(res);
    })
  }

}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  }
  return null;
}
