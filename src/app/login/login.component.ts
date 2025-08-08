import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DirectorService } from '../services/director.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })
  router=inject(Router);
  constructor(private directorservice:DirectorService){

  }
  onSubmit() {
    // if (this.loginForm.valid) {
    //   console.log('Form submitted:', this.loginForm.value);
    //   this.router.navigateByUrl("dashboard")

    // }else{
    //   alert('wrong Credential')
    // }
    this.directorservice.postLoginData(this.loginForm.value).subscribe({
      next:(res:any)=>{
        console.log("hi",res);
        localStorage.setItem("loginUser",res.access_token)
        this.router.navigateByUrl("dashboard");
        
      }, error: (error) =>{
        alert('wrong Credential')
      }
      
    })
  }
}
