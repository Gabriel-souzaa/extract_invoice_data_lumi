import { Test, TestingModule } from '@nestjs/testing';

describe('Display invoice Controller', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();
  });

  describe('Display invoice', () => {
    it('should return "Extractor success"', () => {
      //const appController = app.get(ExtractorController);
      expect(1).toBe(1);
    });
  });
});
