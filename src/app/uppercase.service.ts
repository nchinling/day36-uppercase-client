import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { Observable, map } from "rxjs"
import { UppercaseResponse } from "./models"

//to remove during single server deployment
// const URL_TO_UPPERCASE = 'http://localhost:8080/api/uppercase'
@Injectable()
export class UpperCaseService{

    http = inject(HttpClient)

    toUpperCase(text:string): Observable<string>{
        //
        const params = new HttpParams().set('text', text)

        // return this.http.get<UppercaseResponse>(URL_TO_UPPERCASE, {params})
        return this.http.get<UppercaseResponse>('/api/uppercase', {params})
            .pipe(
                map(resp => resp.text)
            )
        

    }
}

