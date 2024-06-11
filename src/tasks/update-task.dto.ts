// update-task.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

// valida los datos de entrada al actualizar tareas
export class UpdateTaskDto {
    //que sea string
    @IsString()
    //que no este vacio
    @IsNotEmpty()
    //es opcional editar el parametro
    @IsOptional()
    title?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    status?: string;
}
