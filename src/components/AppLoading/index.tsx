import { ActivityIndicator, View as Container } from 'react-native';
import { useTheme } from 'styled-components';

export function AppLoading() {

    const theme = useTheme();
    
    return (
        <Container
            style={{
                backgroundColor: theme.COLORS.GRAY_400,
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <ActivityIndicator 
            size={70} 
            color={theme.COLORS.GREEN_500}
            />

        </Container>
    )
}