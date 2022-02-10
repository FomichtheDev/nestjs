import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'coffee name', example: 'Latte' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'coffee brand', example: 'Nescafe' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ description: 'coffee flavors', example: ['spicy', 'sweet'] })
  @IsString({ each: true })
  readonly flavors: string[];
}
