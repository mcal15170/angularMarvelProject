import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

  ngOnInit() {
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;

    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    }


    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData


      }
    );
  }

  signOut() {
  //  localstorage
  localStorage.removeItem("oauth2_ss::http://localhost:4200::1::DEFAULT::_ss_")
  }



}
