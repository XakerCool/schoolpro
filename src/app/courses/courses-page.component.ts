import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss', './courses-page-adaptive.component.scss']
})
export class CoursesPageComponent implements OnInit{

  courses = [
    {
      id: 1,
      courseName: "История РК",
      coursePrice: 12990,
      lessonsCount: 40,
      hours: 60,
      iconPath: "./assets/KZ.png",
      backgroundColor: "rgba(8, 106, 254, 1)",
      rating: 5.0,
      lessons: [
        {
          name: "бла бла бла",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
      ]
    },
    {
      id: 2,
      courseName: "Математика",
      coursePrice: 12990,
      lessonsCount: 42,
      hours: 65,
      iconPath: "./assets/books.png",
      backgroundColor: "rgba(254, 8, 45, 1)",
      rating: 5.0,
      lessons: [
        {
          name: "бла бла бла",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
      ]
    },
    {
      id: 3,
      courseName: "Физика",
      coursePrice: 12990,
      lessonsCount: 52,
      hours: 78,
      iconPath: "./assets/telescope.png",
      backgroundColor: "rgba(87, 254, 8, 1)",
      rating: 5.0,
      lessons: [
        {
          name: "бла бла бла",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          videoLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
      ]
    },
  ]
  secondsOnPage = 0
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.http.get("http://5.35.80.178:8000/courses/courses/").subscribe((res: any) => {
      console.log(res)
      this.courses = res
    })
  }
  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Страница курсов",
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
