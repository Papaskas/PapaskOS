import { Component } from '@angular/core';
import { WindowManagerComponent } from '@widgets/window-manager/window-manager.component';

@Component({
  selector: 'app-doom',
  templateUrl: './doom.component.html',
  styleUrl: './doom.component.scss',
  imports: [WindowManagerComponent],
  standalone: true,
})
export class DoomComponent {}
