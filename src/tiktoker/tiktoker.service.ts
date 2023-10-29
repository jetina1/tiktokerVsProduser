import { Injectable } from '@nestjs/common';
import { CreateTiktokerDto } from './dto/create-tiktoker.dto';
import { UpdateTiktokerDto } from './dto/update-tiktoker.dto';

@Injectable()
export class TiktokerService {
  create(createTiktokerDto: CreateTiktokerDto) {
    return 'This action adds a new tiktoker';
  }

  findAll() {
    return `This action returns all tiktoker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiktoker`;
  }

  update(id: number, updateTiktokerDto: UpdateTiktokerDto) {
    return `This action updates a #${id} tiktoker`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiktoker`;
  }
}
