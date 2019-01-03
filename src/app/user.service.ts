import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Customer } from './customers/models/customer';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userDataSource = new BehaviorSubject([{
        "id": "1",
        "name": "Nainar",
        "age": 25,
        "active": true
    }])

    constructor(private http: HttpClient) {
    }

    /** GET response from the server */
    apiRequest(url, args): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders(args.headers)
        };
        if (args.method === 'GET') {
            return this.userDataSource;
            // return this.http.get("assets/data.json").pipe(
            //     tap(response =>
            //         this.log(`UserService :api success: ${url}`)
            //     ),
            //     catchError(this.handleError)
            // );
        }
        if (args.method === 'POST') {
            const currentValue = this.userDataSource.value;
            const updatedValue = [...currentValue, args.params];
            this.userDataSource.next(updatedValue);
            return this.userDataSource;

        }
        if (args.method === 'DELETE') {
            const currentValue = this.userDataSource.value;
            var index = currentValue.map(function (e) { return e.id; }).indexOf(args.params.id);
            const updatedValue = currentValue.splice(index, 1);
            this.userDataSource.next(currentValue);
            return this.userDataSource;
        }
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(err) {
        let errorMessage: string;
        errorMessage = `An error occurred: ${err.error.message} || ${
            err.error.Message
            }`;
        console.error(err);
        return throwError(errorMessage);
    }

    private log(message: string) {
        console.log(message);
    }
}
