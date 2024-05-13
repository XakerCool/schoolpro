import {Component} from "@angular/core";
import { handleFileInput } from "../helper";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent {
  creatingPost = {
    image: {
      name: "none",
      size: 0
    },
    topic: "none",
    text: "none"
  }

  savePost() {
    const topicInput = document.getElementById("POSTTOPIC") as HTMLInputElement;
    const textInput = document.getElementById("POSTTEXT") as HTMLInputElement;

    const topic = topicInput.value;
    const text = textInput.value;

    this.creatingPost.topic = topic;
    this.creatingPost.text = text;

    console.log(this.creatingPost)
  }

  async changeImage(e: any) {
    const file = await handleFileInput(e)
    // @ts-ignore
    this.creatingPost.image.name = file.name;
    this.creatingPost.image.size = file.size;
  }
}
