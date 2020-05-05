import {User} from './user';

export class Project {
  constructor(
    public name:string,
    public description:string,
    public responsible:User=null,
    public team:User[]= [],
  ) {
  }
}
