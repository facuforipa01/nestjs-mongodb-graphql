import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(

    //injecta el repositorio de tareas
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  //crear
  create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  //traer todas
  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  //buscar por id
  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Tarea con ID ${id} no ha sido encontrada`);
    }
    return task;
  }

  //actualizar una tarea
  async update(id: number, task: Task): Promise<Task> {
    await this.tasksRepository.update(id, task);
    return this.findOne(id);
  }

  // eliminar una tarea
  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
