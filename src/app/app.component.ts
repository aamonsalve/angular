import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private spinnerService: NgxSpinnerService){}


  ngOnInit(){
    this.spinner();
  }

spinner():void{
  this.spinnerService.show();
  setTimeout(()=>{
    this.spinnerService.hide();

  }, 2000);
}

}
