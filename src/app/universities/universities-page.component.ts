import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-universities-component',
  templateUrl: './universities-page.component.html',
  styleUrls: ['./universities-page.component.scss']
})
export class UniversitiesPageComponent implements OnInit{
  secondsOnPage = 0

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
  }
}
