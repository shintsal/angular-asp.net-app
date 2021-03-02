import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Property: Array<any> = [
    {
    "Id":1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
    },
    {
    "Id":2,
    "Name": "Erose Villa",
    "Type": "House",
    "Price": 12000
    },
    {
    "Id":3,
    "Name": "Birla House",
    "Type": "House",
    "Price": 11400
    },
    {
    "Id":4,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
    },
    {
    "Id":5,
    "Name": "Macro Home",
    "Type": "House",
    "Price": 14300
    },
    {
    "Id":6,
    "Name": "Pearl White House",
    "Type": "House",
    "Price": 18000
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
