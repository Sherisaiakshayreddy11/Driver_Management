import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainBodyComponent } from "./main-body/main-body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'driver-management';
}
