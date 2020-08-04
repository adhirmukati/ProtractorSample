import { Component, OnInit, Inject, ViewEncapsulation, ElementRef, AfterViewInit, HostBinding } from '@angular/core';
import { ModalData } from '../../../../core/services/popup-position.service';
import { TooltipContent } from '../../../../core/models/tooltip-content.model';
import { tooltTip } from '../../../../core/models/constants';
/** base component for overlay tooltip */
@Component({
  selector: 'app-overlay-tooltip',
  templateUrl: './overlay-tooltip.component.html',
  styleUrls: ['./overlay-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverlayTooltipComponent implements OnInit, AfterViewInit {

  /** Help hint for the field */
  displayObj: TooltipContent;

  /** Tooltip position for the field */
  tooltTipPos = 'hidden';

  /** Tooltip arrow position for the field */
  arrowLeftPos = '70px';

  /** Tooltop content for each field as an array */
  messages: TooltipContent[] = tooltTip;

  @HostBinding('class') class = 'app-overlay-tooltip';


  /** Base constructor method
   * @param data to get the data through ModalData
   * @param myElement HTML Element Reference
   */
  constructor(@Inject(ModalData) public data: any, private readonly myElement: ElementRef) { }
  /**
   * Function to be called on initialization of component
   */
  ngOnInit() {
    if (this.data.keyString !== 'static') {
      this.displayObj = this.getTooltipContent(this.data.keyString);
    } else {
      this.displayObj = {
        key: this.data.tooltipContent,
        value: this.data.tooltipContent
      };
    }
  }
  /**
   * Function called after View init
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.setTooltipPosition();
    }, 200);
  }

  /** To close the dialog */
  // close(): void {
  //   this.data.overlayRef.dispose();
  // }

  /**
   * To fetch tooltip message
   * @param index index of the message to be fetched
   */
  getTooltipContent(index: string): TooltipContent {
    const message: TooltipContent[] = this.messages.filter(x => x.key === index);
    return message[0];
  }

  /** To calculate tooltip position */
  setTooltipPosition(): void {
    const arrowSize = 65;
    this.tooltTipPos = '';
    const tooltipDomRect = (this.myElement.nativeElement.offsetParent as Element).getBoundingClientRect();
    const xPos: number = this.data.clientX - tooltipDomRect.left;
    if (this.data.clientY <= tooltipDomRect.top) {
      this.tooltTipPos += ' bottom right';
    }
    this.arrowLeftPos = xPos > 0 ? (+xPos + +arrowSize) + 'px' : arrowSize + 'px';
  }
}
