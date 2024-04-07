import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage implements OnInit{

  constructor() {}

  ngOnInit() {
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

}
