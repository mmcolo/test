import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.scss']
})
export class CorpsComponent implements OnInit {
 
  experiences = [
    {
      titre: 'Technicien informatique',
      date: 'juin 2019',
      lieu: 'AGEN, 47',
      soce: 'UPSA'
    },
    {
      titre: 'Développeur web',
      date: 'janvier 2018',
      lieu: 'TARBES, 65',
      soce: 'TURBULENCES'
    },
    {
      titre: 'Développeur web',
      date: 'juin 2017',
      lieu: 'MAYOTTE, 976',
      soce: 'Conseil général'
    }
  ];

  formations = [
  {
    titre: 'BTS-SIO',
    option: 'Option B (SLAM)',
    lieu: 'Lycée Marie Curie, Tarbes 65000',
    date: 'septembre 2016 / juillet 2018'
  },
  {
    titre:'Baccaloréat',
    option:'Economique et social',
    lieu:'Lycée de Chirongui, Mayotte',
    date:'Août 2012 / juillet 2015'
  },
  {
    titre:'Auto-didacte',
    option:'Formation en ligne',
    lieu:'Openclassroom, youtube, w3scool',
    date:'juillet 2015 / actuellement'
  }]
  constructor() { }

  ngOnInit() {
  }

}
