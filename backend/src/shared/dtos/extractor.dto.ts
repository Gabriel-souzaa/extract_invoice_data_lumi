import { ApiProperty } from '@nestjs/swagger';

export class ExtractorDto {
  @ApiProperty({
    required: true,
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
  })
  attachment?: any[];
}
