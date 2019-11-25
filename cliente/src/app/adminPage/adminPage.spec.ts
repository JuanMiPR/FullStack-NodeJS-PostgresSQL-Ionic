import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { adminPage } from './adminPage';

describe('adminPage', () => {
  let component: adminPage;
  let fixture: ComponentFixture<adminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [adminPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(adminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
