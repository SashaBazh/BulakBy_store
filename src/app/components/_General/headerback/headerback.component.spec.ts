import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbackComponent } from './headerback.component';

describe('HeaderbackComponent', () => {
  let component: HeaderbackComponent;
  let fixture: ComponentFixture<HeaderbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
