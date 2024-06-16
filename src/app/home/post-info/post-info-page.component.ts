import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

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

  constructor(private http: HttpClient, private route: ActivatedRoute, private cookieService: CookieService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    setTimeout(() => {
      this.logTime()
    }, 20000)
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });

    this.http.get('/api/'+this.postId+"/").subscribe(data => {
      const dataObj = data as any;
      this.post = dataObj.results;
      console.log(this.post)
    }, error => {
      console.error('Error:', error);
    });
  }
  logTime() {
    const userId = getCookie('user_id');
    if (!userId) {
      console.error('User ID not found in cookies');
      return;
    }

    this.http.post("/api/log_time/",
      {
        "action": `User: ${userId}: Страница викторины`,
        "duration": this.secondsOnPage
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).subscribe((res: any) => {
      console.log(res);
    }, (error) => {
      console.error('Error logging time:', error);
    });
  }
}
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  }
  return null;
}
