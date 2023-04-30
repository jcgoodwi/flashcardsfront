import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlashcardApiService } from '../flashcard-api.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onKey', () => {
    it('should set front property when called with fron field', () => {
      component.onKey({ target: { value: 'John Doe' } }, 'frontb');
      expect(component.frontb).toEqual('John Doe');
    });

    it('should set back property when called with back field', () => {
      component.onKey({ target: { value: '123 Main St' } }, 'backb');
      expect(component.backb).toEqual('123 Main St');
    });
  });

  it('should toggle form properly', () => {
    component.closeForm();
    expect(component.form).toBeFalse();
  })
});
