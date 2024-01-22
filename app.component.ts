import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, CockpitComponent, 
      ServerElementComponent]
})
export class AppComponent {
 
 
  numr=[1,2,3,4,5,6,7,8,9,10,11]
 Oddnum = false;
 evennn=false
  odd=[1,3,5]
  even=[2,4,6]
    
}






