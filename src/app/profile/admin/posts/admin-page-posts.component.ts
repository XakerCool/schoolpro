import {Component, OnInit} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-admin-page-posts',
  templateUrl: './admin-page-posts.component.html',
  styleUrls: ['./admin-page-posts.component.scss', './admin-page-posts-adaptive.component.scss']
})
export class AdminPagePostsComponent implements OnInit{
  existingPosts = [
    {
      id: 1,
      postName: "Марафон PRO|По Истории",
      postImg: './assets/post-banner.png',
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
    {
      id: 2,
      postName: "Марафон PRO|По Истории",
      postImg: './assets/post-banner.png',
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
    {
      id: 3,
      postName: "Марафон PRO|По Истории",
      postImg: './assets/post-banner.png',
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
    {
      id: 4,
      postName: "Марафон PRO|По Истории",
      postImg: './assets/post-banner.png',
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
  ]
  secondsOnPage = 0

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.http.get('http://5.35.80.178:8000/manage/news/').subscribe(data => {
      const dataObj = data as any;
      this.existingPosts = dataObj.results;
    }, error => {
      console.error('Error:', error);
    });
  }

}
