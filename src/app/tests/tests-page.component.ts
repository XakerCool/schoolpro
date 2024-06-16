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
    ID: 1,
    name: "История РК",
    iconPath: "./assets/KZ.png",
    questionsCount: 40,
    time: "2024-06-17"
  }
  secondsOnPage = 0
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.decreaseTime()

    this.http.get("/api/courses/quiz/").subscribe((data: any) => {
      this.quiz = data;
    })
  }

  decreaseTime() {
    // setInterval(() => {
    //   if (this.quiz.time.seconds < 1) {
    //     this.quiz.time.seconds = 60
    //     this.quiz.time.minutes--
    //   }
    //   if (this.quiz.time.minutes < 1) {
    //     this.quiz.time.minutes = 59
    //     this.quiz.time.hours--
    //   }
    //   this.quiz.time.seconds--
    // }, 1000)
  }

}
