import { Inject, Injectable } from '@angular/core';
import {
  LOCAL_STORAGE,
  LocalStorageService,
  SESSION_STORAGE,
  SessionStorageService,
} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class StateStorageService {
  private previousUrlKey = 'previousUrl';
  private authenticationKey = 'jhi-authenticationToken';

  constructor(
    @Inject(LOCAL_STORAGE) private $localStorage: LocalStorageService,
    @Inject(SESSION_STORAGE) private $sessionStorage: SessionStorageService
  ) {
    console.log('StateStorageService constructor');
  }

  storeUrl(url: string): void {
    this.$sessionStorage.store(this.previousUrlKey, JSON.stringify(url));
  }

  getUrl(): string | null {
    const previousUrl = this.$sessionStorage.retrieve(this.previousUrlKey);
    return previousUrl
      ? (JSON.parse(previousUrl) as string | null)
      : previousUrl;
  }
}
