import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // $(document).ready(function () {
    //   var page_links = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    //   $(".nav-links a").each(function () {
    //     if ($(this).attr("href") == page_links)
    //       $(this).css({
    //         'background-color': 'red'
    //       });
    //   });
    // });

  }

}
