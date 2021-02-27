import { getLocaleDirection } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Marketpricestats';
  mailString:string;
  systemIP:[];
  ip:string;

  constructor(private commonService: CommonService){}

  ngOnInit(){
    this.commonService.getSystemDetails().subscribe(
      res =>{
       this.systemIP = JSON.parse(JSON.stringify(res));
       this.ip = this.systemIP['ip'];
      },
      err =>{
        this.ip = 'Error while retrieving System IP';
      }
    );
    this.commonService.getWeatherDetails().subscribe(
      test =>{
        console.log("HI = "+test);
      },
      err =>{
        console.log("Error "+err);
      }
    );
  }

  ngAfterViewInit(){
    this.getLocationCoordinates();
  }

  getLocationCoordinates(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        pos =>{
          console.log("Latitide "+pos.coords.latitude);
          console.log("Longitude "+pos.coords.longitude);
        }
      )
    }
  }

  mailTo():void{
    this.mailString ="mailto:gokulakannan1151@gmail.com"+
    "?cc="+
    "&subject=" + encodeURI("Mail from Marketprice stats page")+
    "&body=" + encodeURI("IP of the system is "+this.ip);
    window.location.href = this.mailString;
  }
}
