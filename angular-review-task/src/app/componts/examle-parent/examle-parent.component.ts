import { Component } from '@angular/core';

@Component({
  selector: 'app-examle-parent',
  templateUrl: './examle-parent.component.html',
  styleUrls: ['./examle-parent.component.scss']
})
export class ExamleParentComponent {

  email: any
  
  reciveData(event: any) {

    this.email = event
  }
}
