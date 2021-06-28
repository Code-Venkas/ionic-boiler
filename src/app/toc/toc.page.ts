import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
  
{
  title: "Chapter 1 | The Beginning",
  url: "/chapter1"
},

{
  title: "Chapter 2 | The Seconding",
  url: "/chapter2"
},

{
  title: "Chapter 3 | The All Is Lost Arc",
  url: "/chapter3"
},

{
  title: "Chapter 4 | The Tournment Arc",
  url: "/chapter4"
},

{
  title: "Chapter 5 | The Redemptioning",
  url: "/chapter5"
},
  ];
  constructor() { }

  ngOnInit() {
  }

}
