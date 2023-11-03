import * as S from './styles';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <S.Container>
      <Header />
      <Hightlight
        title='Turmas'
        subTitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => console.log('Clicou em', item)}
          />
        )}
        ListEmptyComponent={() => (<ListEmpty message='Que tal cadastrar a primeira turma?' />)}
      />

      <Button
        title='Criar nova turma'
        onPress={() => setGroups([...groups, `Time ${groups.length + 1}`])}
      />

    </S.Container>
  );
}
