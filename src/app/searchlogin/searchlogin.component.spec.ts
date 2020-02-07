import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchloginComponent } from './searchlogin.component';

describe('SearchloginComponent', () => {
  let component: SearchloginComponent;
  let fixture: ComponentFixture<SearchloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
