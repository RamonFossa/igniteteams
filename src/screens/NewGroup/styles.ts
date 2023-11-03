import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    align-items: center;
    width: 100%;
`;

export const IconContainer = styled.View`

`;
