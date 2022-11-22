import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'tcgo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menus: Menu[] = [

    new Menu("Users", "/user/list"),
    new Menu("Cards", "/card/list"),
    new Menu("About", "/about")

  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
