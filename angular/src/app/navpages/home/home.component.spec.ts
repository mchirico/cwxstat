import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {DataService} from './data.service';

import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let dataServiceResult;

  const dataServiceStub = jasmine.createSpyObj('DataService',
    ['getConfig']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{provide: DataService, useValue: dataServiceStub}],
      imports: [
        HttpClientTestingModule

      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataServiceResult = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get called', () => {

    component.populateData()
   // expect(dataServiceResult.getConfig.calls.count()).toBeGreaterThan(-1);
  })

});
