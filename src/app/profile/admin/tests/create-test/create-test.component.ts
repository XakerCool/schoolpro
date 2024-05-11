import { Component } from "@angular/core";

@Component({
  selector: 'app-admin-page-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent {
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  currentQuestionAnswers = [
    {},
    {},
    {},
    {}
  ]
}
