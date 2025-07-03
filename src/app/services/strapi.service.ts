import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  private url:string = 'http://localhost:1337/api/registers'
  constructor(private http: HttpClient) { }

  getRegisters():Observable<Register[]>{
    return this.http.get<Register[]>(`${this.url}`)
  }

  addRegisters(register: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.url}`, { data: register });
  }
  
  
  deleteRegisters(id:number):Observable<Register[]>{
    return this.http.delete<Register[]>(`${this.url}/${id}`)
  }

  updateRegisters(Register: Register):Observable<Register[]>{
    return this.http.put<Register[]>(`${this.url}/`,Register)
  }
}
