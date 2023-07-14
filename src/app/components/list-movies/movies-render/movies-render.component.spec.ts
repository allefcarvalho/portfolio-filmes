import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesRenderComponent } from './movies-render.component';

describe('MoviesRenderComponent', () => {
  let component: MoviesRenderComponent;
  let fixture: ComponentFixture<MoviesRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesRenderComponent]
    });
    fixture = TestBed.createComponent(MoviesRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
