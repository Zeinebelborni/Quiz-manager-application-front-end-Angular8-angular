import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }
getQuiz()
{
return this.http.get('https://opentdb.com/api.php?amount=10')
}
getPlayers()
{
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}
}
