import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesItemComponent } from './repositories-item.component';

describe('RepositoriesItemComponent', () => {
  let component: RepositoriesItemComponent;
  let fixture: ComponentFixture<RepositoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
