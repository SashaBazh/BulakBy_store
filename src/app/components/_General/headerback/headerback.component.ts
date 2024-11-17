import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-headerback',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './headerback.component.html',
  styleUrl: './headerback.component.css'
})
export class HeaderbackComponent {
  @Input() pageTitle: string = 'Главная';

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
