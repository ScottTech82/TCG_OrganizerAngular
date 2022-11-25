import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tcgo-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Input() pageTitle: string = "TCG_Organizer by Josh Scott";

  constructor() { }

  ngOnInit(): void {
  }

}
