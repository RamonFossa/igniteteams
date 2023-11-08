import { FlatList, View } from 'react-native';
import { Container, DataCounterContainer, DataCounter, FilterTitleContainer, FilterTitleButton, FilterTitleText } from './styles';

interface FilterBarProps {
    filterTitles?: string[];
    dataCounter?: number;
    selectedIndex: number;
    onSelectTab: (value: number) => void;
}

export interface FilterTitleProps {
    isSelected: boolean;
    title: string;
    onPress: () => void;
}

export function FilterBar({ dataCounter = 0, filterTitles = [], selectedIndex, onSelectTab }: FilterBarProps) {

    return (
        <Container>
            <FilterTitleContainer>
                <FlatList
                    horizontal
                    data={filterTitles}
                    renderItem={({ item, index }) => (
                        <FilterTitle title={item} isSelected={selectedIndex === index} onPress={() => onSelectTab(index)} />
                    )}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                />
            </FilterTitleContainer>
            <DataCounterContainer>
                <DataCounter>
                    {dataCounter}
                </DataCounter>
            </DataCounterContainer>
        </Container>
    )
}

function FilterTitle({ isSelected, title, onPress }: FilterTitleProps) {

    return (
        <FilterTitleButton isSelected={isSelected} onPress={onPress} >
            <FilterTitleText isSelected={isSelected}>
                {title}
            </FilterTitleText>
        </FilterTitleButton>
    )
}