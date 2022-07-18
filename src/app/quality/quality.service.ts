import { Injectable } from "@angular/core";
import { IProduct } from "./quality";
import { Observable, catchError, tap, throwError} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class QualityService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}
// after adding (private productUrl = 'api/products/products.json';) - you can delete the api/product.json
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'An error occurred: ${err.error.message}';
        } else {
            errorMessage = `Server returned code: ${err.status}', error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}
