import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userData! : FormGroup;

  allData: any ;

  role: String = "user"

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.userData = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("([A-Z][a-zA-Z]{2,})")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.allData = {
      name: this.userData.value.name,
      email: this.userData.value.email,
      password: this.userData.value.password
    }
  }


  submitData(){
    if (this.userData.valid){
      console.log("All Data", this.userData.value);



      this.allData = {
        name: this.userData.value.name,
        email: this.userData.value.email,
        password: this.userData.value.password
      }
    }
  }

  // switchRole() {
  //   if(this.role === "user"){
  //     this.role = "admin"
  //   }else {
  //     this.role = "user"
  //   }
  // }


}
