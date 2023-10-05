import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDirectoryComponent } from './manage-directory.component';

describe('ManageDirectoryComponent', () => {
  let component: ManageDirectoryComponent;
  let fixture: ComponentFixture<ManageDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDirectoryComponent]
    });
    fixture = TestBed.createComponent(ManageDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
