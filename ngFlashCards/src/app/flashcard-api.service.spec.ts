import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlashcardApiService } from './flashcard-api.service';
import { FlashCard } from './card/card.component';

describe('FlashcardApiService', () => {
  let service: FlashcardApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FlashcardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all flashcards', () => {
    service.getAllFlashcards().subscribe((data) => {
      expect(data).toBeTruthy();
      expect(data.length).toEqual(3);
    });

    const req = httpMock.expectOne('https://my-flashcards-api.azurewebsites.net/cards');
    expect(req.request.method).toBe('GET');

    req.flush([
      {
        id: 1,
        front: 'question',
        back: 'answer'
      },
      {
        id: 2,
        front: 'question 2',
        back: 'answer 2'
      },
      {
        id: 3,
        front: 'question 3',
        back: 'answer 3'
      }
    ])

    httpMock.verify();
  })
  it('should create flashcard', () => {
    const flashcardToCreate = {
      front: 'words',
      back: 'more words'
    }
    service.createFlashCard(flashcardToCreate).subscribe((data: FlashCard) => {
      expect(data).toBeTruthy();
      expect(data.id).toBe(123);
    })

    const req = httpMock.expectOne('https://my-flashcards-api.azurewebsites.net/card/create');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(flashcardToCreate);

    req.flush({
      id: 123,
      front: 'words',
      back: 'more words'
    });

    httpMock.verify();
  })
});
