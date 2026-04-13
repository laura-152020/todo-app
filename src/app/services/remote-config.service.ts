import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoteConfigService {
  private showCategoryFilter = true;

  constructor() {}

  async init(): Promise<void> {
  try {
    const storedValue = localStorage.getItem('showCategoryFilter');
    console.log('storedValue:', storedValue);

    if (storedValue !== null) {
      this.showCategoryFilter = storedValue === 'true';
    } else {
      this.showCategoryFilter = true;
    }

    console.log('showCategoryFilter final:', this.showCategoryFilter);
  } catch (error) {
    console.error('Error initializing remote config:', error);
    this.showCategoryFilter = true;
  }
}

  getShowCategoryFilter(): boolean {
    return this.showCategoryFilter;
  }

  setShowCategoryFilter(value: boolean): void {
    this.showCategoryFilter = value;
    localStorage.setItem('showCategoryFilter', String(value));
  }
}