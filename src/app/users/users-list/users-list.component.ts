import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: User[];

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getAllOwners();
  }

  public getAllOwners(){
    let apiAddress: string = "api/users";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.users = res as User[];
    })
  }

}
