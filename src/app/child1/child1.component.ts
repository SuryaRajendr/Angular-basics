import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentname:string ='';
  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();

  name: string = 'surya';
  entername : string ='test';
  entername2 : string ='test2';
  // displayvalue : string = "";

  constructor() { }

  ngOnInit(): void {
  }
  // onNameChange(event: string):void
  // {
  // this.displayvalue = event;
  // }
  onInputChange(event: string):void
  {
    this.onNameChange.emit(event);
  }

}
