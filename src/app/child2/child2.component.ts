import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuryaService } from '../surya.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  parentAge: number;
  parentName: string = '';
  // constructor(private router: ActivatedRoute) { }
  constructor(private surya:SuryaService) { }

  ngOnInit(): void {
    // let surya:SuryaService = new SuryaService();

    this.parentAge = this.surya.getParantAge();
    this.parentName = this.surya.getParantName();
  //  this.parentAge = this.router.snapshot.params['age'];
  }

}
