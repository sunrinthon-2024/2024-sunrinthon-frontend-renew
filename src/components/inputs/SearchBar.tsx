import { TouchableWithoutFeedback, TextInput, StyleSheet } from 'react-native';
import {
  IconBox14, Row0,
  SearchBoxGray,
  SearchBoxWhite
} from 'components/containers';
import { SearchIconPrimary } from 'assets/inputIcons';
import { palette } from 'styles';
import React, { useRef, useState } from 'react';

interface SearchBarProps {
  type?: 'gray' | 'white';
  placeholder: string;
  onPress?: () => void;
  onChange?: () => void;
}

export default function SearchBar({
  type,
  placeholder,
  onPress,
  onChange,
}: SearchBarProps) {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);

  const inputActiveHandler = () => {
    onPress && onPress();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => inputActiveHandler}>
      <Row0>
        {type === 'gray' ? (
          <SearchBoxGray>
            {!active && (
              <IconBox14>
                <SearchIconPrimary />
              </IconBox14>
            )}
            <TextInput
              ref={inputRef}
              onChange={() => {
                onChange && onChange();
              }}
              onChangeText={text => setInputValue(text)}
              value={inputValue}
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              style={localStyle.input}
              placeholder={placeholder}
              placeholderTextColor={palette.textGray}
            />
          </SearchBoxGray>
        ) : (
          <SearchBoxWhite>
            {!active && <SearchIconPrimary />}
            <TextInput
              ref={inputRef}
              onChange={() => {
                onChange && onChange();
              }}
              onChangeText={text => setInputValue(text)}
              value={inputValue}
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              style={localStyle.input}
              placeholder={placeholder}
              placeholderTextColor={palette.textGray}
            />
          </SearchBoxWhite>
        )}
      </Row0>
    </TouchableWithoutFeedback>
  );
}

const localStyle = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: 'Pretendard Variable',
    fontWeight: '500',
    fontSize: 16,
    color: palette.textBlack,
    padding: 0,
  },
});
