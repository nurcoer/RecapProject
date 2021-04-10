import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/storages/localStorage/local.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import {User} from 'src/app/models/user/user';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
    filterText:string
    user:User
    userId:number

  constructor(
    private localStorageService: LocalService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.getUserDetail();
  }



  isAuthenticated(){
    this.getUserDetail();
    return this.authService.isAuthenticated()
  }

   getUserDetail(){
     
    this.userService.getUserById(this.userId).subscribe(response => {
      this.user = response.data;
    });
  }
  logOut(){
    this.localStorageService.clean();
    this.router.navigate([""])
  }

}
