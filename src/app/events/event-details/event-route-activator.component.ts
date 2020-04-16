import { Router, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service'

@Injectable()
  // will recieve a route paramter and look into event service to determine if
  // that event exists else will route to 404 page
export class EventRouteActivator {
  constructor(private eventService: EventService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    // '!!' This converts a value to a boolean and ensures a boolean type.
    const eventExists = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExists)
      this.router.navigate(['/404'])
    return eventExists
  }
}
