import { Header } from '@components/Header';
import { Container, Content, Form } from './styles';
import { UsersThreeIcon } from '@components/UsersThreeIcon';
import { Button } from '@components/Button';
import { Hightlight } from '@components/Highlight';

export function NewGroup() {
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