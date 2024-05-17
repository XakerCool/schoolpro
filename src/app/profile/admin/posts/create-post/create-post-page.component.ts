import {Component} from "@angular/core";
import { handleFileInput } from "../helper";
import {HttpClient} from "@angular/common/http";

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
    text: "none",
    imageAsFile: null
  }

  constructor(private http: HttpClient) {
  }

  savePost() {
    const topicInput = document.getElementById("POSTTOPIC") as HTMLInputElement;
    const textInput = document.getElementById("POSTTEXT") as HTMLInputElement;

    const topic = topicInput.value;
    const text = textInput.value;

    this.creatingPost.topic = topic;
    this.creatingPost.text = text;

    this.http.post("http://5.35.80.178:8000/manage/news/",
      {
        "title": this.creatingPost.topic,
        "description": this.creatingPost.text,
        "image": this.creatingPost.imageAsFile
      }
    ).subscribe((res: any) => {
      console.log(res)
    }, error => {
      console.error(error)
    })

    console.log(this.creatingPost)
  }

  async changeImage(e: any) {
    const file = await handleFileInput(e)
    // @ts-ignore
    this.creatingPost.image.name = file.name;
    this.creatingPost.image.size = file.size;
    this.creatingPost.imageAsFile = file;
  }
}
