import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string;
  name: string;
  message: string;
  categories: string;
  endpoint: string;
  showForm:boolean = true;

  http: HttpClient;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(http: HttpClient, private router: Router,) {
    
    this.http = http;
  }

  formContact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(new RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"))]),
    phone: new FormControl('', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]),
    body: new FormControl('', Validators.required),
    categories: new FormControl('', Validators.required)
  });

  get f() {
    return this.formContact.controls;
  }

  ngOnInit() {
    this.endpoint = "https://expert-conta.ro/data/sendEmail.php";
    this.formContact.reset();
    console.log(this.formContact)
  }

  submit() {
   
    let postVars = {
      email: this.formContact.value.email,
      name: this.formContact.value.name,
      phone: this.formContact.value.phone,
      categories: this.formContact.value.categories,
      body: this.formContact.value.body,
    };

  
    
    this.http.post(this.endpoint, postVars)
      .subscribe(
        response => {
         
          
          window.location.href = 'https://expert-conta.ro/mesaj-trimis'
          
          //this.router.navigate(['/mesaj-trimis']);
        }
        
      )

  }

}
