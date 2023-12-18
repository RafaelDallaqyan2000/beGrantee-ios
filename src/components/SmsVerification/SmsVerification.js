/*
 * @Author: shixiaoquan
 * @Date:   2018-03-20 17:48:11
 * @Last Modified by: Edmond.Shi
 * @Last Modified time: 2020-05-22 10:07:50
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Keyboard,
  TextInput,
  TouchableOpacity,
  AppState,
  Platform,
} from 'react-native';

import CodeView from './component/CodeView';
import styles from './styles';
import {
  Colors,
  Constant,
  getScreenWidth,
  getCodeArray,
  Constants,
} from './util';

export class AppStateService {
  static instance;

  static STATE_ACTIVE = 'active';
  static STATE_INACTIVE = 'inactive';
  static STATE_BACKGROUND = 'background';
  static STATE_NOT_LAUNCHED = 'not_launched';

  previousState = AppStateService.STATE_NOT_LAUNCHED;
  currentState = AppStateService.STATE_ACTIVE;

  handlers = {};

  appLaunchId = 0;

  /**
   * @returns {AppStateService}
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new AppStateService();
    }

    return this.instance;
  }

  static init = () => {
    // This func need to be call in the App.js, it's just here to create the instance
    const instance = AppStateService.getInstance();

    instance.appLaunchId = new Date().getTime() / 1000;
  };

  handleAppStateChange = nextState => {
    if (nextState !== this.currentState) {
      this.previousState = this.currentState;
      this.currentState = nextState;

      for (const [key, handler] of Object.entries(this.handlers)) {
        handler(nextState);
      }
    }
  };

  getCurrentState = () => {
    return this.currentState;
  };

  getPreviousState = () => {
    return this.previousState;
  };

  addStateHandler = (key, handler) => {
    this.handlers[key] = handler;
  };

  hasStateHandler = key => {
    if (this.handlers[key]) {
      return true;
    }

    return false;
  };

  removeStateHandler = key => {
    delete this.handlers[key];
  };
}

export class SmsVerification extends Component {
  constructor(props) {
    super(props);
    const {verifyCodeLength, autoFocus, initialCodes} = props;
    const codes = initialCodes.filter(item => {
      const str = `${item}`.replace(/ /g, '');
      if (str) {
        return true;
      }
      return false;
    });
    const codeArray = getCodeArray(codes, verifyCodeLength);
    const reducer = (accumulator, currentValue) =>
      `${accumulator}${currentValue}`;
    this.state = {
      text: codes.reduce(reducer),
      codeArray,
      coverBGColorList: this.getCoverBGColorList(codeArray, verifyCodeLength),
      focused: autoFocus,
    };
    // 当前输入的code个数
    this.curCodeLength = codes.length;
  }

  addStateHandler = (key, handler) => {
    this.handlers[key] = handler;
  };
  removeStateHandler = key => {
    delete this.handlers[key];
  };
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide.bind(this),
    );
    AppStateService.getInstance().addStateHandler(
      'change',
      this.onAppStateChange,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    AppStateService.getInstance().removeStateHandler('change');
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  onAppStateChange = nextAppState => {
    if (Platform.OS === 'android') {
      if (nextAppState === 'background') {
        this.preFocused = this.state.focused;
      } else if (nextAppState === 'active' && this.preFocused) {
        this.setState({focused: true});
      }
    }
  };

  onChangeText = text => {
    clearTimeout(this.timeout);
    const {verifyCodeLength = Constant.verifyCodeLength, onInputChangeText} =
      this.props;
    // console.log('text:', text)
    const codeLength = text.length;
    if (codeLength === 0) {
      const codeArray = getCodeArray([], verifyCodeLength);
      this.curCodeLength = 0;
      onInputChangeText && onInputChangeText(text);
      this.setState({
        text: '',
        codeArray,
        coverBGColorList: this.getCoverBGColorList(codeArray, verifyCodeLength),
      });
    } else {
      let codeArray = [];
      codeArray = text.split('');
      // add
      if (codeLength > this.curCodeLength) {
        if (
          isNaN(codeArray[codeLength - 1]) ||
          codeArray[codeLength - 1] === ' '
        ) {
          // console.log('1 codeArray:', codeArray);
          codeArray = codeArray.filter(code => !isNaN(code) && code !== ' ');
          // console.log('2 codeArray:', codeArray)
          const reducer = (accumulator, currentValue) =>
            `${accumulator}${currentValue}`;
          const codeText =
            codeArray.length > 0 ? codeArray.reduce(reducer) : '';
          this.showAlert(codeText, codeArray, codeLength);
        } else {
          if (codeLength === verifyCodeLength) {
            if (this.props.onInputCompleted) {
              this.props.onInputCompleted(text);
            }
          }
          codeArray = getCodeArray(codeArray, verifyCodeLength);
          this.curCodeLength = codeLength;
          onInputChangeText && onInputChangeText(text);
          this.setState(
            {
              text,
              codeArray,
              coverBGColorList: this.getBeforeCoverBGColorList(
                codeArray,
                verifyCodeLength,
              ),
            },
            () => {
              this.timeout = setTimeout(
                () =>
                  this.setState({
                    codeArray,
                    coverBGColorList: this.getCoverBGColorList(
                      codeArray,
                      verifyCodeLength,
                    ),
                  }),
                500,
              );
            },
          );
        }
      } else {
        // minus
        codeArray = getCodeArray(codeArray, verifyCodeLength);
        this.curCodeLength = codeLength;
        onInputChangeText && onInputChangeText(text);
        this.setState({
          text,
          codeArray,
          coverBGColorList: this.getCoverBGColorList(
            codeArray,
            verifyCodeLength,
          ),
        });
      }
    }
  };

  getBeforeCoverBGColorList = (codeArray, verifyCodeLength) => {
    const coverBGColorList = [];
    const count = codeArray.filter(code => code !== '').length;
    for (let i = 0; i < verifyCodeLength; i += 1) {
      if (codeArray[i] === '' || i === count - 1) {
        coverBGColorList.push('transparent');
      } else {
        const {coverColor: color} = this.props;
        coverBGColorList.push(color);
      }
    }
    return coverBGColorList;
  };

  getCoverBGColorList = (codeArray, verifyCodeLength) => {
    const coverBGColorList = [];
    for (let i = 0; i < verifyCodeLength; i += 1) {
      if (codeArray[i] === '') {
        coverBGColorList.push('transparent');
      } else {
        const {coverColor: color} = this.props;
        coverBGColorList.push(color);
      }
    }
    return coverBGColorList;
  };

  keyboardDidShow() {
    this.keyboardShow = true;
    if (this.TextInputFocused) {
      this.setState({focused: true});
    }
    // this.setState({ focused: true });
    // this.focused = false;
  }

  keyboardDidHide() {
    // this.TextInputFocused = false;
    this.keyboardShow = false;
    if (this.state.focused) {
      this.setState({focused: false});
    }
  }

  reset = () => {
    const {verifyCodeLength = Constant.verifyCodeLength} = this.props;
    const codeArray = getCodeArray([], verifyCodeLength);
    this.curCodeLength = 0;
    this.setState({
      text: '',
      codeArray,
      coverBGColorList: this.getCoverBGColorList(codeArray, verifyCodeLength),
    });
  };

  blur = () => {
    this.textInput.focus();
    this.textInput.blur();
    this.setState({focused: false});
  };

  focus = () => {
    this.textInput.focus();
    this.setState({focused: true});
  };

  showAlert = (text, codeArray, codeLength) => {
    this.curCodeLength = codeLength - 1;
    const {verifyCodeLength, warningTitle, warningContent, warningButtonText} =
      this.props;
    Alert.alert(
      warningTitle,
      warningContent,
      [
        {
          text: warningButtonText,
          onPress: () => {
            codeArray = getCodeArray(codeArray, verifyCodeLength);
            this.setState({
              text,
              codeArray,
              coverBGColorList: this.getCoverBGColorList(
                codeArray,
                verifyCodeLength,
              ),
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  bindRef = ref => {
    this.textInput = ref;
  };

  render() {
    const {focused} = this.state;
    const {
      autoFocus,
      verifyCodeLength,

      containerMarginLeft,

      containerStyle,
      containerPaddingVertical,
      containerPaddingTop,
      containerPaddingBottom,
      containerPaddingHorizontal,
      containerPaddingLeft,
      containerPaddingRight,
      containerBackgroundColor,

      codeViewStyle,
      codeViewWidth,
      codeViewHeight,
      codeViewBackgroundColor,
      codeViewBorderWidth,
      codeViewBorderColor,
      codeViewBorderRadius,
      focusedCodeViewBorderColor,

      codeStyle,
      codeFontSize,
      codeColor,
      secureTextEntry,
      defaultValue,
      errorBorderColor
    } = this.props;
    let gapWidth = 0;
    let newCodeViewWidth = 0;
    if (codeViewWidth) {
      gapWidth =
        (getScreenWidth() -
          (containerPaddingLeft || containerPaddingHorizontal) -
          (containerPaddingRight || containerPaddingHorizontal) -
          verifyCodeLength * codeViewWidth) /
        (verifyCodeLength - 1);
      // if (containerPaddingHorizontal) {

      // } else {
      //   gapWidth = (getScreenWidth() - (verifyCodeLength * codeViewWidth)) / (verifyCodeLength + 1);
      // }
      newCodeViewWidth = codeViewWidth;
    } else {
      gapWidth =
        (getScreenWidth() -
          (containerPaddingLeft || containerPaddingHorizontal) -
          (containerPaddingRight || containerPaddingHorizontal)) /
        (3 * verifyCodeLength - 1);
      // if (containerPaddingHorizontal) {

      // } else {
      //   gapWidth = getScreenWidth() / ((3 * verifyCodeLength) + 1);
      // }
      newCodeViewWidth = 2 * gapWidth;
    }

    return (
      <TouchableOpacity
        style={[styles.container]}
        activeOpacity={1}
        onPressIn={() => {
          if (!this.keyboardShow) {
            this.blur();
          }
        }}
        onPressOut={() => this.focus()}>
        <TextInput
          ref={this.bindRef}
          underlineColorAndroid="transparent"
          caretHidden
          onBlur={() => {
            this.TextInputFocused = false;
            this.setState({focused: false});
          }}
          onFocus={() => {
            this.TextInputFocused = true;
          }}
          autoFocus={autoFocus}
          maxLength={verifyCodeLength}
          keyboardType="numeric"
          style={styles.hiddenTextInput}
          value={this.state.text}
          onChangeText={text => {
            this.setState({text});
            this.onChangeText(text);
            // onInputCompleted(text)
          }}
        />
        <CodeView
          focused={focused}
          gapWidth={gapWidth}
          codeArray={this.state.codeArray}
          coverBGColorList={this.state.coverBGColorList}
          verifyCodeLength={verifyCodeLength}
          containerStyle={containerStyle}
          containerPaddingVertical={containerPaddingVertical}
          containerPaddingTop={containerPaddingTop}
          containerPaddingBottom={containerPaddingBottom}
          containerPaddingHorizontal={containerPaddingHorizontal}
          containerPaddingLeft={containerPaddingLeft}
          containerPaddingRight={containerPaddingRight}
          containerMarginLeft={containerMarginLeft}
          containerBackgroundColor={containerBackgroundColor}
          codeViewStyle={codeViewStyle}
          codeViewBorderColor={codeViewBorderColor}
          focusedCodeViewBorderColor={focusedCodeViewBorderColor}
          codeViewWidth={newCodeViewWidth}
          codeViewHeight={codeViewHeight}
          codeViewBorderWidth={codeViewBorderWidth}
          codeViewBorderRadius={codeViewBorderRadius}
          codeViewBackgroundColor={codeViewBackgroundColor}
          codeStyle={codeStyle}
          codeFontSize={codeFontSize}
          codeColor={codeColor}
          secureTextEntry={secureTextEntry}
          defaultValue={defaultValue}
          errorBorderColor={errorBorderColor}
        />
      </TouchableOpacity>
    );
  }
}

SmsVerification.propTypes = {
  autoFocus: PropTypes.bool,
  verifyCodeLength: PropTypes.number,
  initialCodes: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),

  containerStyle: PropTypes.oneOfType([PropTypes.object]),
  containerPaddingVertical: PropTypes.number,
  containerPaddingTop: PropTypes.number,
  containerPaddingBottom: PropTypes.number,
  containerPaddingHorizontal: PropTypes.number,
  containerPaddingLeft: PropTypes.number,
  containerPaddingRight: PropTypes.number,
  containerBackgroundColor: PropTypes.string,

  codeViewStyle: PropTypes.oneOfType([PropTypes.object]),
  codeViewBorderColor: PropTypes.string,
  focusedCodeViewBorderColor: PropTypes.string,
  codeViewWidth: PropTypes.number,
  codeViewHeight: PropTypes.number,
  codeViewBorderWidth: PropTypes.number,
  codeViewBorderRadius: PropTypes.number,
  codeViewBackgroundColor: PropTypes.string,

  codeStyle: PropTypes.oneOfType([PropTypes.object]),
  codeFontSize: PropTypes.number,
  codeColor: PropTypes.string,

  secureTextEntry: PropTypes.bool,
  coverStyle: PropTypes.oneOfType([PropTypes.object]),
  coverRadius: PropTypes.number,
  coverColor: PropTypes.string,

  onInputCompleted: PropTypes.func,
  onInputChangeText: PropTypes.func,

  warningTitle: PropTypes.string,
  warningContent: PropTypes.string,
  warningButtonText: PropTypes.string,
};

SmsVerification.defaultProps = {
  autoFocus: Constants.autoFocus,
  verifyCodeLength: Constants.verifyCodeLength,
  initialCodes: [],

  containerStyle: null,
  containerPaddingVertical: null,
  containerPaddingTop: null,
  containerPaddingBottom: null,
  containerPaddingHorizontal: null,
  containerPaddingLeft: null,
  containerPaddingRight: null,
  containerBackgroundColor: null,

  codeViewStyle: null,
  codeViewBorderColor: null,
  focusedCodeViewBorderColor: Colors.focusedCodeViewBorderColor,
  codeViewWidth: null,
  codeViewHeight: null,
  codeViewBorderWidth: null,
  codeViewBorderRadius: null,
  codeViewBackgroundColor: null,

  codeStyle: null,
  codeFontSize: Constants.codeFontSize,
  codeColor: Constants.codeColor,

  secureTextEntry: false,
  coverStyle: null,
  coverRadius: null,
  coverColor: Colors.coverColor,

  onInputCompleted: null,
  onInputChangeText: null,

  warningTitle: Constants.warningTitle,
  warningContent: Constants.warningContent,
  warningButtonText: Constants.warningButtonText,
};
