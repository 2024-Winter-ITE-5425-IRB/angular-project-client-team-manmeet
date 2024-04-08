import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IRoom {
  _id: string;
  roomId: number;
  noofrooms: number;
  hotelName: string;
  roomImage: string;
  roomDescription: string;
  price: number;
}


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url: string = 'http://localhost:8080/rooms';

  constructor(private http: HttpClient) { }

  getRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(this.url);
  }
}
