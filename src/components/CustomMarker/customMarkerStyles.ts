import {window} from "../../screens";

const scanBarWidth = window.width * 0.47; // this is equivalent to 180 from a 393 device width
const scanBarHeight = window.height * 0.003; //this is equivalent to 1 from a 393 device width
const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const scanBarColor = '#FFF';

export const customMarkerStyles = {
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 208,
    width: 210,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topOverlay: {
    height: 150,
    width: window.width,
    backgroundColor: overlayColor,
  },

  bottomOverlay: {
    flex: 1,
    width: window.width,
    backgroundColor: overlayColor,
  },

  leftAndRightOverlay: {
    width: window.width,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
};
