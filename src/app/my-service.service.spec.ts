
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
} from 'vitest';

import { ngMocks, MockBuilder } from 'ng-mocks';


import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

// ngMocks.faster();

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeAll(async () => {
    await MockBuilder(MyServiceService)
      .mock(MyServiceService, { method1: () => 'mock'});
  });

  beforeEach(() => {
    service = ngMocks.get(MyServiceService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.method1()).toContain('mock');
  });
});
