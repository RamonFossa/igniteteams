import * as S from './styles';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Highlight';

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Hightlight 
        title='Turmas'
        subTitle='Jogue com a sua turma'
      />
    </S.Container>
  );
}
