import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  const currentDate = new Date();

  const mockUsersRepository = {
    create: jest.fn(dto => dto),
    save: jest.fn(user => Promise.resolve({ id: Date.now(), date_joined: currentDate, ...user })),
    findByNumber: jest.fn(phone_number => null),
    findOne: jest.fn(query => null)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {
        provide: getRepositoryToken(User),
        useValue: mockUsersRepository
      }],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user record and return the new record', async () => {
    const dto = { password: 'password12', phone_number: '1234567890', country_code: '+234' }
    expect(await service.create(dto)).toEqual({
      id: expect.any(Number),
      phone_number: dto.phone_number,
      country_code: dto.country_code,
      date_joined: currentDate
    })
  })
});
