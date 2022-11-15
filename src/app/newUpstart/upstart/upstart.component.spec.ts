import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstartComponent } from './upstart.component';

describe('UpstartComponent', () => {
  let component: UpstartComponent;
  let fixture: ComponentFixture<UpstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpstartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
