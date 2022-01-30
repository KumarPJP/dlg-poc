import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';
import {Faq} from '../models/faq';
import {HttpClientTestingModule} from '@angular/common/http/testing';
describe('DataService', () => {
    let service: DataService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    beforeEach(() => {
        TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [DataService]});
        service = TestBed.inject(DataService);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new DataService(httpClientSpy);
    });

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });
    it('should have getFaqs function', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service.getFaqs).toBeTruthy();
    });
    // it('should return expected heroes (HttpClient called once)', (done : DoneFn) => {
    //     const expectedFaqs: Faq[] = [{
    //             id: "1",
    //             question: "What vehicles are covered?",
    //             answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //             showPanel: false
    //     }];
    //     httpClientSpy.get.and.returnValue(expectedFaqs);

    //     service.getFaqs().subscribe({
    //         next: (faqs: Faq[]) => {
    //           expect(faqs)
    //             .withContext('expected heroes')
    //             .toEqual(expectedFaqs);
    //           done();
    //         },
    //         error: done.fail
    //       });
    //     expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    // });
});
