import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
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

    constructor(private modalCtrl: ModalController,
                private route: ActivatedRoute,
                private navCtrl: NavController,
                private placesService: PlacesService,
                private actionSheetCtrl: ActionSheetController) {
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
        this.actionSheetCtrl.create({
            header: 'Choose Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => {
                        this.showBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.showBookingModal('random')
                    }
                },

                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).then(actionSheetEl => {
            actionSheetEl.present()
        })

    }

    showBookingModal(mode: 'select' | 'random') {
        console.log(mode)
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
