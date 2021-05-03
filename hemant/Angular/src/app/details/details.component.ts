import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {CommunicationService} from "../service/communication.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'user_email', 'user_phone', 'created_at', 'action'];
  dataSource = [];

  constructor(public api: ApiService, public communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.communicationService.passingMode().subscribe((res: any) => {
        if (res.mode === 'getData') {
          this.getAll();
        }
    });
    this.getAll();
  }

  getAll() {
    this.api.post('http://localhost:3000/getAll', {}).subscribe(res => {
      const result: any = res;
      if (result.status) {
        this.dataSource = result.data;
      } else {
        this.dataSource = [];
      }
    });
  }

  edit(id: number) {
    this.communicationService.mode.next({mode: 'edit', userID: id});
  }

  delete(id: number) {
    if (!confirm('Are you sure you want delete!!!')) {
      return false;
    }

    this.api.post('http://localhost:3000/delete_user', {user_id: id}).subscribe(res => {
      const result: any = res;
      if (result.status) {
        this.getAll();
      }
    });
  }
}
