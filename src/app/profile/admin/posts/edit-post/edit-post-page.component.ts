import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
  styleUrls: ['./edit-post-page.component.scss']
})
export class EditPostPageComponent implements OnInit{
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

  editingPost = {
    id: 0,
    postName: "none",
    postImg: 'none',
    postText: "none"
  }
  postId = 0
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      // @ts-ignore
      this.editingPost = this.existingPosts.find(post => post.id == this.postId)
    });
  }

}
