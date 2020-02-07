import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistcollectionComponent } from './artistcollection.component';

describe('ArtistcollectionComponent', () => {
  let component: ArtistcollectionComponent;
  let fixture: ComponentFixture<ArtistcollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistcollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
