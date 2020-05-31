import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isExpanded = false;
  authority: number;
  username: string;
  lang:string;
  requestCount:number;
  userId:number;
  isLoggedIn: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,public storage:Storage,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.storage.get('username').then(res => {
        if(res!=null){
        if (res.length>0) {
          this.username=res;
          this.isLoggedIn=true;
        }
        this.storage.get('userid').then(resid => {
  this.userId=resid;
        })
        this.storage.get('authority').then(resa => {
          this.authority=resa;

                })
              }
      });
    
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }
  logout(){ 
    this.storage.clear();
    this.router.navigate(['/login'])
  }
}
