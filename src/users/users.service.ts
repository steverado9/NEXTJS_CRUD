import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRespository: Repository<User>
    ) {}

    //get all users
    async findall(): Promise<User[]> {
        return await this.usersRespository.find();
    }

    //get one user 
    async findOne(id: number): Promise<User | null> {
        return await this.usersRespository.findOne({ where : { id }})
    }

    //create a user
    async Create(user: User): Promise<User> {
        const newUser = this.usersRespository.create(user);
        return await this.usersRespository.save(newUser)
    }

    //update user
    async update(id: number, user: User): Promise<User | null> {
        await this.usersRespository.update(id, user);
        return await this.usersRespository.findOne( { where : { id }});
    }

    //delete user
    async delete(id: number): Promise<void> {
         await this.usersRespository.delete(id);
    }
}
