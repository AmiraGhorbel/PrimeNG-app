import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private messageService: MessageService, private router: Router) { }
  goToProducts(){
    this.router.navigate(['/productList']);
  }
  showToast() {
    this.messageService.clear("v");
    this.messageService.add({ key: "c", severity: 'success', summary: 'Heading', detail: 'Message Content' })
  }
  showToast2() {
    this.messageService.clear("c");
    this.messageService.add({ key: "v", severity: 'success', summary: 'Heading', detail: 'Message Content' })
  }
  onConfirm() {
    console.log('confirm clicked');
  }
  onReject() {
    console.log('reject clicked');
    this.messageService.clear("c");
  }
  ngOnInit(): void {this.items = [
    {
      label: 'Accueil',
      icon: '',
      routerLink:"['accueil']"
    },
    {
      label: 'About',
      icon: ''
    },
    {
      label: 'Products',
      icon: ''
    },
    {
      label: 'Contact',
      icon: ''
    }
  ];
}

}
