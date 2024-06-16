import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'tarifs-page-component',
  templateUrl: './tarifs-page.component.html',
  styleUrls: ['./tarifs-page.component.scss', './tarifs-page-adaptive.component.scss']
})
export class TarifsPageComponent implements OnInit{
  secondsOnPage = 0
  courses = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.http.get("")
  }

  purchaseCourse(courseId: any) {
    this.http.post("/api/purchase-course/",
      {
        "course_id": courseId
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).subscribe((res: any) => {
      console.log(res)
    })
  }

}
