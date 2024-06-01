import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-buy-courses-page-component',
  templateUrl: './buy-courses-page.component.html',
  styleUrls: ['./buy-courses-page.component.scss', './buy-courses-page-adaptive.component.scss']
})
export class BuyCoursesComponent implements OnInit{
  secondsOnPage = 0

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Вводная страница покупки курсов",
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
