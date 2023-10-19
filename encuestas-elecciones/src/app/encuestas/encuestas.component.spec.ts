import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncuestasComponent } from './encuestas.component';

describe('EncuestasComponent', () => {
  let component: EncuestasComponent;
  let fixture: ComponentFixture<EncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el componente con un elemento app-nav', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-nav')).not.toBeNull();
  });
});
