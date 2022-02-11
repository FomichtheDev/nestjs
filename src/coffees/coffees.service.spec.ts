import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesService } from './coffees.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [CoffeesService,
        {provide: Connection, useValue: {}},
        {provide: getRepositoryToken(Flavor), useValue: {}},
        {provide: getRepositoryToken(Coffee), useValue: {}}],
    }).compile();


    service = module.get<CoffeesService>(CoffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
