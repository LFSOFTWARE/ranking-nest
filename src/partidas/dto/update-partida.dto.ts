import { IsNotEmpty } from 'class-validator';

export class UpdatePartidaDto {
  @IsNotEmpty()
  readonly phoneNumber: string;
  @IsNotEmpty()
  name: string;
}
