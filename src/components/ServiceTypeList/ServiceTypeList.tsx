import React from 'react';
import {ServiceType} from '../../models/services';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import serviceTypeListStyle from './serviseTypeListStyle';

interface ServiceTypeListProps {
  data?: ServiceType[];
  selectedType?: ServiceType | null;
  onTypeSelect?: any;
  handleStyle?: object;
}

export function ServiceTypeList({
  data = [],
  onTypeSelect,
  selectedType,
  handleStyle = {},
}: ServiceTypeListProps) {
  const handlePress = (serviceType: ServiceType | null) => {
    onTypeSelect(serviceType);
  };
  return (
    <View>
      <Text style={serviceTypeListStyle.category}>Category</Text>
      <ScrollView
        style={[handleStyle, serviceTypeListStyle.navItemScrollContainer]}
        horizontal={true}>
        <TouchableOpacity
          key={0}
          style={[
            serviceTypeListStyle.navItem,
            {
              backgroundColor:
                selectedType && selectedType.id === 0 ? '#3875F6' : '#FFF',
            },
          ]}
          onPress={() => {
            handlePress({id: 0, logo: null, title: 'All'});
          }}>
          <Text
            style={[
              serviceTypeListStyle.navItemText,
              {
                color:
                  selectedType && selectedType.id === 0 ? '#FFF' : '#2F2F2F',
              },
            ]}>
            All
          </Text>
        </TouchableOpacity>

        {data.length
          ? data?.map(st => (
              <TouchableOpacity
                key={st.id}
                style={[
                  serviceTypeListStyle.navItem,
                  {
                    backgroundColor:
                      selectedType && selectedType.id === st.id
                        ? '#3875F6'
                        : '#FFF',
                  },
                ]}
                onPress={() => {
                  handlePress(st);
                }}>
                <Text
                  style={[
                    serviceTypeListStyle.navItemText,
                    {
                      color:
                        selectedType && selectedType.id === st.id
                          ? '#FFF'
                          : '#2F2F2F',
                    },
                  ]}>
                  {st.title}
                </Text>
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>
    </View>
  );
}
