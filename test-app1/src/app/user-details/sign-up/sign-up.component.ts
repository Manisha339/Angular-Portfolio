import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  userForm!: FormGroup;
  @Output() clickEvent = new EventEmitter();
  formSubmitted: boolean=false;
  formControls: any;
  firstName1: any;
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileno: ['', [Validators.required, Validators.minLength(10)]],
      
    });
    this.formControls = this.userForm.controls;
  }
  handleFormSubmit() {
    this.formSubmitted = true;
    this.firstName1=this.userForm.get("firstName");
    if (this.userForm.invalid) {
      return;
    } else {
      alert("User Details Stored Sussessfully");
    }
  }
}
