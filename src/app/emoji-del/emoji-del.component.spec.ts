import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiDelComponent } from './emoji-del.component';

describe('EmojiDelComponent', () => {
  let component: EmojiDelComponent;
  let fixture: ComponentFixture<EmojiDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
