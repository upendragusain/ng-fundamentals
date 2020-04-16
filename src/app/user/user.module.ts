import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'

@NgModule({
  imports: [
    CommonModule, // as opposed to BrowserModule in AppModule
    RouterModule.forChild(userRoutes) //forRoot in AppMOdule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
  ]
})

export class UserModule {

}
