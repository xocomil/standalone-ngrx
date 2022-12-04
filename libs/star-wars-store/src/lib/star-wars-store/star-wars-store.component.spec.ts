import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsStoreComponent } from './star-wars-store.component';

describe('StarWarsStoreComponent', () => {
  let component: StarWarsStoreComponent;
  let fixture: ComponentFixture<StarWarsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarWarsStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarWarsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
