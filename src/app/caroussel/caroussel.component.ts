import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
})
export class CarousselComponent {
  images = ['../../assets/slideshows/SudAfrica2.jpg','../../assets/slideshows/bolivie.jpg','../assets/slideshows/kenia.jpg' , '../../assets/slideshows/Melborne.jpg','../../assets/slideshows/TajMahalIndia.jpg','../../assets/slideshows/IsaaksquareRussie.jpg', '../../assets/slideshows/AsiaChureitoPagoda.jpg','../../assets/slideshows/ParisFrance.jpg']


}
