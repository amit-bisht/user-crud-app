import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any
  isLoading:boolean=false
  constructor(private userService:UserService) {
    
  }
  ngOnInit(): void {
    this.isLoading=true
    this.userService.fetchUsers().subscribe((responseData)=>{
      this.users=responseData
      console.log(this.users)
      this.isLoading=false
    },error=>{
      console.log(error)
    })
  }
  onAddUser(user){
    this.users['data'].push(user)
  }
  onUpdateUser(user){
    console.log(user)
    let objIndex = this.users.data.findIndex((obj => obj.id == user.id));
    if(objIndex){
      this.users.data[objIndex].first_name=user.first_name
      this.users.data[objIndex].last_name=user.last_name
      this.users.data[objIndex].email=user.email
      this.users.data[objIndex].avatar=user.avatar
    }
  }
}
