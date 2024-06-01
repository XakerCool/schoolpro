import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss', './tests-page-adaptive.component.scss']
})
export class TestsPageComponent implements OnInit{
  tests = [
    {
      name: "История РК",
      iconPath: "./assets/KZ.png",
      backgroundColor: "rgba(8, 106, 254, 1)",
    },
    {
      name: "Математика",
      iconPath: "./assets/books.png",
      backgroundColor: "rgba(254, 8, 45, 1)",
    },
    {
      name: "Физика",
      iconPath: "./assets/telescope.png",
      backgroundColor: "rgba(87, 254, 8, 1)",
    }
  ]
  quiz = {
    name: "История РК",
    iconPath: "./assets/KZ.png",
    questionsCount: 40,
    time: {
      hours: 60,
      minutes: 59,
      seconds: 59
    }
  }
  secondsOnPage = 0
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.decreaseTime()
  }

  decreaseTime() {
    setInterval(() => {
      if (this.quiz.time.seconds < 1) {
        this.quiz.time.seconds = 60
        this.quiz.time.minutes--
      }
      if (this.quiz.time.minutes < 1) {
        this.quiz.time.minutes = 59
        this.quiz.time.hours--
      }
      this.quiz.time.seconds--
    }, 1000)
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Страница тестов",
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
