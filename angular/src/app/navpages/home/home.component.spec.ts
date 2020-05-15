import {async, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {DataService} from './data.service';


import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{provide: DataService}],
      imports: [
        HttpClientTestingModule
      ],
    })
  });


  it('should populate data', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(DataService);

    const spy = spyOn(service, 'getConfig').and.returnValue(of([{id: 2, name: 'bub'}]));

    app.populateData();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data[0].id).toBe(2);
      expect(app.data[0].name).toBe('bub');

    })

    expect(app).toBeTruthy();

  }));
});


