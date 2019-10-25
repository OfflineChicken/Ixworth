import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WelcomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ixworth-ui'`, () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ixworth-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ixworth-ui app is running!');
  });
});
