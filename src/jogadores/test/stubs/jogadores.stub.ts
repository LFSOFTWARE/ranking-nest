import { Jogador } from 'src/jogadores/schema/jogadore.schema';

export const jogadoresStub = (): Jogador => {
  return {
    _id: '1',
    phoneNumber: '11 948170079',
    email: 'luiz@gmail.com',
    name: 'luiz fernando',
    ranking: '1955',
    positionRanking: 1,
    urlFotoJogador: 'url:http://localhost',
  };
};

export const uptaedJogadoresStub = (): Jogador => {
  return {
    _id: '1',
    phoneNumber: '11 948170079',
    email: 'luiz@gmail.com',
    name: 'luiz 999',
    ranking: '1955',
    positionRanking: 1,
    urlFotoJogador: 'url:http://localhost',
  };
};
