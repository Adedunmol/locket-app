import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    create: jest.fn(dto => {
      return {
        id: Date.now(),
        ...dto
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).overrideProvider(UsersService).useValue(mockUsersService).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const dto = { country_code: '+234', phone_number: '1234567890', password: 'password' }

    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      country_code: dto.country_code,
      phone_number: dto.phone_number,
      password: dto.password
    })

    expect(mockUsersService.create).toHaveBeenCalled()
  })
});
