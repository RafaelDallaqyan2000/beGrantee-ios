import React, {useCallback, useContext, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
import {uploadImageProfileStyle} from './uploadImageProfileStyle';
import {CameraIcon} from '../../../../icons';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../../../react-query/query-routes';
import {HOST, editProfileImage, getProfileInfo} from '../../../../services';
import {AuthContext} from '../../../../../App';
import {useFocusEffect} from '@react-navigation/native';
import {LoadingProfileScreen} from '../../../../LoadingScreens';
import {connect} from 'react-redux';
import {handleChange} from '../../../../store';

interface UploadImageProfileType {
  loadingUserProfileScreen: boolean;
  handleChange: (key: string, value: any) => any;
}
function UploadImageProfileComponent({
  loadingUserProfileScreen,
  handleChange,
}: UploadImageProfileType) {
  const {token} = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState('');
  const [loadingImage, setLoadingImage] = useState(false);

  const {
    data: profileInfo,
    refetch: reloadProfileInfo,
    isLoading: loadingInfo,
  } = useQuery({
    queryKey: [QueryRoute.userAllPackages],
    initialData: [],
    queryFn: () => getProfileInfo({token}),
    onSuccess: data => {
      handleChange('loadingUserProfileScreen', false);
      setImageUrl(data?.imagePath);
    },
    onError: error => {
      console.log(error, 'error from /api/profile/user/info');
      handleChange('loadingUserProfileScreen', false);
    },
  });

  const handleImagePick = (result: any) => {
    setLoadingImage(true);

    editProfileImage({token, image: result?.assets[0]})
      .then(path => {
        setLoadingImage(false);
        setImageUrl(path);
      })
      .catch(() => setLoadingImage(false));
  };

  const handleImageLibrary = async () => {
    // const result = await launchImageLibrary({mediaType: 'photo'});
    // if (result.assets) {
    //   handleImagePick(result);
    // }
  };

  useFocusEffect(
    useCallback(() => {
      if (loadingUserProfileScreen) {
        setTimeout(() => {
          handleChange('loadingUserProfileScreen', false);
        }, 3000);
      }
      reloadProfileInfo();
    }, []),
  );

  if (loadingUserProfileScreen) {
    return (
      <ScrollView>
        <LoadingProfileScreen />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={loadingInfo}
          onRefresh={reloadProfileInfo}
          progressBackgroundColor={'white'}
          colors={['#3875F6', '']}
        />
      }>
      <View style={uploadImageProfileStyle.uploadImageContainer}>
        <TouchableOpacity
          onPress={handleImageLibrary}
          style={uploadImageProfileStyle.imageContainer}
          activeOpacity={1}>
          {loadingImage ? (
            <View
              style={[uploadImageProfileStyle.img, {justifyContent: 'center'}]}>
              <ActivityIndicator color={'#FFF'} />
            </View>
          ) : (
            <Image
              resizeMode="contain"
              style={uploadImageProfileStyle.img}
              source={{
                uri: HOST + imageUrl,
              }}
            />
          )}

          <View style={uploadImageProfileStyle.cameraImage}>
            <CameraIcon />
          </View>
        </TouchableOpacity>
        <Text style={uploadImageProfileStyle.userName}>
          {profileInfo?.userName}
        </Text>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loadingUserProfileScreen: state.reducer?.loadingUserProfileScreen ?? true,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChange: (key: string, value: any) =>
      dispatch(handleChange(key, value)),
  };
};

export const UploadImageProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadImageProfileComponent);
