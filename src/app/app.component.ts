import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'devclub',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Developer Alexander Amel`kin';

  constructor(private meta: Meta, private titleService: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Портфолио частного веб мастера'},
      {name: 'author', content: 'gmaster056'},
      {name: 'keywords', content: 'Angular, Developer, Portfolio'}
    ]);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
