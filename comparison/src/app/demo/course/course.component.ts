import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
export interface Item {
  imageUrl: string;
  heading: string;
  description: string;
  applicableTo: 'Ship' | 'Building';
  status: string;
  date: string;
  tags: string[];
  unitOrChapters: string;
  isActive: boolean;
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  public gridData: Item[] = [
    {
      imageUrl: '../../../assets/crewing.png',
      heading: 'Crewing PAL',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
      applicableTo: 'Ship',
      status: 'Published',
      // date: new Date(),
      date: '17-Aug-2024',
      tags: ['Tag1', 'Tag2'],
      unitOrChapters: '4/10',
      isActive: true
    },
    {
      imageUrl: '../../../assets/payroll.png',
      heading: 'Payroll PAL',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
      applicableTo: 'Building',
      status: 'Draft',
      date: '17-Aug-2024',
      tags: ['Tag1', 'Tag2'],
      unitOrChapters: '4/10',
      isActive: false
    },
    {
      imageUrl: '../../../assets/purchase.png',
      heading: 'Purchase',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
      applicableTo: 'Building',
      status: 'Draft',
      date: '17-Aug-2024',
      tags: ['Tag1', 'Tag2'],
      unitOrChapters: '4/10',
      isActive: false
    }
  ];

 

  public editItem(dataItem: any): void {
    console.log('Edit item:', dataItem);
    // Add your edit logic here
  }

  public publishItem(dataItem: any): void {
    console.log('Publish item:', dataItem);
    // Add your publish logic here
  }

  public deleteItem(dataItem: any): void {
    console.log('Delete item:', dataItem);
    // Add your delete logic here
  }

  public printItem(dataItem: any): void {
    console.log('Print item:', dataItem);
    // Add your print logic here
  }
  public onToggle(dataItem: any): void {
    console.log('Toggle changed:', dataItem);
    // Perform any additional logic here
  }
}
