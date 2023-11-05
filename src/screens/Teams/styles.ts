import styled, { css } from 'styled-components/native';

export const Container = styled.View`
${({ theme }) => css`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`}
    
`;

export const Content = styled.View`
    align-items: center;
    flex: 1;
    flex-direction: column;
`;