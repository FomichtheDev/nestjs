import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const result = +value;

    if(isNaN(result)) {
      throw new BadRequestException(`Validation failed. "${result}" is not an integer`)
    }
    return value;
  }
}
