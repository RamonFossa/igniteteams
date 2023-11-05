import { useState } from 'react';
import { Button, Container, Input, PlusIcon } from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps as RNTextInputProps } from 'react-native';

interface TextInputProps {
    placeholder?: string;
    hasButton?: boolean;
    onChange: (text: string) => void;
}

export function TextInput({ placeholder, hasButton = false, onChange: onChangeProp, ...rest }: TextInputProps & RNTextInputProps) {
    const theme = useTheme();

    const [buttonColor, setButtonColor] = useState<string>(theme.COLORS.GRAY_300);
    const [text, setText] = useState<string>('');

    function onChange(text: string) {
        if (!hasButton) onChangeProp(text);
        setText(text);
        setButtonColor(text.length > 0 ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_300);
    }

    function onClickButton() {
        onChangeProp(text);
        setText('');
        setButtonColor(theme.COLORS.GRAY_300);
    }

    return (
        <Container>
            <Input
                placeholder={placeholder}
                placeholderTextColor={theme.COLORS.GRAY_300}
                autoCapitalize='words'
                value={text}
                cursorColor={theme.COLORS.GREEN_700}
                onChangeText={onChange}
                {...rest}
            />

            {
                hasButton &&
                <Button
                    disabled={buttonColor === theme.COLORS.GRAY_300}
                    onPress={onClickButton}
                >
                    <PlusIcon
                        color={buttonColor}
                    />
                </Button>
            }
        </Container>
    )
}