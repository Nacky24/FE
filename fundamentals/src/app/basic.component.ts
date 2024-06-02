import { Component } from "@angular/core";
import {NamesService} from "./names.service";
@Component({
  selector: 'courses',
  template: `
    <h1>Hey You</h1>
    <p>welcome to my {{ title + " for " + title }}</p>
    <ol>
      <li *ngFor="let name of names">
        {{ name }}
      </li>
    </ol>
    <button class="btn btn-primary">Save</button>`})


export class BasicComponent {
  title: string;
  names;

  constructor(service: NamesService) {
    `let service = new NamesService();`
    this.names = service.getName();
    this.title = service.getTitle();
  }
}
