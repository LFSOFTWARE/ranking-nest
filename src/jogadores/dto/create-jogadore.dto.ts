import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateJogadoreDto {
  @IsNotEmpty()
  readonly phoneNumber: string;
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  name: string;
}
