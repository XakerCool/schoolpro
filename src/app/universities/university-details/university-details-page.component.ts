import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-university-details-component',
  templateUrl: './university-details-page.component.html',
  styleUrls: ['./university-details-page.component.scss', './university-details-page-adaptive.scss']
})
export class UniversityDetailsPageComponent implements OnInit{
  universities: any =[]
  university: any = []
  universityId = 0
  educationalPrograms: any = []
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.universityId = params['id'];
    });
    fetch('assets/universities_data.json')
      .then(response => response.json())
      .then(data => {
        this.universities.push(...data);
        this.university = this.universities.find((univ: { ID: any; }) => univ.ID == this.universityId)
        this.educationalPrograms.push({name: "Бакалавриат", programs: this.university.ed_programs["bachelor"]})
        this.educationalPrograms.push({name: "Магистратура", programs: this.university.ed_programs["magistracy"]})
        this.educationalPrograms.push({name: "Докторантура", programs: this.university.ed_programs["doctorate"]})
      })
      .catch(error => {
        console.error('Ошибка при чтении файла:', error);
    });
  }
}
