import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sparrow',
  templateUrl: './sparrow.component.html',
  styleUrls: ['./sparrow.component.css']
})
export class SparrowComponent implements OnInit {
  array=[
    {
      name:'navin',
      age:21,
      city:'chengalpattu',
      edit:false
    },
    {
      name:'goutham',
      age:21,
      city:'chengalpattu',
      edit:false
    },
    {
      name:'arun',
      age:21,
      city:'chengalpattu',
      edit:false
    },
    {
      name:'sparrow',
      age:21,
      city:'chengalpattu',
      edit:false 
    },
    {
      name:'pravin',
      age:23,
      city:'bahrain',
      edit:false
    },
    {
      name:'johnny depp',
      age:56,
      city:'washington dc',
      edit:false
    },
    {
      name:'will smith',
      age:48,
      city:'new york',
      edit:false
    },
    {
      name:'eminem',
      age:30,
      city:'new york',
      edit:false
    },
    {
      name:'charile puth',
      age:28,
      city:'washington dc',
      edit:false
    },
    {
      name:'jim carry',
      age:50,
      city:'washington dc',
      edit:false
    }
  ]

  constructor( private router: Router ) { }
  detailEdit(index: number) {
    console.log('Editing');
    this.array[index].edit = !this.array[index].edit;
    this.router.navigate(['']);
  }
  deleteRow(index){
  console.log("row deleted");
    this.array.splice(index, 1);
}
  ngOnInit() {
  }

}
