import { Container, BackIconContainer, BackIcon, Logo} from './styles';

import logoImg from '@assets/logo.png';
import { CaretLeft } from 'phosphor-react-native';

export interface HeaderProps {
    canGoBack?: boolean,
}

export function Header({ canGoBack }:HeaderProps) {

    return (
        <Container canGoBack={canGoBack}>
            { 
            canGoBack && 
            <BackIconContainer
                activeOpacity={0.8}
            >
                <BackIcon />
            
            </BackIconContainer>
            }

            <Logo source={logoImg} />
        </Container>
    )
}