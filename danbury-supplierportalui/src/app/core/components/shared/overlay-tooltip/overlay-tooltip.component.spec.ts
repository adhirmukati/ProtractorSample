import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  DebugElement
} from '@angular/core';
import { OverlayTooltipComponent } from './overlay-tooltip.component';
import { ModalData } from 'src/app/core/services/popup-position.service';
import { TooltipContent } from 'src/app/core/models/tooltip-content.model';
import * as constants from 'src/app/core/models/constants';
import { By } from '@angular/platform-browser';
import { empty } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('OverlayTooltipComponent', () => {
  let component: OverlayTooltipComponent;
  let fixture: ComponentFixture<OverlayTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ModalData, useValue: 'PopupPositionService' }],
      declarations: [OverlayTooltipComponent],
      imports: [BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [OverlayTooltipComponent],
      }
    }).
      compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayTooltipComponent);
    component = fixture.componentInstance;
    component.data = {
      keyString: 'budgetExceeded',
      clientX: 500,
      clientY: 500
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch tooltip data on getTooltipContent', () => {
    spyOn(component, 'getTooltipContent').and.callThrough();
    component.displayObj = component.getTooltipContent(
      component.data.keyString
    );
    expect(component.displayObj.key).toEqual(component.data.keyString);
  });

  it('should update value text in DOM', () => {
    spyOn(component, 'getTooltipContent').and.callThrough();
    component.displayObj = component.getTooltipContent(
      component.data.keyString
    );
    const valueDom = fixture.debugElement.query(By.css('.hint'));
    expect(valueDom.nativeElement.textContent.trim()).toBe(
      component.displayObj.value
    );
  });

  it('should call setTooltipPosition after view init', fakeAsync(() => {
    component.ngAfterViewInit();
    tick(200);
    fixture.whenStable().then(() => {
      spyOn(component, 'setTooltipPosition');
      expect(component.setTooltipPosition).toHaveBeenCalled();
    });
  }));
});
