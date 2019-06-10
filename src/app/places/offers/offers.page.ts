import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../places.service';
import {Place} from '../place.model';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ItemSliding} from '../../../../node_modules/@ionic/core/dist/types/components/item-sliding/item-sliding';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
    offers: Place[];

    constructor(private placesService: PlacesService, private router:Router) {
    }

    ngOnInit() {
        this.offers = this.placesService.getPlaces()
    }

    onEdit(offerId: string, slidingItem: ItemSliding){
        slidingItem.close()
        this.router.navigateByUrl(`/places/tabs/offers/edit/${offerId}`)
    }
}
