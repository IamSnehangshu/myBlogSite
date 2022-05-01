import { Component, OnInit } from '@angular/core';
import { BlogDetailsService } from 'src/app/service/blog-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: BlogDetailsService) { }
  postsData: any;

  ngOnInit(): void {
    this.postsData = this.service.postsDetails
  }

}
