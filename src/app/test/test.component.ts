import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { BlogService } from '../services/blog/blog.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public username:string;
  public password:string;
  public status:string="{{LOG}}";
  public color:string="black-text";

  constructor(private user:UserService,
              private blog:BlogService) { }

  ngOnInit(): void {

  }

  public load(){
    var token=localStorage.getItem("SESSION_TOKEN").split('.')[1];
    console.log(JSON.parse(atob(token)));
  }

  public connect(){
    this.user.connect(this.username,this.password)
    .then((res:any)=>{
      this.status="Connexion réussie";
      this.color="green-text";
      localStorage.setItem("SESSION_TOKEN",res.token);
    })
    .catch((err)=>{
      this.status="Connexion Echoué";
      this.color="red-text";
    })
  }
}