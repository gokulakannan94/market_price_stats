import { AfterViewInit, Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Records } from '../model/records';
import { Response } from '../model/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit  {
  
  loading: boolean = true;
  records: Records[] = [];
  result: Response;
  offset: number = 0;
  id: number[] = [];
  title: string = '';
  alertMessage = '';
  buttonText = 'Next';
  constructor(private commonService: CommonService) { 
    
  }
  
  nextPage():void{
    this.offset = this.offset+10;
    this.getDetails(this.offset);
  }

  getDetails(offset: number):void{
    this.commonService.getPriceDetails(offset).subscribe(
      res =>{
        this.result = res;
        this.title = this.result.title;
        this.result.records.forEach(
          record => this.records.push(record)
        );
        this.id.push(this.id.length + this.records.length);
        if(this.result.records.length == 0){
          this.buttonText = 'Over';
        }
        this.loading = false;
      },
      err =>{
        this.loading = false;
        console.log("something error!!!");
        this.alertMessage = 'something went wrong. Please try after some time!!!';
      }
    )
  }

  close(): void{
    this.alertMessage = '';
  }

  ngAfterViewInit (): void {  
    this.getDetails(this.offset);
  }
}
