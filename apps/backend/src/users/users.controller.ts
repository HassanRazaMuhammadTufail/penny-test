import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async signup(@Body() createUserBody: CreateUserDto) {
    try {
      return await this.usersService.signup(createUserBody);
    } catch (error) {
      if(error?.code == 11000) {
        throw new HttpException(`User with ${Object.keys(error.keyValue)[0]}: ${Object.values(error.keyValue)[0]} is already registered.`, 400);
      } else {
        throw new Error(error);
      }
    }
  }

  @Post('/login')
  login(@Body() loginUserBody: LoginUserDto) {
    return this.usersService.login(loginUserBody);
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  @Patch()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':username')
  remove(@Param('username') username: string) {
    return this.usersService.remove(username);
  }
}
