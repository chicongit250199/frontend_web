import {Component, OnInit, AfterViewInit, HostListener} from '@angular/core';
import {trigger, transition, useAnimation} from '@angular/animations';
import {bounce, zoomOut, zoomIn, fadeIn, bounceIn} from 'ng-animate';
import {NavService} from '../../../services/nav.service';
import {CustomizerService} from '../../../services/customizer.service';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.scss'],
    animations: [
        trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {
            // Set the duration to 5seconds and delay to 2 seconds
            // params: { timing: 3}
        }))])
    ]
})
export class ContentLayoutComponent implements OnInit, AfterViewInit {


    public right_side_bar: boolean;

    constructor(public navServices: NavService,
                public customizer: CustomizerService) {
    }


    ngAfterViewInit() {
    }

    @HostListener('document:click', ['$event'])
    clickedOutside(event) {
        // click outside Area perform following action
        document.getElementById('outer-container').onclick = function (e) {
            e.stopPropagation();
            if (e.target !== document.getElementById('search-outer')) {
                const bodyEls = document.getElementsByTagName('body');
                if (bodyEls.length && bodyEls[0].classList.contains('offcanvas')) {
                    bodyEls[0].classList.remove('offcanvas');
                }
            }
            if (e.target !== document.getElementById('outer-container')) {
                const canvasBookMark = document.getElementById('canvas-bookmark');
                if (canvasBookMark) {
                    canvasBookMark.classList.remove('offcanvas-bookmark');
                }
            }
            if (e.target !== document.getElementById('inner-customizer')) {
                const customizerLinks = document.getElementsByClassName('customizer-links');
                const customizerContain = document.getElementsByClassName('customizer-contain');
                if (customizerLinks.length && customizerLinks[0].classList.contains('open')) {
                    customizerLinks[0].classList.remove('open');
                }

                if (customizerContain.length && customizerContain[0].classList.contains('open')) {
                    customizerContain[0].classList.remove('open');
                }
            }
        };
    }

    public getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

    public rightSidebar($event) {
        this.right_side_bar = $event;
    }

    ngOnInit() {
    }

}
