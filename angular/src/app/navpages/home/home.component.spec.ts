import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {DataService} from './data.service';


import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{provide: DataService}],
      imports: [
        HttpClientTestingModule
      ],
    })
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    service = fixture.debugElement.injector.get(DataService);
  });


  it('should populate data', async(() => {
    const spy = spyOn(service, 'getConfig').and.returnValue(of([{id: 2, name: 'bub'}]));
    component.populateData();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data[0].id).toBe(2);
      expect(component.data[0].name).toBe('bub');

    })

    expect(component).toBeTruthy();

  }));
});


