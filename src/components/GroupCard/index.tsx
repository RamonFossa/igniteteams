import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';
import { UsersThreeIcon } from '@components/UsersThreeIcon';

type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <UsersThreeIcon />
            <Title>
                {title}
            </Title>
        </Container>

    )
}