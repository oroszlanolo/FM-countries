import { Component } from '@angular/core';
import { ModeToggleService } from './mode-toggle/mode-toggle.service';
import { Mode } from './mode-toggle/mode-toggle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMode = this.modeToggleService.currentMode;
  Mode = Mode;
  constructor(private router: Router, private modeToggleService: ModeToggleService) {}

  toggleMode() {
    this.modeToggleService.toggleMode();
    this.currentMode = this.modeToggleService.currentMode;
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
