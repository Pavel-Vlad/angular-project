import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiLikeComponent } from './emoji-like.component';

describe('EmojiLikeComponent', () => {
  let component: EmojiLikeComponent;
  let fixture: ComponentFixture<EmojiLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
