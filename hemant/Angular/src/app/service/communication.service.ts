import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommunicationService {
    mode = new Subject();

    passingMode() {
        return this.mode.asObservable();
    }
    constructor() {
    }
}
