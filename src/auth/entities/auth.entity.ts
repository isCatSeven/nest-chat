import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AuthEntity {
  // id为主键并且自动递增
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
