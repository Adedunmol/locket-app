import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserParams } from 'src/utils/types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async create(createUserDto: CreateUserParams) {

    const foundUser = await this.findUserByNumber(createUserDto.phone_number);

    if (foundUser) throw new ConflictException('A user exists with this number');

    const newUser = this.usersRepository.create({ ...createUserDto });
    
    const { password, ...details } = await this.usersRepository.save(newUser);

    return details;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findUserByNumber(phone_number: string) {

    return this.usersRepository.findOne({ where: { phone_number } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
