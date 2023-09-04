import { Container, Title, ButtonTypeStyleProps } from './style';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Button({title, type = 'PRIMARY', ...rest}: Props) {
    return (
        <Container
        type={type}
        {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}