import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWarehousePage } from './add-warehouse.page';

describe('AddWarehousePage', () => {
  let component: AddWarehousePage;
  let fixture: ComponentFixture<AddWarehousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWarehousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWarehousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
