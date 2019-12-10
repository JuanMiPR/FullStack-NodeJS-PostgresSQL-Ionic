import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateWarehousePage } from './update-warehouse.page';

describe('UpdateWarehousePage', () => {
  let component: UpdateWarehousePage;
  let fixture: ComponentFixture<UpdateWarehousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWarehousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateWarehousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
