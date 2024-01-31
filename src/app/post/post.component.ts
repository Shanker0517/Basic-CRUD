import { Component, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface post { username: string, password: string }
export type PostList = post[];
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent,CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {
  @Input({ alias: 'parentData' }) parentannouncement: string ='';
  userName:string=''
  password:string=''
  postList: PostList=[];
  constructor() {
    // this.postList=[{username:'shanker',password:'shanker@123'}]
  }
  handleSubmit(){
    this.postList.push({username:this.userName,password:this.password})
    console.log(this.postList)
  }
  
}
