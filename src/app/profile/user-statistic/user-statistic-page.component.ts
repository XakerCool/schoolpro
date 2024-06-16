import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-statistic-page',
  templateUrl: './user-statistic-page.component.html',
  styleUrls: ['./user-statistic-page.component.scss', './user-statistic-page-adaptive.component.scss']
})
export class UserStatisticPageComponent implements OnInit{
  userStats: any
  secondsOnPage = 0
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.http.get("/api/users/profile/statistics/").subscribe((res: any) => {
      this.userStats = res
    })
  }
}
