import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filemanagement',
  templateUrl: './filemanagement.component.html',
  styleUrls: ['./filemanagement.component.css']
})
export class FilemanagementComponent implements OnInit {

  forms = <any>{};
  userlist = <any>[];
  jobseker;
  employer;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(){

    
    this.jobseker = false;
    this.employer = false;
    this.jobSeeker(1);
  }

  jobSeeker(uType){

    this.jobseker = true;
    this.employer = false;

    this.userlist = [];

    let user = {
      userType: uType,
    }

    const url = 'http://18.140.131.246:4300/api/user/allUserData';
    const headers1 = {'Content-Type':  'application/json',
    Accept: '*/*'};

    this.http.post(url, user, { headers: headers1 }).subscribe(
      (data) => {
        // this.loginUser.reset();
        // this.formSubmitted = false;
        console.log(data);
        this.userlist = data;
        console.log(this.userlist);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Employer(uType){

    this.jobseker = false;
    this.employer = true;

      this.userlist = [];
    let user = {
      userType: uType,
    }

    const url = 'http://18.140.131.246:4300/api/user/allUserData';
    const headers1 = {'Content-Type':  'application/json',
    Accept: '*/*'};

    this.http.post(url, user, { headers: headers1 }).subscribe(
      (data) => {
        // this.loginUser.reset();
        // this.formSubmitted = false;
        console.log(data);
        this.userlist = data;
        console.log(this.userlist);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  editData(id){

    localStorage.setItem('id',id);

    if(this.jobseker == true){
      this.router.navigate(['/filemanagement/JobSeeker']);
    }else{
      this.router.navigate(['/filemanagement/employer']);
    }

  }

  deleteData(id){
    alert('Under Process');
  }
}
