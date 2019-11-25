import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { buyPage } from './buyPage';

describe('buyPage', () => {
  let component: buyPage;
  let fixture: ComponentFixture<buyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [buyPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(buyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
