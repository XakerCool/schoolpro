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

}
