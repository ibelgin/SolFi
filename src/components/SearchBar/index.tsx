import React, {memo, SetStateAction, Dispatch} from 'react';
import {StyleSheet, View, TextInput, ViewStyle} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Theme from 'style/Theme';
import {Colors} from 'configs';

interface SearchBarProps {
  value: string;
  placeholder: string;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  onChange: Dispatch<SetStateAction<string>>;
}

const SearchBar = memo(
  ({value, style, onChange, placeholder, textStyle}: SearchBarProps) => (
    <View style={[styles.textInputFocus, style]}>
      <EvilIcons name="search" size={20} />
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        editable
        autoFocus
        style={[styles.headerSearch, textStyle]}
      />
    </View>
  ),
);

export default SearchBar;

const styles = StyleSheet.create({
  headerSearch: {
    ...Theme.flexRow,
    padding: 15,
  },
  textInputFocus: {
    minHeight: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: Colors.Primary,
    marginHorizontal: 20,
    ...Theme.flexRow,
    color: Colors.Gray,
  },
});
