import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';

import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

const USER_DATA: User[] = [
  {id: "1", name: 'Hydrogen', dateOfBirth: "8/19/2001", address: 'H'},
  {id: "2", name: 'Helium', dateOfBirth: "4/19/2001", address: 'He'},
  {id: "3", name: 'Lithium', dateOfBirth: "5/19/2001", address: 'Li'},
  {id: "1", name: 'Hydrogen', dateOfBirth: "8/19/2001", address: 'H'},
  {id: "2", name: 'Helium', dateOfBirth: "4/19/2001", address: 'He'},
  {id: "3", name: 'Lithium', dateOfBirth: "5/19/2001", address: 'Li'},
  {id: "1", name: 'Hydrogen', dateOfBirth: "8/19/2001", address: 'H'},
  {id: "2", name: 'Helium', dateOfBirth: "4/19/2001", address: 'He'},
  {id: "3", name: 'Lithium', dateOfBirth: "5/19/2001", address: 'Li'},
  {id: "1", name: 'Hydrogen', dateOfBirth: "8/19/2001", address: 'H'},
  {id: "2", name: 'Helium', dateOfBirth: "4/19/2001", address: 'He'},
  {id: "3", name: 'Lithium', dateOfBirth: "5/19/2001", address: 'Li'},
  {id: "1", name: 'Hydrogen', dateOfBirth: "8/19/2001", address: 'H'},
  {id: "2", name: 'Helium', dateOfBirth: "4/19/2001", address: 'He'},
  {id: "3", name: 'Lithium', dateOfBirth: "5/19/2001", address: 'Li'},
];

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

  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'address', "actions"];
  
  dataSource = new MatTableDataSource(USER_DATA);
  public getAllOwners(){
    
    /*let apiAddress: string = "api/users";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.users = res as User[];
    })*/
  }

}
