import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        justify-content: center;
        flex-direction: row;
        width: 100%;
    `}
`;
