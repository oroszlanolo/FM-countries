import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Mode } from './mode-toggle.model';

@Injectable({
  providedIn: 'root'
})
export class ModeToggleService {
  currentMode = Mode.LIGHT;
  
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { 
    this.document.body.classList.add(this.currentMode);
   }

  toggleMode() {
    this.document.body.classList.toggle(Mode.LIGHT);
    this.document.body.classList.toggle(Mode.DARK);
    if (this.currentMode === Mode.LIGHT) {
      this.updateCurrentMode(Mode.DARK);
    } else {
      this.updateCurrentMode(Mode.LIGHT);
    }
  }

  updateCurrentMode(mode: Mode) {
    this.currentMode = mode;
  }
}
