import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  loading = false;
  buttionText = "Submit";

  constructor(private http: HttpService, private httpNew: HttpClient) { }

  ngOnInit() {
  }

  register(form) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `${user.name} Ha enviado un email`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }

  onSubmit(form){
    console.log("in",form);
    this.httpNew.post('https://cors-anywhere.herokuapp.com/https://formcarry.com/s/E5m1S33CTvT', {
          name: form.value.name,
          email: form.value.email,
          message: form.value.message
        },{responseType: 'text'})
        .subscribe(x => console.log('vea ',x));
  }

}
