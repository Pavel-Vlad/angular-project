import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiAllComponent } from './emoji-all.component';

describe('EmojiAllComponent', () => {
  let component: EmojiAllComponent;
  let fixture: ComponentFixture<EmojiAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
