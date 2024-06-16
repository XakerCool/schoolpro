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
  secondsOnPage = 0

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsOnPage++
    }, 1000)
    this.http.get('/api/users/profile/').subscribe(data => {
      this.user = data as any;
    }, error => {
      console.error('Error:', error);
    });
  }

  logout() {
    this.http.post('/api/logout/', {}, {}).subscribe(data => {
      console.log(data)
    }, error => {
      console.error('Error:', error);
    });
  }
}
