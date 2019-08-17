import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-alert',
    templateUrl: './modal-alert.component.html',
    styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit, AfterViewInit {
    @Input() title = 'Alert';
    @Input() message;
    @Input() type = 'warning';
    @Input() buttonCloseTitle = '승인';

    constructor(public modal: NgbActiveModal) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        // this.btnClose.nativeElement.focus();
    }

}
