import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../service/api.service";
import {Router} from "@angular/router";
import {CommunicationService} from "../service/communication.service";

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  saveForm: FormGroup;
  id: number;
  constructor(public api: ApiService, public communicationService: CommunicationService) { }

  ngOnInit() {
    this.saveForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      user_email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      user_phone: new FormControl('', Validators.required),
    });

    this.communicationService.passingMode().subscribe((res: any) => {
        if (res.mode === 'edit') {
          this.id = res.userID;
          this.getUserData();
        }
    });
  }

  getUserData() {
    this.api.post('http://localhost:3000/getUser', {user_id: this.id}).subscribe(res => {
      const result: any = res;
      if (result.status) {
        this.saveForm.patchValue(result.data);
      }
    });
  }

  form(formData) {
    let api = 'http://localhost:3000/add_user';
    if (this.id > 0) {
      formData.user_id = this.id;
      api = 'http://localhost:3000/update_user';
    }
    this.api.post(api, formData).subscribe(res => {
      const result: any = res;
      if (result.status) {
        this.saveForm = new FormGroup({
          first_name: new FormControl(''),
          last_name: new FormControl(''),
          user_email: new FormControl(''),
          user_phone: new FormControl(''),
        });
        this.communicationService.mode.next({mode: 'getData'});
      }
    });
  }

}
