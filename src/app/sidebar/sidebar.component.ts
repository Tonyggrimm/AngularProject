import { Component} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private router :Router){}


//function, that is used to avoid the issue, of sameUrlNavigation not working as needed
refresh(continent:number):void{
  this.router.navigateByUrl('alldestinations')
    .then(()=>{this.router.navigateByUrl('continent-destinations/'+continent)})
}


}

