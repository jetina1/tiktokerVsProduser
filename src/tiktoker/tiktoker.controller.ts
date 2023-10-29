import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiktokerService } from './tiktoker.service';
import { CreateTiktokerDto } from './dto/create-tiktoker.dto';
import { UpdateTiktokerDto } from './dto/update-tiktoker.dto';

@Controller('tiktoker')
export class TiktokerController {
  constructor(private readonly tiktokerService: TiktokerService) {}

  @Post()
  create(@Body() createTiktokerDto: CreateTiktokerDto) {
    return this.tiktokerService.create(createTiktokerDto);
  }

  @Get()
  findAll() {
    return this.tiktokerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiktokerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiktokerDto: UpdateTiktokerDto) {
    return this.tiktokerService.update(+id, updateTiktokerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiktokerService.remove(+id);
  }
}
