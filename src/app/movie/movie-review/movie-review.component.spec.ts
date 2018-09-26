import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewComponent } from './movie-review.component';

describe('MovieReviewComponent', () => {
  let component: MovieReviewComponent;
  let fixture: ComponentFixture<MovieReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});