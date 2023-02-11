import { jogadoresStub } from '../test/stubs/jogadores.stub';

export const JogadoresService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(jogadoresStub()),
  update: jest.fn().mockResolvedValue(jogadoresStub()),
  findById: jest.fn().mockResolvedValue(jogadoresStub()),
  findAll: jest.fn().mockResolvedValue([jogadoresStub()]),
  remove: jest.fn(),
});
