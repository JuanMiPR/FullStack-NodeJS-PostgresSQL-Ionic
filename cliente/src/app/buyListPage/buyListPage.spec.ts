import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { buyListPage } from './buyListPage';

describe('buyListPage', () => {
  let component: buyListPage;
  let fixture: ComponentFixture<buyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [buyListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(buyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
