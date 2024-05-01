import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {

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
  constructor() {
  }


}
