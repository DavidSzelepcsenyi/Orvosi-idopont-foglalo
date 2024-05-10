import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocInfComponent } from './doc-inf.component';

describe('DocInfComponent', () => {
  let component: DocInfComponent;
  let fixture: ComponentFixture<DocInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocInfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
