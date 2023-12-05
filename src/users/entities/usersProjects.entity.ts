import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config';
import { ACCESS_LEVEL } from '../../constans/roles';
import { ProjectsEntity } from '../../projects/entities/project.entity';
import { UsersEntity } from './users.entity';

@Entity({ name: 'users_projects' })
export class UsersProjectsEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVEL })
  accessLevel: ACCESS_LEVEL;

  @ManyToOne(() => UsersEntity, (user) => user.projectsIncludes)
  user: UsersEntity;

  @ManyToOne(() => ProjectsEntity, (project) => project.usersIncludes)
  project: ProjectsEntity;
}
