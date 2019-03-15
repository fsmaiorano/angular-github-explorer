import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/models/github';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit() {}
}
