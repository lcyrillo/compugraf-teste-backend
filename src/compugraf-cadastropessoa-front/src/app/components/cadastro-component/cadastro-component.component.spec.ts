import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponetComponent } from './cadastro-component.component';

describe('CadastroComponetComponent', () => {
  let component: CadastroComponetComponent;
  let fixture: ComponentFixture<CadastroComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
