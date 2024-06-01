import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss', './register-page-adaptive.component.scss']
})
export class RegisterPage implements OnInit{
  secondsOnPage = 0
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.switchEntry();
  }

  switchEntry() {
    const reg = document.getElementById("register")
    const regInput = document.getElementById("reg_input")

    const login = document.getElementById("login")
    const logInput = document.getElementById("log_input")

    reg?.addEventListener("click", () => {
      regInput?.classList.remove("hidden")
      logInput?.classList.add("hidden")
      reg.classList.add("selected")
      login?.classList.remove("selected")
    })

    login?.addEventListener("click", () => {
      regInput?.classList.add("hidden")
      logInput?.classList.remove("hidden")
      reg?.classList.remove("selected")
      login?.classList.add("selected")
    })
  }

  login() {
    const passwordElem = document.getElementById("password") as HTMLInputElement;
    const credentialsElem = document.getElementById("email_phone_num") as HTMLInputElement;

    const password = passwordElem.value;
    const credentials = credentialsElem.value;

    this.http.post('http://5.35.80.178:8000/login/',
{
        email: credentials,
        password: password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).subscribe((res: any) => {
      if (res.message.toLowerCase() == "Login successful".toLowerCase()) {
        this.router.navigate(['/home/']);
      }
    })
  }

  register() {
    const passwordElem = document.getElementById("password") as HTMLInputElement;
    const credentialsElem = document.getElementById("email_phone_num") as HTMLInputElement;

    const password = passwordElem.value;
    const credentials = credentialsElem.value;

    this.http.post('http://5.35.80.178:8000/register/',
      {
        email: credentials,
        phone: '',
        password: password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).subscribe((res: any) => {
      if (res.message.toLowerCase() == "User created successfully. Please verify your account.".toLowerCase()) {
        this.router.navigate(['/verification/']);
      }
    })
  }

  resetPassword() {
    const credentialsElem = document.getElementById("email_phone_num") as HTMLInputElement;

    this.http.post("http://5.35.80.178:8000/reset-password/",
      {
       'email': credentialsElem
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }).subscribe((res: any) => {
      console.log(res)
    })
  }

  async ionViewWillLeave() {
    this.http.post("http://5.35.80.178:8000/log_time/",
      {
        "action": "Страница регистрации",
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
