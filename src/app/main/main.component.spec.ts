import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Validators } from '@angular/forms';
import { GithubService } from '../shared/services/github/github.service';
import { User } from '../shared/models/github';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let service: GithubService;
  let userModel: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [SharedModule, RouterTestingModule]
    }).compileComponents();

    service = TestBed.get(GithubService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should be init form`, () => {
    spyOn(component, 'initForm');
    component.initForm();

    expect(component.initForm).toHaveBeenCalled();
  });

  it(`should execute get user`, () => {
    spyOn(component, 'getUser');
    component.getUser();

    expect(component.getUser).toHaveBeenCalled();
  });

  it(`should get valid user`, () => {
    spyOn(component, 'initForm');
    spyOn(component, 'getUser');

    component.initForm();
    component.getUser();

    component.githubUsernameForm = component.fb.group({
      username: ['facebook', Validators.required]
    });

    spyOn(service, 'getUser').and.returnValue(Promise.resolve(userModel));
    service.getUser(component.githubUsernameForm.value);

    fixture.detectChanges();

    expect(service.getUser).toHaveBeenCalled();
    expect(service.getUser).toContain(userModel);
  });
});
