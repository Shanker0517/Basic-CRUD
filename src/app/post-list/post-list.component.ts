import { Component, Input ,AfterViewInit,ViewChild} from '@angular/core';
import { PostList } from '../post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements AfterViewInit{
  // parentdata:postList
  // @Input({alias: 'parentPostListData'}) parentPostList:[]=[]
  @Input({ alias: 'parentPostListData' }) parentPostList: PostList = [];
  ChildModifiedData: PostList = [];

  constructor() {
    // {console.log(this.parentPostList)}
    this.ChildModifiedData = [...this.parentPostList];
    // this.ChildModifiedData.push({ id: 2, title: 'xxx', image: 'zzzz' });
  }
  ngAfterViewInit(): void {
    // this.ChildModifiedData = [...this.parentPostList];
  }
}