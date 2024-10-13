import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersDao } from './dao/users.dao';
import { generateJwtToken } from '../utils/jwt.utils';

@Injectable()
export class UsersService {
  constructor(private readonly usersDao: UsersDao) {}

  async signup(createUserDto: CreateUserDto) {
    return await this.usersDao.createUser(createUserDto);
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersDao.getUserByUsername(loginUserDto.username);
    if (!user) {
      throw new HttpException(`Incorrect username or password.`, 400);
    }
    const isValidPassword = await user.isValidPassword(loginUserDto.password)
    if (!isValidPassword) {
      throw new HttpException(`Incorrect username or password.`, 400);
    }
    const { name, username, email, password } = user;
    const token = generateJwtToken({
      email: user.email,
      username: user.username,
      name: user.name,
      sub: user._id.toString(),
    });
    return {
      name,
      username,
      email,
      token, 
    };
  }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(username: string) {
    return `This action removes a #${username} user`;
  }
}
