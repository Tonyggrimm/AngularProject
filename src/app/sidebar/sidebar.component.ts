import { Component} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private router :Router){

  }



refresh(continent:number):void{
  this.router.navigateByUrl('alldestinations')
    .then(()=>{this.router.navigateByUrl('continent-destinations/'+continent)})
}


}

