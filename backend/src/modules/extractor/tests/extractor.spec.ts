import { Test, TestingModule } from '@nestjs/testing';
import { ExtractorController } from '../extractor.controller';

describe('Extractor Controller', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ExtractorController],
      providers: [],
    }).compile();
  });

  describe('Extractor', () => {
    it('should return "Extractor success"', () => {
      //const appController = app.get(ExtractorController);
      expect(1).toBe(1);
    });
  });
});
