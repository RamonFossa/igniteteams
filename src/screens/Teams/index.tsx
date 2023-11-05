import { Header } from '@components/Header';
import { Container, Content } from './styles';
import { Hightlight } from '@components/Highlight';
import { TextInput } from '@components/TextInput';
import { Button } from '@components/Button';

export function Teams() {

    return (
        <Container>
            <Header
                canGoBack
            />

            <Content>

                <Hightlight
                    title='Nome da turma'
                    subTitle='adicione a galera e separe os times'
                />

                <TextInput
                    hasButton
                    placeholder='Nome do participante'
                    onChange={console.log}
                />

                <Button
                    title='Remover turma'
                    style={{ width: '100%' }}
                    type='SECONDARY'
                />

            </Content>

        </Container>
    );
}