import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-custom-table',
  templateUrl: './my-custom-table.component.html',
  styleUrls: ['./my-custom-table.component.css']
})
export class MyCustomTableComponent {

  @Input() tableData: any[] = [];
  @Input() columns: string[] = [];

}
