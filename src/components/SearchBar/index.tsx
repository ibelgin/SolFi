import React, {memo, SetStateAction, Dispatch} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Theme from 'style/Theme';
import {Colors} from 'configs';

interface SearchBarProps {
  value: string;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const SearchBar = memo(({value, onChange, placeholder}: SearchBarProps) => (
  <View style={styles.textInputFocus}>
    {<EvilIcons name="search" size={20} />}
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      editable
      style={styles.headerSearch}
      autoFocus
    />
  </View>
));

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
    margin: 20,
    borderColor: Colors.Primary,
    ...Theme.flexRow,
  },
});
