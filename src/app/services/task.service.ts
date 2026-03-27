import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';

  getTasks(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(title: string): void {
    const tasks = this.getTasks();

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      categoryId: null,
      createdAt: new Date().toISOString()
    };

    tasks.unshift(newTask);
    this.saveTasks(tasks);
  }

  toggleTask(id: string): void {
    const tasks = this.getTasks().map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    this.saveTasks(tasks);
  }

  deleteTask(id: string): void {
    const tasks = this.getTasks().filter(task => task.id !== id);
    this.saveTasks(tasks);
  }
}