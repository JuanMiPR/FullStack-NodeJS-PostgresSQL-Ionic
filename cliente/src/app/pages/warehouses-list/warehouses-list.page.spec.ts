import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarehousesListPage } from './warehouses-list.page';

describe('WarehousesListPage', () => {
  let component: WarehousesListPage;
  let fixture: ComponentFixture<WarehousesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarehousesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
