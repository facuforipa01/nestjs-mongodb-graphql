import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';

//modulo principal de la app (decorador)
@Module({
  imports: [
    //configuracion de typeOrm 
    TypeOrmModule.forRoot({
      //tipo de db
      type: 'sqlite', 
      //nombre
      database: 'tasks.db',
      //entidades que contiene
      entities: [Task],
      //auto sincronizar
      synchronize: true,
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
