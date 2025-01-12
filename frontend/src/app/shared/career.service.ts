import { ICareer } from './career';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  // careerDataUrl = '../../assets/career-data.json';[]
  private careerDataUrl = '/api/careers';

  constructor(private http: HttpClient) {}

  getCareers(): Observable<ICareer[]> {
    return this.http.get<ICareer[]>(this.careerDataUrl);
  }

  getCareer(id: String): Observable<ICareer> {
    return this.getCareers().pipe(
      map(careers => careers.find((career) => career._id === id))
    );
  }

  // getCareer(id): Observable<ICareer> {
  //   return this.http.get<ICareer>(`this.careerDataUrl/id`);
  // }
}
