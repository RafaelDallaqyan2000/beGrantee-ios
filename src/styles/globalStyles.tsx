import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    height: window.height,
  },
  screenContainer: {
    height: window.height,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  screenTitle: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 24,
    color: '#324054',
    fontWeight: '500',
    marginBottom: 4,
    lineHeight: 32,
    letterSpacing: 0.48,
    textAlign: 'center',
  },
  text: {
    color: '#9A9A9A',
    textAlign: 'center',
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
  },
  title: {
    fontFamily: 'NotoSansArmenian-Bold',
    fontSize: 24,
    color: '#2F2F2F',
    fontWeight: '700',
    marginBottom: 16,
    lineHeight: 32,
    letterSpacing: 0.2,
  },
  topic: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    color: '#595959',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: '#444444',
  },
  input: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    color: 'black',
  },
  inputOnFocus: {
    backgroundColor: 'green',
  },
  flexRowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexRowAround: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#515151',
    borderRadius: 8,
    // left: (window.width - 365) / 2,
    width: 315,
    alignItems: 'center',
    // position: 'absolute',
    bottom: 20,
  },
  buttonContainer: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    padding: 12,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },
  serviceTypeBtn: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 24,
    color: '#FFF',
    height: 24,
    width: 66,
    borderRadius: 8,
    marginTop: 5,
  },
});

export default globalStyles;
