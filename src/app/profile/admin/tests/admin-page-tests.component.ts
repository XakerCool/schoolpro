import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-page-tests',
  templateUrl: './admin-page-tests.component.html',
  styleUrls: ['./admin-page-tests.component.scss', './admin-page-tests-adaptive.component.scss']
})
export class AdminPageTestsComponent implements OnInit{
  secondsOnPage = 0
  existingTests = [
    {
      id: 1,
      img: './assets/KZ.png',
      testName: "История КЗ",
      backgroundColor: '#086AFE'
    },
    {
      id: 2,
      img: './assets/books.png',
      testName: "Математика",
      backgroundColor: '#FE082D'
    },
    {
      id: 3,
      img: './assets/telescope.png',
      testName: "Физика",
      backgroundColor: '#57FE08'
    },
    {
      id: 4,
      img: './assets/telescope.png',
      testName: "Физика",
      backgroundColor: '#57FE08'
    }
  ]

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
        "action": "Страница админа с тестами",
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
