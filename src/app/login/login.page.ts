import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = true;
  register: false;

  constructor(private ds: DataService, private us: UserService, private nav: NavController) { }

  ngOnInit() {
    // const userDetails = JSON.parse(localStorage.getItem('woodworks_userdetails'));
    // console.log('login', userDetails);
    // if (userDetails != null) {
    //   this.us.setUserDetails(JSON.stringify(userDetails)).then(() => {
    //     alert('you are already logged in');
    //     this.nav.navigateForward('/products');
    //   });
    // }
  }

  Register(e) {
    e.preventDefault();

    const body = new URLSearchParams();
    body.set('username', e.target.elements[0].value);
    body.set('email', e.target.elements[1].value);
    body.set('password', e.target.elements[2].value);

    this.ds.auth('/auth/local/register', body.toString()).subscribe(
      successDetails => {
        localStorage.setItem('woodworks_userdetails', JSON.stringify(successDetails));
        this.us.setUserDetails(successDetails).then(() => {
          alert('register success');
          this.nav.navigateForward('/products');
        });

      },
      errorDetails => {
        alert('Error code: ' + errorDetails.error.statusCode);
      }
    );
  }

  Login(e) {
    e.preventDefault();

    const body = new URLSearchParams();
    body.set('identifier', e.target.elements[0].value);
    body.set('password', e.target.elements[1].value);

    this.ds.auth('/auth/local', body.toString()).subscribe(
      successDetails => {
        localStorage.setItem('woodworks_userdetails', JSON.stringify(successDetails));
        this.us.setUserDetails(successDetails).then(() => {

          alert('login success');
          this.nav.navigateForward('/products');
        });

      },
      errorDetails => {
        alert('Error code: ' + errorDetails.error.statusCode);
      }
    );
  }

}
