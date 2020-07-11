import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  forms = <any>{};
  datas = <any>{};
  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {

    let uid = localStorage.getItem('id');
    this.getDetail(uid);
  }

  getDetail(uid){
    let user = {
      user_id: uid,
    }
    // http://localhost:5000/api/user/user/getAlluser?user_id=5ee0c95f5cd6402decc2792f
    const url = 'http://18.140.131.246:4300/api/user/user/getAlluser';
    const headers1 = {'Content-Type':  'application/json',
    Accept: '*/*'};

    this.http.post(url, user, { headers: headers1 }).subscribe(
      (data) => {
        // this.loginUser.reset();
        // this.formSubmitted = false;
        // console.log(data.data[0]);
        this.datas = data;
        // console.log(this.datas);
        this.forms = this.datas.data[0];
        // console.log(this.forms);
        // console.log(this.forms);
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
