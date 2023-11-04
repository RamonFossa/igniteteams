import { Header } from '@components/Header';
import { Container, Content, Form } from './styles';
import { UsersThreeIcon } from '@components/UsersThreeIcon';
import { Button } from '@components/Button';
import { Hightlight } from '@components/Highlight';
import { TextInput } from '@components/TextInput';
import { useState, useEffect } from 'react';

export function NewGroup() {

    const [groupName, setGroupName] = useState<string>('');

    function handleOnChangeText(value: string) {
        setGroupName(value);
    }

    useEffect(() => {
        groupName.length && console.log('groupName ->', groupName);
    }, [groupName]);

    return (
        <Container>
            <Header
                canGoBack={true}
            />

            <Content>

                <Form>
                    <UsersThreeIcon
                        weight='regular'
                        size={70}
                    />

                    <Hightlight
                        subTitle='crie uma turma para adicionar pessoas'
                        title='Nova Turma'
                    />

                    <TextInput
                        placeholder='Nome da turma'
                        onChange={handleOnChangeText}
                    />

                    <Button
                        title='Criar'
                        onPress={() => console.log('AIAAI')}
                        style={{ width: '100%' }}
                    />
                </Form>

            </Content>

        </Container>
    );
}