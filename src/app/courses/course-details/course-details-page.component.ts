import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-course-details-component',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.scss', './course-details-page-adaptive.component.scss']
})
export class CourseDetailsPageComponent implements OnInit{

  courseId: any
  selectedCourse: any
  secondsOnPage = 0

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });

    this.http.get("http://5.35.80.178:8000/courses/courses/" + this.courseId).subscribe((res: any) => {
      this.selectedCourse = res;
    })
    this.http.get("http://5.35.80.178:8000/courses/"+this.selectedCourse.id+"/lessons/").subscribe((res: any) => {
      this.selectedCourse.lessons = res;
    })

    this.showLessonInfo()
  }

  showLessonInfo() {
    window.addEventListener("load", () => {
      const lessonsElems = Array.from(document.getElementsByClassName("course_details__content__lessons__lesson"))
      lessonsElems.forEach(lessonElem => {
        lessonElem.addEventListener("click", () => {
          lessonElem.children[1].classList.toggle("hidden")
          lessonElem.querySelector(".show_btn")?.classList.toggle("hidden")
          lessonElem.querySelector(".arrow_down")?.classList.toggle("hidden")
        })
      })
    })
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Страница детали курса",
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
