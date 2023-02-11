import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateJogadoreDto {
  @IsOptional()
  readonly phoneNumber?: string;
  @IsNotEmpty()
  name: string;
}
