import {Injectable} from '@angular/core';
import {Place} from './place.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
        new Place(
            'p1',
            'Manhattan',
            'In the heart of New York',
            'https://images.unsplash.com/photo-1469935069869-b53acc57c8d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            199.99
        ),

        new Place(
            'p2',
            'Manhattan',
            'In the heart of New York',
            'https://images.unsplash.com/photo-1469935069869-b53acc57c8d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            209.99
        ),

        new Place(
            'p3',
            'Manhattan',
            'In the heart of New York',
            'https://images.unsplash.com/photo-1469935069869-b53acc57c8d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            180.99
        ),
    ];


    constructor() {
    }

    getPlaces() {
        return [...this._places]
    }

    getPlace(id:string){
        return this._places.find(p=> p.id === id)

    }
}
