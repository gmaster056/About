import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftBlockComponent } from './left-block/left-block.component';
import { RightBlockComponent } from './right-block/right-block.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { DesignSkillsComponent } from './design-skills/design-skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { CodingSkillsComponent } from './coding-skills/coding-skills.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ClientsComponent } from './clients/clients.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBlockComponent,
    RightBlockComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PriceComponent,
    ExperienceComponent,
    EducationComponent,
    DesignSkillsComponent,
    LanguagesComponent,
    CodingSkillsComponent,
    ReviewsComponent,
    ClientsComponent,
    PortfolioComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
