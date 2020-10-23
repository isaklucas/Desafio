import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datanow = new Date();
  horanow  = new Date();

  constructor() { }

  ngOnInit(): void {

    this.startTimer()
  }

  startTimer() {
    setInterval(() => {
    this.horanow  = new Date();
    },1000)
  }

}
