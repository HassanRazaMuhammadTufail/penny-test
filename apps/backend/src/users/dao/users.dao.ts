import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IUser } from '../interface/user.interface';
import constants from '../../constants';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersDao {
    constructor(@Inject(constants.USER_MODEL) private userModel: Model<IUser>) {}

    async createUser(createUserDto: CreateUserDto) {
      const newUser = new this.userModel(createUserDto);
      const savedUser = await newUser.save();
      return savedUser;
    }

    async getUserByUsername(username: string) {
      return await this.userModel.findOne({username});
    }
}