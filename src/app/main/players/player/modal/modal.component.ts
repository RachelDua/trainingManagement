import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../../services/user.service";

@Component({
    selector: 'player-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


    @Input() data!: IUser;

    @Input() modal_id: string = '';

    //todo: 1. Rachel, Yaael or I, add subscription_expiration_date variable to handle EXPIRED case.
    //todo: 2. add Insert-Note & Remove-Note options.
    //todo: 3. Fix modal size to fit



    constructor() {
    }

    ngOnInit(): void {
    }

    handleSave() {
        console.table(this.data);
    }


    dodo() {

    }


}
