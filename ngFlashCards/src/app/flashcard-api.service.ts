import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardApiService {

  constructor(private http: HttpClient) { }

  getAllFlashcards(): Observable<any> {
    return this.http.get('https://my-flashcards-api.azurewebsites.net/cards');
  }
  createFlashCard(card: any): Observable<any> {
    return this.http.post('https://my-flashcards-api.azurewebsites.net/card/create', card) as Observable<any>;
  }
  deleteFlashCard(id: number): Observable<any> {
    return this.http.delete('https://my-flashcards-api.azurewebsites.net/card/delete/' + id) as Observable<any>;
  }
  updateFlashCard(card: any): Observable<any> {
    return this.http.put('https://my-flashcards-api.azurewebsites.net/card/update', card) as Observable<any>;
  }
}
