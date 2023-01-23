import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Output() newUpdateUserEvent=new EventEmitter<any>()
  constructor(private modalService:NgbModal){}
  closeResult: string;
  @Input() user:any
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  close(){
    this.modalService.dismissAll()
  }
  onSubmit(form:NgForm){
    const userInfo={
      'id':this.user.id,
      'first_name':form.value['first-name'],
      'last_name':form.value['last-name'],
      'email':form.value['email'],
      'avatar':form.value['avatar']
    }
    this.newUpdateUserEvent.emit(userInfo)
    this.close()
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
