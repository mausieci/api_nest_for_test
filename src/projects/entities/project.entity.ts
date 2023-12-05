import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config';
import { IProject } from '../../interface/project.interface';
import { UsersProjectsEntity } from '../../users/entities';

@Entity('projects')
export class ProjectsEntity extends BaseEntity implements IProject {
  @Column()
  name: string;
  @Column()
  description: string;

  @OneToMany(
    () => UsersProjectsEntity,
    (usersProjects) => usersProjects.project,
  )
  usersIncludes: UsersProjectsEntity[];
}
