import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { productListPage } from './productListPage';

describe('productListPage', () => {
  let component: productListPage;
  let fixture: ComponentFixture<productListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [productListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(productListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
