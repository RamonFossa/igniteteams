import styled from 'styled-components/native';
import { Plus } from 'phosphor-react-native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    width: 100%;
    margin-bottom: 20px;
    height: 50px;
    align-items: center;
    flex-direction: row;
    padding-vertical: 5px;
    padding-horizontal: 10px;
    border-radius: 5px;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Button = styled.TouchableOpacity`
    height: 20px;
    width: 20px;
    height: 100%;
    width: 10%;
    justify-content: center;
    align-items: center;
`;

export const PlusIcon = styled(Plus).attrs(({ theme, color }) => ({
    size: 32,
    color: color
}))`
`;