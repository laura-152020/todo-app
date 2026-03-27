import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Category } from '../models/category.models';
import { Task } from '../models/task.model';
import { CategoryService } from '../services/category.services';
import { RemoteConfigService } from '../services/remote-config.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  categories: Category[] = [];
  categoryMap: Record<string, string> = {};

  newTaskTitle = '';
  newCategoryName = '';

  selectedCategoryFilter = 'all';
  showCategoryFilter = true;

  editingTaskId: string | null = null;
  editingTaskTitle = '';

  editingCategoryId: string | null = null;
  editingCategoryName = '';

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService,
    private remoteConfigService: RemoteConfigService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  async ngOnInit(): Promise<void> {
    await this.remoteConfigService.init();
    this.showCategoryFilter = this.remoteConfigService.getShowCategoryFilter();

    this.loadCategories();
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
    this.applyCategoryFilter();
  }

  loadCategories(): void {
    this.categories = this.categoryService.getCategories();
    this.categoryMap = this.categories.reduce((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {} as Record<string, string>);
  }

  applyCategoryFilter(): void {
    if (!this.showCategoryFilter || this.selectedCategoryFilter === 'all') {
      this.filteredTasks = [...this.tasks];
      return;
    }

    if (this.selectedCategoryFilter === 'none') {
      this.filteredTasks = this.tasks.filter(task => !task.categoryId);
      return;
    }

    this.filteredTasks = this.tasks.filter(
      task => task.categoryId === this.selectedCategoryFilter
    );
  }

  onCategoryFilterChange(value: string): void {
    this.selectedCategoryFilter = value;
    this.applyCategoryFilter();
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

  startEditTask(task: Task): void {
    this.editingTaskId = task.id;
    this.editingTaskTitle = task.title;
  }

  cancelEditTask(): void {
    this.editingTaskId = null;
    this.editingTaskTitle = '';
  }

  async saveTaskEdit(): Promise<void> {
    const title = this.editingTaskTitle.trim();

    if (!this.editingTaskId) {
      return;
    }

    if (!title) {
      await this.showToast('La tarea no puede estar vacía');
      return;
    }

    this.taskService.updateTask(this.editingTaskId, title);
    this.loadTasks();
    this.cancelEditTask();

    await this.showToast('Tarea actualizada correctamente');
  }

  toggleTask(id: string): void {
    this.taskService.toggleTask(id);
    this.loadTasks();
  }

  async confirmDeleteTask(id: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Eliminar tarea',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            this.taskService.deleteTask(id);
            this.loadTasks();
            await this.showToast('Tarea eliminada correctamente');
          },
        },
      ],
    });

    await alert.present();
  }

  async addCategory(): Promise<void> {
    const name = this.newCategoryName.trim();

    if (!name) {
      await this.showToast('Debes escribir un nombre para la categoría');
      return;
    }

    this.categoryService.addCategory(name);
    this.newCategoryName = '';
    this.loadCategories();

    await this.showToast('Categoría agregada correctamente');
  }

  startEditCategory(category: Category): void {
    this.editingCategoryId = category.id;
    this.editingCategoryName = category.name;
  }

  cancelEditCategory(): void {
    this.editingCategoryId = null;
    this.editingCategoryName = '';
  }

  async saveCategoryEdit(): Promise<void> {
    const name = this.editingCategoryName.trim();

    if (!this.editingCategoryId) {
      return;
    }

    if (!name) {
      await this.showToast('El nombre de la categoría no puede estar vacío');
      return;
    }

    this.categoryService.updateCategory(this.editingCategoryId, name);
    this.loadCategories();
    this.loadTasks();
    this.cancelEditCategory();

    await this.showToast('Categoría actualizada correctamente');
  }

  async confirmDeleteCategory(id: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Eliminar categoría',
      message: '¿Deseas eliminar esta categoría? Las tareas asociadas quedarán sin categoría.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            this.categoryService.deleteCategory(id);

            const tasks = this.tasks.filter(task => task.categoryId === id);
            tasks.forEach(task => this.taskService.assignCategory(task.id, null));

            if (this.selectedCategoryFilter === id) {
              this.selectedCategoryFilter = 'all';
            }

            this.loadCategories();
            this.loadTasks();

            await this.showToast('Categoría eliminada correctamente');
          },
        },
      ],
    });

    await alert.present();
  }

  assignCategoryToTask(taskId: string, value: string | null | undefined): void {
    const categoryId = value && value !== 'none' ? value : null;
    this.taskService.assignCategory(taskId, categoryId);
    this.loadTasks();
  }

  getCategoryName(categoryId: string | null | undefined): string {
    if (!categoryId) {
      return 'Sin categoría';
    }

    return this.categoryMap[categoryId] || 'Sin categoría';
  }

  get completedTasksCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  trackByTaskId(_: number, task: Task): string {
    return task.id;
  }

  trackByCategoryId(_: number, category: Category): string {
    return category.id;
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