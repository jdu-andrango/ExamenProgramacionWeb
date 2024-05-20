import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit():void {
    this.items = [
      {
          label: 'home',
          icon: 'pi pi-home',
          route:'/home'

      },
      {
        label: 'about',
        icon: 'pi pi-address-book',

        route: '/about'

    },
  {
    label: 'contact',
    icon: 'pi pi-clipboard',
    route:'/contact'

},
  {
    label: 'posts',
    icon:' pi pi-prime ',
    route:'/posts'

}

  ];
  }
}
