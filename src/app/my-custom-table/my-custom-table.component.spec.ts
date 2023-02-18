import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomTableComponent } from './my-custom-table.component';

describe('MyCustomTableComponent', () => {
  let component: MyCustomTableComponent;
  let fixture: ComponentFixture<MyCustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCustomTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
