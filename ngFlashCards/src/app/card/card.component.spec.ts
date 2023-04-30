import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent, FlashCard } from './card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlashcardApiService } from '../flashcard-api.service';
import { of } from 'rxjs';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let flashcardApiService: FlashcardApiService;

  const mockFlashcards: FlashCard[] = [
    { id: 1, front: 'front1', back: 'back1' },
    { id: 2, front: 'front2', back: 'back2' },
    { id: 3, front: 'front3', back: 'back3' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load flashcards on ngOnInit', () => {
  //   spyOn(flashcardApiService, 'getAllFlashcards').and.returnValue(of(mockFlashcards));
  //   component.ngOnInit();
  //   expect(component.cards).toEqual(mockFlashcards);
  // });

  it('should toggle side and set id on toggleSide', () => {
    const mockId = 1;
    component.toggleSide(mockId);
    expect(component.side).toBeFalsy();
    expect(component.id).toEqual(mockId);
  });

});
