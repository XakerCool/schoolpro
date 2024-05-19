import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss', './lesson-adaptive.component.scss']
})
export class LessonComponent {
  @Input() lesson: any;

  constructor() { }

}
