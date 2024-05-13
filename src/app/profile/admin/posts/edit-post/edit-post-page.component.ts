import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {handleFileInput} from "../helper";

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
      postImg: {
        name: 'post-banner.png',
        size: 0
      },
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
    {
      id: 2,
      postName: "Марафон PRO|По Истории",
      postImg: {
        name: 'post-banner.png',
        size: 0
      },
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
    {
      id: 3,
      postName: "Марафон PRO|По Истории",
      postImg: {
        name: 'post-banner.png',
        size: 0
      },
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
    {
      id: 4,
      postName: "Марафон PRO|По Истории",
      postImg: {
        name: 'post-banner.png',
        size: 0
      },
      postText: "asdasdasdaddasdasdasdasddasdasdasdasdasdadasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    },
  ]

  editingPost = {
    id: 0,
    postName: "none",
    postImg: {
      name: "",
      size: 0
    },
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

  saveChanges() {
    const topicInput = document.getElementById("POSTTOPIC") as HTMLInputElement;
    const textInput = document.getElementById("POSTTEXT") as HTMLInputElement;

    const topic = topicInput.value;
    const text = textInput.value;

    this.editingPost.postName = topic;
    this.editingPost.postText = text;

    console.log(this.editingPost)
  }

  async changeImage(e: any) {
    const imageFile = await handleFileInput(e);
    if (imageFile) {
      const imagePath = URL.createObjectURL(imageFile);
      const imgElement = document.getElementById("picked_photo") as HTMLImageElement;
      imgElement.src = imagePath;
      this.editingPost.postImg.name = imageFile.name;
      this.editingPost.postImg.size = imageFile.size;
    } else {
      console.log("No image file selected");
    }
  }
}
