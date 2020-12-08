import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/mymodel/livre';

@Component({
  selector: 'aziz-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  
  @Input("book") lv:Livre;
  onAffiche() {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
