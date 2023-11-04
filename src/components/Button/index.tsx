import { Container, Title, ButtonTypeStyleProps } from './style';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    disabled?: boolean;
}

export function Button({ title, disabled = false, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container
            type={type}
            disabled={disabled}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}