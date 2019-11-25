import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { providersPage } from './providersPage';

describe('providersPage', () => {
  let component: providersPage;
  let fixture: ComponentFixture<providersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [providersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(providersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
