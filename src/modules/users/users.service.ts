import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const users = this.create(createUserDto);
    return {
      status: HttpStatus.CREATED,
      message: 'User created successfully',
      data: users,
    }
  }

  findAll() {
    const users = this.findAll();
    return {
      status: HttpStatus.OK,
      message: 'Users fetch successfully',
      data: users,
    }
  }

  findOne(id: number) {
    const user = this.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'User fetch successfully',
      data: user,
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.update(id, updateUserDto);
    return {
      status: HttpStatus.OK,
      message: 'User updated successfully',
      data: user,
    }
  }

  remove(id: number) {
    const user = this.remove(id);
    return {
      status: HttpStatus.OK,
      message: 'User removed successfully',
      data: user,
    }
  }
}
