import { Component,Input } from '@angular/core';
import {Router} from "@angular/router";
import {DestinationService} from "../services/destination.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isChecked1!:boolean;
  isChecked2!:boolean;




  url!:string;
  constructor(private route:Router, public destinationss:DestinationService) {}
  ngOnInit(): void {

    this.destinationss.isChecked1=this.isChecked1;

    //console.log(this.isChecked2);



  }
  checkboxFunction() {
    let element1 = <HTMLInputElement>document.getElementById("defaultCheck1");
   let element2 = <HTMLInputElement>document.getElementById("defaultCheck2");




    this.isChecked1=element1.checked;

    this.destinationss.isChecked1=this.isChecked1;

    this.isChecked2=element2.checked;
    this.destinationss.isChecked2=this.isChecked2;
    //console.log(this.destinationss.isChecked2);










  }


}
