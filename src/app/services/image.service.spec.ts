import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImageService],
    });
    service = TestBed.inject(ImageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the logo', (done: DoneFn) => {
    const mockBlob = new Blob(); // Create a mock Blob for testing

    service.getLogo().subscribe((result: Blob) => {
      expect(result).toBeTruthy();
      done();
    });

    const req = httpTestingController.expectOne('https://avatars.githubusercontent.com/u/124091983');
    expect(req.request.method).toEqual('GET');
    req.flush(mockBlob);
  });
});
