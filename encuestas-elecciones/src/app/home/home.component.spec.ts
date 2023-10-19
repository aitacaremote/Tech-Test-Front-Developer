import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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

  it('debería renderizar el componente con un elemento app-map', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-map')).not.toBeNull();
  });

  it('debería renderizar el componente con un elemento app-carrousel', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-carrousel')).not.toBeNull();
  });

  it('debería renderizar el componente con un elemento app-table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-table')).not.toBeNull();
  });
});
