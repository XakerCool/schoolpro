import { Component } from "@angular/core";

@Component({
  selector: 'app-admin-page-tests',
  templateUrl: './admin-page-tests.component.html',
  styleUrls: ['./admin-page-tests.component.scss']
})
export class AdminPageTestsComponent {
  existingTests = [
    {
      id: 1,
      img: './assets/KZ.png',
      testName: "История КЗ",
      backgroundColor: '#086AFE'
    },
    {
      id: 2,
      img: './assets/books.png',
      testName: "Математика",
      backgroundColor: '#FE082D'
    },
    {
      id: 3,
      img: './assets/telescope.png',
      testName: "Физика",
      backgroundColor: '#57FE08'
    },
    {
      id: 4,
      img: './assets/telescope.png',
      testName: "Физика",
      backgroundColor: '#57FE08'
    }
  ]
}
