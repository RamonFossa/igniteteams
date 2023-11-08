import { useState } from 'react';
import { Container } from './styles';
import { FilterBar } from '@components/FilterBar';


export function ListFiltered() {
    const [selectedTab, setSelectedTab] = useState(0);

    function handleOnSelectTab(index: number) {
        setSelectedTab(index);
    }

    return (
        <Container>
            <FilterBar
                filterTitles={['time a', 'time b']}
                dataCounter={0}
                selectedIndex={selectedTab}
                onSelectTab={handleOnSelectTab}
            />

        </Container>
    )
}