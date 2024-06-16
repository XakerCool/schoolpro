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
  selectedCourse = {
    id : 0,
    title: "",
    content: "",
    available: 0,
    lessons: [
      {
        title: "",
        video_url: "",
        homework_url: "",
        is_trial: false,
      }
    ]
  }
  secondsOnPage = 0

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    setTimeout(() => {
      this.logTime()
    }, 20000)
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });

    this.http.get("/api/courses/courses/" + this.courseId+"/").subscribe((res: any) => {
      this.selectedCourse = res;
      this.http.get("/api/courses/courses/"+this.selectedCourse.id+"/lessons/").subscribe((res: any) => {
        this.selectedCourse.lessons = res;
        this.selectedCourse.available = 0;
        this.selectedCourse.lessons.forEach(lesson => {
          if (lesson.is_trial)
            this.selectedCourse.available++;
        })
        this.showLessonInfo()
      })
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
}
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  }
  return null;
}
