import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';

@Controller('tasks')
export class TasksController {
    // injecta el servicio
  constructor(private readonly tasksService: TasksService) {}

  //ruta post 
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;
    return this.tasksService.create(task);
  }

  //ruta get
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  // ruta get by id
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  //ruta update
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = new Task();
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.status = updateTaskDto.status;
    return this.tasksService.update(+id, task);
  }

  //ruta delete
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(+id);
  }
}

