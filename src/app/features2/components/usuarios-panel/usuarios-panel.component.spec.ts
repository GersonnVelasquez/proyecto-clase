import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosPanelComponent } from './usuarios-panel.component';

describe('UsuariosPanelComponent', () => {
  let component: UsuariosPanelComponent;
  let fixture: ComponentFixture<UsuariosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
