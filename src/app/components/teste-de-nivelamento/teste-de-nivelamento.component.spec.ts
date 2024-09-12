import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDeNivelamentoComponent } from './teste-de-nivelamento.component';

describe('TesteDeNivelamentoComponent', () => {
  let component: TesteDeNivelamentoComponent;
  let fixture: ComponentFixture<TesteDeNivelamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteDeNivelamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteDeNivelamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
