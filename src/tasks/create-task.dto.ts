// create-task.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

// valida los datos de entrada al crear nuevas tareas
export class CreateTaskDto {
    //que sea string
    @IsString()
    //que no este vacio
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    status: string;
}
