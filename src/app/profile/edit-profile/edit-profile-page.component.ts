import {Component, OnInit} from "@angular/core";
import {handleFileInput} from "../admin/posts/helper";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss', './edit-profile-page-adaptive.component.scss']
})
export class EditProfilePageComponent implements OnInit{
  user = {
    image: {
      name: "",
      size: 0
    },
    avatar: null,
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://5.35.80.178:8000/users/profile/").subscribe((res: any) => {
      this.user = res
    }, error => {
      console.error(error)
    })
  }

  updateProfile() {
    const fNameEl = document.getElementById("first_name") as HTMLInputElement;
    const lNameEl = document.getElementById("last_name") as HTMLInputElement;
    const emailEl = document.getElementById("email") as HTMLInputElement;
    const phoneEl = document.getElementById("phone") as HTMLInputElement;

    this.user.first_name = fNameEl.value;
    this.user.last_name = lNameEl.value;
    this.user.email = emailEl.value;
    this.user.phone = phoneEl.value;

    this.http.put("http://5.35.80.178:8000/users/profile/update/",
      {
        "first_name": this.user.first_name,
        "last_name": this.user.last_name,
        "email": this.user.email,
        "phone": this.user.phone,
        "avatar": this.user.avatar
      }
    ).subscribe((res: any) => {
      console.log(res)
    }, error => {
      console.error(error)
    })
  }

  protected readonly handleFileInput = handleFileInput;
  async changeAvatar(e: any) {
    const file = await handleFileInput(e)
    // @ts-ignore
    this.user.image.name = file.name;
    this.user.image.size = file.size;
    this.user.avatar = file;
  }
}
