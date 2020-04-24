import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent  {

  private url = `${environment.apiBaseUrl}/v1`;
  branches: string[] ;
  branch: string ;

  constructor(private http: HttpClient) { 
    this.http.get(`${this.url}/branches`).subscribe(data => {
      this.branches = data['data'];

      console.log(this.branches);
    })
  }

  // private EditItem(name, address): void {
  //   this.createdItem = {
  //     name: '',
  //     address: ",
  //   };
  // }

  public editbranch(id, data){
    console.log(id, this.branch);
    // this.http.put(`${this.url}/branches/`+id, this.data).subscribe(data => {
    //   this.editbranches = data['data'];
    //   console.log(this.editbranches);
    // })
  }

  public deletebranch(id, index): void{
    console.log(id);
    this.http.delete(`${this.url}/branches/`+id)
    .subscribe(data => {
      console.log(this.branches, data);
      try{
      if (data['status'] == true) {
        this.branches.splice(index, 1);
        console.log(this.branches);
      }
    }catch(e){
      console.log(e)
    }
    })
  }

  ngOnInit() {
  }
  
}
