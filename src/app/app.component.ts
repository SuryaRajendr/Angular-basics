import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuryaService } from './surya.service';

@Component({
  selector: 'app-root',//component name it will declre in index.html
  templateUrl: './app.component.html',//cound not show ts file in browser that's why we create
  styleUrls: ['./app.component.css']//style
})
export class AppComponent {
  title = 'angulartask';
  name:string = '';
  
  childname:string='';
 

  showParentName: boolean = false;
  numbers: number[] = [12,13,14];
  age: number;
  
  //inject already import class
  //surya:SuryaService - dependency injection
  constructor(private router:Router, private surya:SuryaService ){
    this.age = 3232;
  }

  onChildNamechange(event:string):void
  {
  this.childname = event;
  }

  onChild1ButtonClicked():void{
    this.router.navigateByUrl('child1')
  }
  onChild2ButtonClicked():void{
    // let surya: SuryaService = new SuryaService
    this.surya.setParantAge(this.age)
    this.surya.setParantName(this.name)
    this.router.navigateByUrl('child2')
    // this.router.navigateByUrl('child2/'+this.age)
  }

  onShowparentNameButtonClicked(): void {
    this.showParentName = !this.showParentName;
  }
}
