import { Injectable } from '@angular/core';
//it is created by automatically singleton
@Injectable({
  providedIn: 'root'
})
export class SuryaService {

  // constructor() {}

  private parentAge: number;
  private parentName: string;

  getParantName(): string {
    return this.parentName
  }

  getParantAge(): number {
    return this.parentAge
  }
  setParantName(name: string): void {
     this.parentName = name
  }
  setParantAge(age: number): void {
    this.parentAge = age
 }

  
}
