import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.component'

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component }
]
