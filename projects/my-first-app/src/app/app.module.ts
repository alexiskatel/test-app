import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeSectionComponent } from './modules/main-module/components/welcome-section/welcome-section.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './modules/main-module/components/services/services.component';
import { AboutComponent } from './modules/main-module/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeSectionComponent,
    ServicesComponent,
    AboutComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
