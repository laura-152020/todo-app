import { Injectable } from '@angular/core';
import { Category } from '../models/category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly storageKey = 'categories';

  getCategories(): Category[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addCategory(name: string): void {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    const categories = this.getCategories();

    const newCategory: Category = {
      id: crypto.randomUUID(),
      name: trimmedName,
      createdAt: new Date().toISOString()
    };

    categories.unshift(newCategory);
    this.saveCategories(categories);
  }

  updateCategory(id: string, name: string): void {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    const categories = this.getCategories().map(category =>
      category.id === id ? { ...category, name: trimmedName } : category
    );

    this.saveCategories(categories);
  }

  deleteCategory(id: string): void {
    const categories = this.getCategories().filter(category => category.id !== id);
    this.saveCategories(categories);
  }

  private saveCategories(categories: Category[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(categories));
  }
}