import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {

  constructor() { }

  postsDetails = [
    {
      id:1,
      postHeading: "Two Sum",
      postSubHeading: "Leetcode Problem #1",
      postBackground: "../../../assets/img/lc.png"
    },
    {
      id:2,
      postHeading: "Median of Two Sorted Array",
      postSubHeading: "Leetcode Problem #4",
      postBackground: "../../../assets/img/lc.png"
    }
  ]
}
