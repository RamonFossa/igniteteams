import styled from 'styled-components/native';
import { HeaderProps } from './';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View<HeaderProps>`
    width: 100%;
    justify-content: ${({ canGoBack }) => canGoBack ? 'space-between' : 'center'};
    align-items: center;
    flex-direction: row;
`;

export const BackIconContainer = styled.TouchableOpacity`
    width: 25px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme })=>({
    size: 32,
    color: theme.COLORS.WHITE
}))`

`;
