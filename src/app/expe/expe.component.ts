import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expe',
  templateUrl: './expe.component.html',
  styleUrls: ['./expe.component.scss']
})
export class ExpeComponent implements OnInit {

  @Input() title:string;
  @Input() date: string;
  @Input() lieu: string;
  @Input() soce: string;
  
  constructor() { }

  ngOnInit() {
  }

}
