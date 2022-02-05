import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHsitoricoComponent } from './listado-hsitorico.component';

describe('ListadoHsitoricoComponent', () => {
  let component: ListadoHsitoricoComponent;
  let fixture: ComponentFixture<ListadoHsitoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoHsitoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoHsitoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
