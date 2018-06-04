import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit {
  @Input() games: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
