import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsListPageAdmin } from './products-list-Admin.page';

describe('ProductsListPage', () => {
  let component: ProductsListPageAdmin;
  let fixture: ComponentFixture<ProductsListPageAdmin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListPageAdmin ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListPageAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
