import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    min-height: 15px;
    max-height: 40px;
    flex-direction: row;
`;

export const FilterTitleContainer = styled.View`
    flex: 9.25;
`;

export const DataCounterContainer = styled.View`
    flex: 0.75;
    align-items: center;
    justify-content: center;
`;

export const DataCounter = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200}
    `}
`;

export interface FilterTitleProps {
    isSelected: boolean;
}

export const FilterTitleButton = styled.TouchableOpacity<FilterTitleProps>`
    ${({ theme, isSelected }) => css`
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        border-width: ${isSelected ? 1 : 0}px;
        border-color: ${theme.COLORS.GREEN_700};
        padding-vertical: 3px;
        padding-horizontal: 8px;
    `}
`;

export const FilterTitleText = styled.Text<FilterTitleProps>`
    ${({ theme, isSelected }) => css`
        text-transform: uppercase;
        color: ${isSelected ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
    `}
`;
