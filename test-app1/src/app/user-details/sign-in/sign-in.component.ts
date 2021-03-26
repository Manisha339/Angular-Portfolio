import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userName: any;

  constructor() { }
  @Output() clickEvent = new EventEmitter();
  ngOnInit(): void {
  }
  handleuserName (event: any){
    console.log(event.target.value);
    this.userName=event.target.value;
  }
  handlepassword (event: any){
    console.log(event.target.value);
  }
  handleFormClick (event: any){
    console.log(event);
    alert("Logged In By "+this.userName);
}
}