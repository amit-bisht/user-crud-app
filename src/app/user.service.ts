import { ErrorHandler, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from "./user";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
@Injectable()
export class UserService {
    users: any
    apiUrl = "https://reqres.in/api/users"
    constructor(private http: HttpClient) {
    }
    fetchUsers(){
        return this.http.get(this.apiUrl)
    }
}