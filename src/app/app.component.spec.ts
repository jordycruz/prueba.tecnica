import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Request, Response } from "express";
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { ReactiveFormsModule } from '@angular/forms';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        
        RouterTestingModule,
          FormsModule,
          ReactiveFormsModule,
          ErrorTailorModule.forRoot({
            errors: {
              useFactory() {
                return {
                  required: 'This field is required',
                  minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
                  invalidAddress: error => `Address not valid`
                };
              },
              deps: []
            }
          })
        ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebatecnica'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebatecnica');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pruebatecnica app is running!');
  });
});
