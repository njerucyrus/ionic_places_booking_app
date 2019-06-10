import {Injectable} from '@angular/core';
import {Booking} from './booking.model';

@Injectable({
    providedIn: 'root'
})
export class BookingService {


    private _bookings: Booking[] = [
        new Booking(
            "xyz",
            "p2",
            "abc",
            "Paris",
            2
        )
    ];

    constructor() {
    }

    get bookings(): Booking[] {
        return [...this._bookings];
    }
}
