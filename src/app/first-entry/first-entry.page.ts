import {Component, OnInit} from "@angular/core"

@Component({
  selector: "app-first-entry",
  templateUrl: "first-entry.page.html",
  styleUrls: ["first-entry.page.scss"]
})
export class FirstEntryPage implements OnInit{
  constructor() {}

  ngOnInit(): void {
    this.changePage()
  }

  changePage() {
    const page1 = document.getElementById("page1")
    const page2 = document.getElementById("page2")
    const page3 = document.getElementById("page3")

    const pages = [page1, page2, page3]

    const nextBtns = Array.from(document.getElementsByClassName("first_entry__next_button"))
    const prevBtns = Array.from(document.getElementsByClassName("first_entry__prev_button"))

    let index = 0

    nextBtns.forEach(nextBtn => {
      nextBtn?.addEventListener("click", () => {
        index++
        if (index >= 3) {
          index = 2
        }
        pages.forEach(page => {
          page?.classList.add("hidden")
        })
        pages[index]?.classList.remove("hidden")
      })
    })
    prevBtns.forEach(prevBtn => {
      prevBtn?.addEventListener("click", () => {
        index--;
        if (index <= -1) {
          index = 0
        }
        pages.forEach(page => {
          page?.classList.add("hidden")
        })
        pages[index]?.classList.remove("hidden")
      })
    })
  }
}
