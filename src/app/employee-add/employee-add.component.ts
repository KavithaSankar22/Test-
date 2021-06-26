import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.services';
import { User } from '../service/user';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {


  user = new User();
  users: User[] = [];

  constructor(private apiservice: APIService) {
  }


  ngOnInit(): void {
  }
  enable() {
    if (this.user.name && this.user.job && this.user.name != "" && this.user.job != "") {
      return false;
    }
    return true;
  }
  submit() {
    if (this.user.id > 0) {
      this.apiservice.update(this.user, this.user.id).subscribe((res) => {
        var userobj = this.users.find(e => e.id == this.user.id);
        if (userobj) {
          userobj.name = res.name;
          userobj.job = res.job;
        }
        this.clear();
      });
    }
    else {
      this.apiservice.create(this.user).subscribe((res) => {
        this.users.push(res);
        this.clear();
      })
    }
  }
  clear() {
    this.user = new User();
  }
  edit(user: any) {
    if (user != undefined && user != null) {
      this.user.id = user.id;
      this.user.name = user.name;
      this.user.job = user.job;
    }
  }
  delete(id: number) {
    this.apiservice.delete(this.user.id).subscribe((res) => {
      this.users = this.users.filter(item => item.id !== id);
      console.log('deleted successfully!');
    })
  }
}