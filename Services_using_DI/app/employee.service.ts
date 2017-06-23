import { Injectable } from '@angular/core';

@Injectable()


export class EmployeeService {

    getEmployee() {
        return [
            { "id": 1, "name": "Harsh", "gender": "male" },
            { "id": 2, "name": "Akshita", "gender": "female" },
            { "id": 3, "name": "Kartik", "gender": "male" },
            { "id": 4, "name": "Bhardwaj", "gender": "male" }]

    }


}