import { IsNotEmpty } from 'class-validator';

export class UpdateJogadoreDto {
  @IsNotEmpty()
  readonly phoneNumber: string;
  @IsNotEmpty()
  name: string;
}
