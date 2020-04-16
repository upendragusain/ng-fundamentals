import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html'
})

export class CreateEventComponent {
  constructor(private router: Router) {
  }

  //html alternative [routerLink]="['/events']"
  cancel() {
    this.router.navigate(['/events'])
  }
}
