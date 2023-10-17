import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {
 private isLoading = false;

 startLoading(){
  this.isLoading= true;
 }

 stopLoading(){
  this.isLoading= false;
 }

 isLoadingStatus():boolean{
  return this.isLoading;
 }
  constructor() { }
}
