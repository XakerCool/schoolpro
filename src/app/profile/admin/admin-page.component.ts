import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-admin-page-component',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss', './admin-page-adaptive.component.scss']
})
export class AdminPageComponent implements OnInit{
  secondsOnPage = 0

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
  }
}
