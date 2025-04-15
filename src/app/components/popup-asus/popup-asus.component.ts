import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-asus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-asus.component.html',
  styleUrls: ['./popup-asus.component.css']
})
export class PopupAsusComponent implements OnInit {
  isCompact = false;

  ngOnInit(): void {
    // Auto compact sur mobile au chargement
    if (window.innerWidth < 900) {
      this.isCompact = true;
    }
  }

  togglePopup(): void {
    if (window.innerWidth < 99999) {
      this.isCompact = !this.isCompact;
    }
  }
}
