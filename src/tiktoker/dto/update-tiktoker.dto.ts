import { PartialType } from '@nestjs/mapped-types';
import { CreateTiktokerDto } from './create-tiktoker.dto';

export class UpdateTiktokerDto extends PartialType(CreateTiktokerDto) {}
