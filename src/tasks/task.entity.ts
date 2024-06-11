import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//entidad de la BD
@Entity()
export class Task {
    //primary key - auto increment
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: string;
}
