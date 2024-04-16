import { Component } from '@angular/core';
import { Contact, contacts } from "./contacts";
@Component({
  selector: 'app-kendodropdown',
  templateUrl: './kendodropdown.component.html',
  styleUrls: ['./kendodropdown.component.css']
})
export class KendodropdownComponent {
  public areaList: Array<string> = [
    "Boston",
    "Chicago",
    "Houston",
    "Los Angeles",
    "Miami",
    "New York",
    "Philadelphia",
    "San Francisco",
    "Seattle",
  ];

  public allowCustom = true;
  public selectedValues: string = "Baseball";
  public listItems: Array<string> = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];

  public areaData: AreaData[] = [
    {
      text: "America",
      id: 1,
      areas: [
        { text: "Chicago", id: 4 },
        { text: "Los Angeles", id: 3 },
        { text: "New York", id: 2 },
        { text: "San Francisco", id: 5 },
      ],
    },
    {
      text: "Europe",
      id: 6,
      areas: [
        { text: "Amsterdam", id: 7 },
        { text: "Barcelona", id: 10 },
        { text: "London", id: 8 },
        { text: "Paris", id: 9 },
      ],
    },
  ];

  //  public listItems: Array<string> = [
  //   "Baseball",
  //   "Basketball",
  //   "Cricket",
  //   "Field Hockey",
  //   "Football",
  //   "Table Tennis",
  //   "Tennis",
  //   "Volleyball",
  // ];
  public value: any = ["Baseball"];


  public listItems1: Array<{ text: string; value: number }> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];
  public value1: any = [{ text: "Medium", value: 2 }];

  // public getContactImageUrl(contactId: string): string {
  //   return `https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/assets/contacts/${contactId}.jpg`;
  // }


  public value2: { text: string; id: number }[] = [
    { text: "Ana Trujillo", id: 2 },
  ];

  public data: JobPosition[] = [
    {
      text: "Owner",
      id: 1,
      employees: [
        { text: "Ana Trujillo", id: 2 },
        { text: "Antonio Moreno", id: 3 },
        { text: "Martín Sommer", id: 4 },
      ],
    },
    {
      text: "Order Administrator",
      id: 5,
      employees: [
        { text: "Christina Berglund", id: 6 },
        { text: "Sven Ottlieb", id: 7 },
      ],
    },
    {
      text: "Sales Manager",
      id: 8,
      employees: [{ text: "Roland Mendel", id: 9 }],
    },
  ];

  public tagMapper(tags: any[]): any[] {
    return tags.length < 3 ? tags : [tags];
  }



}
type AreaData = {
  text: string;
  id: number;
  areas: Area[];
};

type Area = {
  text: string;
  id: number;
};
type JobPosition = {
  text: string;
  id: number;
  employees: Employee[];
};
type Employee = {
  text: string;
  id: number;
};

