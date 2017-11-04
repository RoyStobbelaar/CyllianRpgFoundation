import {Component} from "@angular/core";

@Component({
  selector:'index',
  template: `
    <div class="grid-x container">
        <div class="cell medium-12">
          Index zonder al te veel inhoud. yeah
      </div>
    </div>
  `,
  styles: [`
  .container {
    width: 100vw;
  }
  `]
})

export class IndexComponent {

}
