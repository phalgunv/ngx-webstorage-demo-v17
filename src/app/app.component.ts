import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LOCAL_STORAGE,
  NgxWebstorageModule,
  SESSION_STORAGE,
} from 'ngx-webstorage';
import { StateStorageService } from './state-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    NgxWebstorageModule,
    StateStorageService,
    { provide: LOCAL_STORAGE, useFactory: () => localStorage },
    { provide: SESSION_STORAGE, useFactory: () => sessionStorage },
  ],
})
export class AppComponent {
  title = 'test_17_0_7';
  constructor(private stateStorageService: StateStorageService) {}
}
