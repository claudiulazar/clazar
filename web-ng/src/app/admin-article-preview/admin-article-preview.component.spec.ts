import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlePreviewComponent } from './admin-article-preview.component';

describe('AdminArticlePreviewComponent', () => {
  let component: AdminArticlePreviewComponent;
  let fixture: ComponentFixture<AdminArticlePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticlePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
