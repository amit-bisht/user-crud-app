import { Component,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() newAddUserEvent=new EventEmitter<any>()
  onSubmit(form:NgForm){
    const userInfo={
      'first_name':form.value['first-name'],
      'last_name':form.value['last-name'],
      'email':form.value['email'],
      'avatar':form.value['avatar'] ? form.value['avatar'] : null 
    }
    console.log(form.value)
    this.newAddUserEvent.emit(userInfo)
    form.reset()
  }
}
