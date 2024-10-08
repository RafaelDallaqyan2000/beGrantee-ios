import {OpacityMoreLessButton} from '../../OpacityMoreLessButton';
import {Text, TouchableOpacity, View} from 'react-native';
import {serviceScreenStyle} from '../../serviceScreenStyle';
import DropUpDownIcon from '../../../../icons/ServiceDetails/DropUpDownIcon';
import React from 'react';
import {connect} from 'react-redux';

type MoreLessBtnType = {
  showMoreInServiceScreen: boolean;
  handleBtnClick: () => any;
};

function MoreLessBtnComponent({
  showMoreInServiceScreen,
  handleBtnClick,
}: MoreLessBtnType) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
      }}>
      {showMoreInServiceScreen ? <OpacityMoreLessButton /> : null}
      <View style={serviceScreenStyle.showMoreContainer} />
      <TouchableOpacity
        style={serviceScreenStyle.showMoreButton}
        onPress={handleBtnClick}>
        <Text style={serviceScreenStyle.showMoreButtonText}>
          Show {showMoreInServiceScreen ? 'More' : 'Less'}
        </Text>
        <View
          style={{
            transform: [{rotateX: showMoreInServiceScreen ? '180deg' : '0deg'}],
          }}>
          <DropUpDownIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    showMoreInServiceScreen: state.reducer?.showMoreInServiceScreen,
  };
};
export const MoreLessBtn = connect(mapStateToProps, null)(MoreLessBtnComponent);
