import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardRulesComponent } from './gift-card-rules.component';

describe('GiftCardRulesComponent', () => {
  let component: GiftCardRulesComponent;
  let fixture: ComponentFixture<GiftCardRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftCardRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftCardRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
