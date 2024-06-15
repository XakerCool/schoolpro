import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', './home-page-adaptive.component.scss']
})
export class HomePageComponent implements OnInit{
  posts = [
    {
      id: -1,
      title: "",
      image: ""
    }
  ]
  secondsOnPage = 0
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.showAllPosts()
  }

  highlightSelectedCategory(category: any) {
    let allEls = Array.from(document.querySelectorAll(".home_page__content__categories__category"));
    allEls.forEach((item) => {
      item.classList.remove("selected")
    })

    let selectedEl = document.getElementById(category) as HTMLElement;
    selectedEl.classList.add("selected")
  }

  showAllPosts() {
    this.highlightSelectedCategory("cat_all")
    this.http.get('http://5.35.80.178:8000/').subscribe(data => {
      const dataObj = data as any;
      this.posts = dataObj.results;
      console.log(this.posts)
    }, error => {
      console.error('Error:', error);
    });
  }

  showInterestingPosts() {
    this.highlightSelectedCategory("cat_interesting")
    this.http.get('http://5.35.80.178:8000/popular_news/').subscribe(data => {
      const dataObj = data as any;
      this.posts = dataObj.results;
    }, error => {
      console.error('Error:', error);
    });
  }

  showSavedPosts() {
    this.highlightSelectedCategory("cat_saved")
    this.http.get('http://5.35.80.178:8000/featured_news/').subscribe(data => {
      const dataObj = data as any;
      this.posts = dataObj.results;
    }, error => {
      console.error('Error:', error);
    });
  }

  save(event: any, id: any) {
    if (!event.currentTarget.classList.contains("saved")) {
      event.currentTarget.classList.add("saved");
      this.http.post('http://5.35.80.178:8000/'+id+"/favorite/", {}, {}).subscribe(data => {
        console.log(data)
      }, error => {
        console.error('Error:', error);
      });
    }
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Главная страница (страница новостей)",
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
