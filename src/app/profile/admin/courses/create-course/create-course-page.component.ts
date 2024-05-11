import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-create-course-page-component',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.scss']
})
export class CreateCoursePageComponent implements OnInit {

  course = {}
  lessons = []

  ngOnInit() {
    this.showLessonInfo()
  }

  showLessonInfo() {
    window.addEventListener("load", () => {
      const lessonsElems = Array.from(document.getElementsByClassName("create_course__content__lessons__lesson"))
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
