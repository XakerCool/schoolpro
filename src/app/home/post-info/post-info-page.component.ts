import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-info-page',
  templateUrl: './post-info-page.component.html',
  styleUrls: ['./post-info-page.component.scss', './post-info-page-adaptive.component.scss']
})
export class PostInfoPageComponent implements OnInit{

  post = {
    title: "",
    content: "",
    image: ""
  }
  postId = -1
  secondsOnPage = 0

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.http.get('http://5.35.80.178:8000/'+this.postId+"/").subscribe(data => {
      const dataObj = data as any;
      this.post = dataObj.results;
      console.log(this.post)
    }, error => {
      console.error('Error:', error);
    });
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Страница поста",
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
