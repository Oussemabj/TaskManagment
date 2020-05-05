import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const api = environment.urlBackend + 'users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  public getAllUsers() : Observable<User[]>{
    return this.http.get<any>(api).pipe(map((result=>result._embedded.users)));
  }
  public addUser(user:User){
    this.http.post(api,user).subscribe();
  }
}
