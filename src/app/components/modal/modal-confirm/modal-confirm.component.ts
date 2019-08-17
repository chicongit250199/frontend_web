import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit, AfterViewInit {
    @Input() title;
    @Input() confirmMessage;
    @Input() message;
    @Input() type = 'warning';
    @Input() buttonConfirmTitle = 'OK';
    @Input() buttonCancelTitle = 'Cancel';

    constructor(public modal: NgbActiveModal) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        // this.buttonCancel.nativeElement.focus();
    }
}
