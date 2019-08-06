import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-new-offer',
    templateUrl: './new-offer.page.html',
    styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
    private form: FormGroup;
    constructor() {
    }

    ngOnInit() {
        this.form = new FormGroup(
            {
                title: new FormControl(null,{
                    updatedOn: 'blur',
                    validators: [Validators.required]
                }),
                description: new FormControl(null, {
                    updatedOn: 'blur',
                    validators: [Validators.required, Validators.maxLength(140)]
                }),
                price: new FormControl(null, {
                    updatedOn: 'blur',
                    validators: [Validators.min(1), Validators.required]
                }),
                dateFrom: new FormControl(null, {
                    updatedOn: 'blur',
                    validators:[Validators.required]
                }),
                dateTo: new FormControl(null, {
                    updatedOn: 'blur',
                    validators:[Validators.required]
                })

            }
        )
    }

    onCreateNewOffer(form: FormGroup) {
       // console.log(form)
    }

}
