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
  constructor(private commonService: CommonService) { 
    this.getDetails(this.offset);
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
        this.loading = false;
      },
      err =>{
        console.log("something error!!!");
      }
    )
  }

  ngAfterViewInit (): void {  
    
  }
}
