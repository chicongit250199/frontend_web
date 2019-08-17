import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmComponent} from '../components/modal/modal-confirm/modal-confirm.component';
import {ModalAlertComponent} from '../components/modal/modal-alert/modal-alert.component';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    constructor(
        private modalService: NgbModal) {
    }

    confirm({title, message}) {
        const modalInstance = this.modalService.open(ModalConfirmComponent);
        modalInstance.componentInstance.title = title;
        modalInstance.componentInstance.message = message;
        return modalInstance.result;
    }

    alert(message, title?) {
        const modalIns = this.modalService.open(ModalAlertComponent);
        modalIns.componentInstance.message = message;
        if (title) {
            modalIns.componentInstance.title = title;
        }
        return modalIns;
    }
}
