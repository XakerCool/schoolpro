import {Component, OnInit} from "@angular/core";
import {handleFileInput} from "../admin/posts/helper";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

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
  secondsOnPage = 0
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.http.get("/api/users/profile/").subscribe((res: any) => {
      this.user = res
      console.log(res)
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

    this.http.put("/api/users/profile/update/",
      {
        "first_name": this.user.first_name || "",
        "last_name": this.user.last_name || "",
        "email": this.user.email || "",
        "phone": this.user.phone || "",
        // "avatar": this.user.avatar || null
      }
    ).subscribe((res: any) => {
      console.log(res)
      if (res.status == 200 || res.message == "Профиль успешно обновлен") {
        alert("Профиль успещно обновлен")
        this.router.navigate(["/api/users/"])
      } else if (res.status == 400) {
        alert("Данные введены некорректно!")
      } else {
        alert("Упс, что-то пошло не так")
      }
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
    // this.user.avatar = file;
  }

}
