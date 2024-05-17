import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-policy-page',
  templateUrl: './policy-page.component.html',
  styleUrls: ['./policy-page.component.scss', './policy-page-adaptive.component.scss']
})
export class PolicyPageComponent implements OnInit{
  secondsOnPage = 0
  constructor() {
  }
  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
  }
}
