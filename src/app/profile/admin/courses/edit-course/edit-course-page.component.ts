import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-course-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit{
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
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          lessonLink: "nenaebkayoutube.com",
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
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          lessonLink: "nenaebkayoutube.com",
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
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "здесь что-то умное",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "хз",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "Отрицание",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
        {
          name: "ахаххаыхахзхаыф",
          lessonLink: "nenaebkayoutube.com",
          hw: "dzsuka1urok"
        },
      ]
    },
  ]

  courseId: any
  selectedCourse: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.selectedCourse = this.courses.find(course => course.id == this.courseId)
    });
    this.showLessonInfo()
  }

  showLessonInfo() {
    window.addEventListener("load", () => {
      const lessonsElems = Array.from(document.getElementsByClassName("edit_course__content__lessons__lesson"))
      lessonsElems.forEach(lessonElem => {
        lessonElem.addEventListener("click", (e) => {
          // @ts-ignore
          if (e.target.tagName.toLowerCase() !== 'input') {
            lessonElem.children[1].classList.toggle("hidden")
            lessonElem.querySelector(".show_btn")?.classList.toggle("hidden")
            lessonElem.querySelector(".arrow_down")?.classList.toggle("hidden")
          }
        })
      })
    })
  }
}
