import { Component } from '@angular/core';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { ContentComponent } from "../content/content.component";
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [KENDO_LAYOUT, ContentComponent,KENDO_BUTTONS],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss'
})
export class MainBodyComponent {

}
