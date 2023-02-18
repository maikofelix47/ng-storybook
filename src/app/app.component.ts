import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-storybook';
  public tableCols = ['company','country', 'person'];
  public tableData = [
    {
      company: 'Microsoft',
      country: 'US',
      person: 'Bill Gates'
    },
    {
      company: 'Amazon',
      country: 'US',
      person: 'Bezos'
    },
    {
      company: 'Twitter',
      country: 'US',
      person: 'Musk'
    }
  ];
}
