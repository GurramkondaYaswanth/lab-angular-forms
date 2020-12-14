import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {

  RegisterForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.RegisterForm = new FormGroup({
        firstName: new FormControl('', [Validators.minLength(3), Validators.required]),
        lastName: new FormControl('', [Validators.minLength(3), Validators.required]),
        email: new FormControl('', [Validators.required,Validators.pattern("[^ @]*@[^ @]*"),Validators.email]),
        password: new FormControl('', [Validators.minLength(6), Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")])
    });
  }
  



  onSubmit() {
    this.submitted = true;
    // if (this.RegisterForm.invalid) {
    //   alert('check ur details')
    //   return;
    // }
    // display form values on success  ,Validators.pattern("[^ @]*@[^ @]*") ,Validators.email
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RegisterForm.value, null, 3));
    console.log(JSON.stringify(this.RegisterForm.value));
  }

  onReset() {
    this.submitted = false;
    this.RegisterForm.reset();
  }

}
