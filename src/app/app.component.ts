import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Aladdin's Castle";
  public games: Array<any>=[
    {text: 'Space Invaders'},
    {text: 'Lugoff Legends'},
    {text: 'Starslinger'}
  ];
}
