import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {
  currentDateTime: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}
