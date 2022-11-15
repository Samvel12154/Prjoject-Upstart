import { Component, OnInit } from '@angular/core';
import { faHeart,faBasketShopping,faBell,faUser,faGlobe } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.menu.scss']
})
export class HeaderComponent implements OnInit {
 
  faHeart = faHeart;
  faBasketShopping= faBasketShopping;
  faBel=faBell;
  faUser=faUser;
  faGlobe = faGlobe
  block=false
  constructor() { }

  ngOnInit(): void {
  }




}
