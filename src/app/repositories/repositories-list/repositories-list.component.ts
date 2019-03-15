import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../shared/models/github';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent implements OnInit {
  @Input() repositories: Repository[];

  constructor() {}

  ngOnInit() {}
}
