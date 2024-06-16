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
      title: "История РК",
      coursePrice: 12990,
      lessonsCount: 40,
      hours: 60,
      iconPath: "./assets/KZ.png",
      backgroundColor: "rgba(8, 106, 254, 1)",
      rating: 5.0,
      lessons: [
        {
          title: "бла бла бла",
          video_url: "nenaebkayoutube.com",
          homework_url: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          video_url: "nenaebkayoutube.com",
          homework_url: "dzsuka1urok"
        },
        {
          name: "хз",
          video_url: "nenaebkayoutube.com",
          homework_url: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          video_url: "nenaebkayoutube.com",
          homework_url: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          video_url: "nenaebkayoutube.com",
          homework_url: "dzsuka1urok"
        },
      ]
    }
  ]
  secondsOnPage = 0
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.http.get("/api/courses/courses/").subscribe((res: any) => {
      console.log(res)
      this.courses = res
    })
  }
}
