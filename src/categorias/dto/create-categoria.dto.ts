import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Evento } from './../interface/categoria.interface';

export class CreateCategoriaDto {
  @IsNotEmpty()
  @IsString()
  readonly Categoria: string;

  @IsString()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;
}
