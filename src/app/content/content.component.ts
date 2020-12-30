import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {  

  li:any;
  lis=[];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    .subscribe(Response => {
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(Response){   
        hideloader(); 
      } 
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li.list; 
    });
    function hideloader(){
      document.getElementById('loading').style.display ='none';}
    }
  }
  // The url of api is passed to get() and then subscribed and  
// stored the response to li element data array lis[] is created  
// using JSON element property 
