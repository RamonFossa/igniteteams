import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

interface IconProps {
    weight?: string;
    color?: string;
    size?: number;
    marginRight?: number;
}

export const UsersThreeIcon = styled(UsersThree).attrs<IconProps>(({ theme, color, weight, size }) => ({
    size: size ?? 32,
    color: color ?? theme.COLORS.GREEN_700,
    weight: weight ?? 'fill'
}))`
`;