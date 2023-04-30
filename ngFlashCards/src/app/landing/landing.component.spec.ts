import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardComponent } from '../card/card.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent, CardComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onKey', () => {
    it('should set front property when called with front field', () => {
      component.onKey({ target: { value: 'John Doe' } }, 'fronta');
      expect(component.fronta).toEqual('John Doe');
    });

    it('should set back property when called with back field', () => {
      component.onKey({ target: { value: '123 Main St' } }, 'backa');
      expect(component.backa).toEqual('123 Main St');
    });

    it('should toggle form properly', () => {
      component.toggleForm();
      expect(component.form).toBeFalse();
    })

    it('should toggle show properly', () => {
      component.toggleShow();
      expect(component.form).toBeFalse();
    })
  });
});
