import { UpdateJogadoreDto } from './../dto/update-jogadore.dto';
import { CreateJogadoreDto } from './../dto/create-jogadore.dto';
import { JogadoresController } from '../jogadores.controller';
import { Test } from '@nestjs/testing';
import { JogadoresService } from '../jogadores.service';
import { jogadoresStub, uptaedJogadoresStub } from './stubs/jogadores.stub';
import { Jogador } from '../schema/jogadore.schema';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

jest.mock('../jogadores.service.ts');

describe('jogadoresController', () => {
  let app: INestApplication;
  let JogadorController: JogadoresController;
  let JogadorService: JogadoresService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [JogadoresController],
      providers: [JogadoresService],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    JogadorController = module.get<JogadoresController>(JogadoresController);
    JogadorService = module.get<JogadoresService>(JogadoresService);
    jest.clearAllMocks();
  });

  it('Should be defined', () => {
    expect(JogadorService).toBeDefined();
    expect(JogadorController).toBeDefined();
  });
  describe('Unit test', () => {
    describe('findById', () => {
      let jogador: Jogador;
      const id = jogadoresStub()._id;

      beforeEach(async () => {
        jogador = await JogadorController.findById(id);
      });

      it('should call jogadoressService with the same id', async () => {
        expect(JogadorService.findById).toBeCalledWith(id);
      });

      it('should return an jogador', async () => {
        expect(jogador).toEqual(jogadoresStub());
      });
    });
    describe('findAll', () => {
      let jogadores: Jogador[];

      beforeEach(async () => {
        jogadores = await JogadorController.findAll();
      });

      it('should call jogadoressService with the findAllMethod', async () => {
        expect(JogadorService.findAll).toBeCalledTimes(1);
      });

      it('should return an array of jogadores', async () => {
        expect(jogadores).toEqual([jogadoresStub()]);
      });
    });
    describe('create', () => {
      let jogador: Jogador;
      let createJogadoreDto: CreateJogadoreDto;
      beforeEach(async () => {
        createJogadoreDto = {
          phoneNumber: jogadoresStub().phoneNumber,
          email: jogadoresStub().email,
          name: jogadoresStub().name,
        };
        jogador = await JogadorController.criarJogador(createJogadoreDto);
      });
      it('Should call jogaroesService with the same dto', async () => {
        expect(JogadorService.create).toBeCalledWith(createJogadoreDto);
      });

      it('Should create a jogador and return him', async () => {
        expect(jogador).toEqual(jogadoresStub());
      });
    });
    describe('update', () => {
      const id = jogadoresStub()._id;
      let updateJogadoreDto: UpdateJogadoreDto;
      let jogador: Jogador;

      beforeEach(async () => {
        updateJogadoreDto = {
          name: 'luiz 999',
        };
        jest
          .spyOn(JogadorService, 'update')
          .mockResolvedValue(uptaedJogadoresStub());
        jogador = await JogadorController.atualizarJogador(
          updateJogadoreDto,
          id,
        );
      });

      it('should calld jogadoresService with the same id and dto', async () => {
        expect(JogadorService.update).toBeCalledWith(updateJogadoreDto, id);
      });
      it('should return an jogador with the updated name', async () => {
        expect(jogador).toEqual(uptaedJogadoresStub());
      });
    });
  });
  afterAll(async () => {
    await app.close();
  });
});
