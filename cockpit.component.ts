import { Component, Input,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
 
 
 
@Input() mys: any;
//@Output() myDesks = new EventEmitter<any>();
}

