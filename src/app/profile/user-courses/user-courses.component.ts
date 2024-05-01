import {Component} from "@angular/core";
 @Component({
   selector: 'app-user-courses-page',
   templateUrl: './user-courses.component.html',
   styleUrls: ["./user-courses.component.scss"]
 })
export class UserCoursesPageComponent {
   userCourses = [
     {
       id: 1,
       courseName: "История РК",
       coursePrice: 12990,
       lessonsCount: 40,
       hours: 60,
       iconPath: "./assets/KZ.png",
       backgroundColor: "rgba(8, 106, 254, 1)"
     },
     {
       id: 2,
       courseName: "Математика",
       coursePrice: 12990,
       lessonsCount: 42,
       hours: 65,
       iconPath: "./assets/books.png",
       backgroundColor: "rgba(254, 8, 45, 1)",
     }
   ]
   constructor() {
   }
 }
