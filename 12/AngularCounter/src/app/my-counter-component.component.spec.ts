import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterComponentComponent } from './my-counter-component.component';

describe('MyCounterComponentComponent', () => {
  let component: MyCounterComponentComponent;
  let fixture: ComponentFixture<MyCounterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCounterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
