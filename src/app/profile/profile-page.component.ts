import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss', './profile-page-adaptive.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    avatar: ""
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://5.35.80.178:8000/users/profile/').subscribe(data => {
      this.user = data as any;
    }, error => {
      console.error('Error:', error);
    });
  }

  logout() {
    this.http.post('http://5.35.80.178:8000/logout/', {}, {}).subscribe(data => {
      console.log(data)
    }, error => {
      console.error('Error:', error);
    });
  }
}
