import {TextInput, TouchableOpacity, View} from 'react-native';
import SearchIcon from '../../icons/MainScreen/SearchIcon';
import React, {useState} from 'react';
import {searchInputStyle} from './searchInputStyle';
import {CloseIcon} from '../../icons';
import {connect} from 'react-redux';
import {handleChange} from '../../store';

function SearchInputContainer({handleMainChange}: any) {
  const [value, setValue] = useState('');

  const handleChange = (e: string) => {
    setValue(e);
  };

  const handleSubmit = () => {
    handleMainChange('searchText', value);
  };

  const handleClear = () => {
    setValue('');
    handleMainChange('searchText', '');
  };

  return (
    <View style={searchInputStyle.container}>
      <View style={searchInputStyle.containerStyle}>
        <SearchIcon style={{marginLeft: 3}} />
        <TextInput
          style={searchInputStyle.searchInput}
          placeholderTextColor={'rgba(123, 123, 123, 1)'}
          placeholder={'Search'}
          value={value}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
        />
        {value ? (
          <TouchableOpacity onPress={handleClear} style={{marginRight: 8}}>
            <CloseIcon fill="#7B7B7B" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    searchValue: state.reducer?.searchValue,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleMainChange: (key: string, value: any) =>
      dispatch(handleChange(key, value)),
  };
};

export const SearchInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInputContainer);
