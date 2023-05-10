import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examlechild',
  templateUrl: './examlechild.component.html',
  styleUrls: ['./examlechild.component.scss']
})
export class ExamlechildComponent {

  email:any
  @Output() sendData = new EventEmitter<any>();

  sendDatatoParent(){
    this.sendData.emit(this.email);
  }

}
