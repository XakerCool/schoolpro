import { Component } from "@angular/core";

@Component({
  selector: 'app-admin-page-posts',
  templateUrl: './admin-page-posts.component.html',
  styleUrls: ['./admin-page-posts.component.scss']
})
export class AdminPagePostsComponent {
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
}
