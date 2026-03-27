import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(
    private taskService: TaskService,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  async addTask(): Promise<void> {
    const title = this.newTaskTitle.trim();

    if (!title) {
      await this.showToast('Debes escribir una tarea');
      return;
    }

    this.taskService.addTask(title);
    this.newTaskTitle = '';
    this.loadTasks();
    await this.showToast('Tarea agregada correctamente');
  }

  toggleTask(id: string): void {
    this.taskService.toggleTask(id);
    this.loadTasks();
  }

  async deleteTask(id: string): Promise<void> {
    this.taskService.deleteTask(id);
    this.loadTasks();
    await this.showToast('Tarea eliminada correctamente');
  }

  trackByTaskId(index: number, task: Task): string {
    return task.id;
  }

  private async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 1800,
      position: 'bottom',
    });

    await toast.present();
  }
}