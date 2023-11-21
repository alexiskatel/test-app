import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptageComponent } from './cryptage.component';

describe('CryptageComponent', () => {
  let component: CryptageComponent;
  let fixture: ComponentFixture<CryptageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptageComponent]
    });
    fixture = TestBed.createComponent(CryptageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
