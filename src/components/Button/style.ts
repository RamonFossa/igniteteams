import styled from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type, disabled }) => disabled ? theme.COLORS.GRAY_200 : (type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK)};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;