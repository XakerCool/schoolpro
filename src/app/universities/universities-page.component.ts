import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-universities-component',
  templateUrl: './universities-page.component.html',
  styleUrls: ['./universities-page.component.scss', './universities-page-adaptive.component.scss']
})
export class UniversitiesPageComponent implements OnInit{
  secondsOnPage = 0
  universities : any = []
  currentData: any = []
  // {
  //   "name": "",
  //   "region": "",
  //   "type": "",
  //   "address": "",
  //   "phone": "",
  //   "ed_programs": {
  //     "bachelor": [
  //       {
  //         "name": "",
  //         "url": ""
  //       }
  //     ],
  //     "magistracy": [
  //       {
  //         "name": "",
  //         "url": ""
  //       }
  //     ],
  //     "doctorate": [
  //       {
  //         "name": "",
  //         "url": ""
  //       }
  //     ]
  //   }
  // }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    fetch('assets/universities_data.json')
      .then(response => response.json())
      .then(data => {
        this.universities.push(...data);
        this.currentData = this.universities;
      })
      .catch(error => {
        console.error('Ошибка при чтении файла:', error);
    });
  }

  findUniversities(event: any) {
    const uName = event.currentTarget.value;

    // @ts-ignore
    this.currentData = this.universities.filter((univ: { name: string; }) => {
      if (univ.name?.toLowerCase().includes(uName.toLowerCase()))
        return univ;
    });
  }

}
