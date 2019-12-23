import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  @Input() titre:string;
  @Input() option:string;
  @Input() lieu:string;
  @Input() date:string;
  
  constructor() { }

  ngOnInit() {
  }

}
