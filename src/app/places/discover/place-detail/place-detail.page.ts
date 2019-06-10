import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {Place} from '../../place.model';
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from '../../places.service';
import {ModalOptions} from '@ionic/core'


@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    private place: Place;

    constructor(private modalCtrl: ModalController, private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            const placeId = paramMap.get('placeId');
            this.place = this.placesService.getPlace(placeId);
        })
    }

    onBookPlace() {
        this.modalCtrl.create(<ModalOptions>{
            component: CreateBookingComponent,
            componentProps: {
                selectedPlace: this.place
            }
        }).then(
            modalEl => {
                modalEl.present()
            }
        )
    }

}
