import {Component, input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-verification',
  templateUrl: 'verification.page.html',
  styleUrls: ['verification.page.scss']
})
export class VerificationPage implements OnInit {
  secondsOnPage = 0
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.moveToNextInput()
    // this.login("123456")
  }

  moveToNextInput() {
    const loginBtn = document.getElementById("login_btn") as HTMLInputElement

    const inputs = Array.from(document.getElementsByClassName("code_input"))
    inputs.forEach(input => {
      input.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement
        let index = inputs.indexOf(input)
        if (target.value.length > 1) {
          target.value = target.value.slice(0, 1);
        }
        if (/\d/.test(target.value)) {
          if (index >= 0 && index < 5) {
            index++
            let nextInput = inputs[index] as HTMLInputElement;
            nextInput.focus()
          }
        }

        if (inputs.every(input => {
          const inpt = input as HTMLInputElement
          return inpt.value !== '';
        })) {
          loginBtn.removeAttribute("disabled")
          loginBtn.classList.remove("disabled")
        }
      })

      input.addEventListener("keydown", (event) => {
        const keyboardEvent = event as KeyboardEvent;
        const target = event.target as HTMLInputElement
        let index = inputs.indexOf(input)
        if (keyboardEvent.key === "Backspace") {
          loginBtn.setAttribute('disabled', 'true');
          loginBtn.classList.add("disabled")
        }
        if (keyboardEvent.key === "Backspace" && target.value === "") {
          if (index > 0 && index <= 5) {
            index--
            const prevInput = inputs[index] as HTMLInputElement;
            prevInput.focus();
          }
        }
      })
    })
  }

  parseVerificationCode() {
    const verCodeElements = Array.from(document.getElementsByClassName("code_input"));
    let verificationCode = "";
    verCodeElements.forEach((item) => {
      const elem = item as HTMLInputElement;
      verificationCode += elem.value;
    })
    console.log(verificationCode)
    return verificationCode;
  }

  login() {
    const verificationCode = this.parseVerificationCode();
    const loginBtn = document.getElementById("login_btn")
    const text = document.getElementById("verification_page__text")

    const userId = 1;

    loginBtn?.addEventListener("click", () => {
      const inputs = Array.from(document.getElementsByClassName("code_input"))

      let inputCode = ""
      inputs.forEach(input => {
        let inpt = input as HTMLInputElement
        inputCode += inpt.value
      })

      if (inputCode !== verificationCode) {
        if (text) {
          text.innerHTML = ""
          text.append("Вы ввели неправильный код")
          text.append(document.createElement("br"))
          text.append("Попробуйте ещё раз!")
          text.style.color = "red"
        }
      } else {
        if (text) {
          text.innerHTML = ""
          text.append("Введите код, который")
          text.append(document.createElement("br"))
          text.append("мы отправили вам")
          text.style.color = "black"
        } else {
          this.http.post("/api/verify-account/",
            {
              "code": verificationCode,
              "user_id": userId
            },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).subscribe((res: any) => {
            console.log(res)
          })
        }
      }
    })
  }
}
