import {Dimensions, PixelRatio, Platform} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

/**
 * Normalizes a size value based on the screen width and height.
 * Ensures that the size is responsive and consistent across different devices.
 * @param size The original size in number
 * @returns The normalized size based on the smaller dimension of the screen
 *
 * Example:
 * ```
 * const padding = normalize(16);
 * ```
 */
export const normalize = size => {
  const scale = Math.min(
    WINDOW_WIDTH / guidelineBaseWidth,
    WINDOW_HEIGHT / guidelineBaseHeight,
  );
  return size * scale;
};

/**
 * Resizes a value proportionally to the screen width.
 * @param size The original size in number
 * @returns The resized value according to the screen width
 *
 * Example:
 * ```
 * style={{ width: horizontalResize(12) }}
 * ```
 */
export const horizontalResize = size => {
  const sizeResize = (WINDOW_WIDTH / guidelineBaseWidth) * size;
  return Platform.OS === 'ios' ? sizeResize : Math.min(sizeResize, size);
};

/**
 * Resizes a value proportionally to the screen height.
 * @param size The original size in number
 * @returns The resized value according to the screen height
 *
 * Example:
 * ```
 * style={{ height: verticalResize(20) }}
 * ```
 */
export const verticalResize = size => {
  const sizeResize = (WINDOW_HEIGHT / guidelineBaseHeight) * size;
  return Platform.OS === 'ios' ? sizeResize : Math.min(sizeResize, size);
};

/**
 * Scales a font size based on the device's font scaling factor and screen width.
 * Ensures that the font size is responsive and accounts for the user's font size settings.
 * @param size The original font size in number
 * @returns The scaled font size
 *
 * Example:
 * ```
 * style={{ fontSize: fontScale(16) }}
 * ```
 */
export const fontScale = size => {
  const fontScaleFactor = PixelRatio.getFontScale();
  return Math.round(horizontalResize(size) * fontScaleFactor);
};

/**
 * Gets the screen width.
 * @returns The width of the screen
 *
 * Example:
 * ```
 * const width = getWidth();
 * ```
 */
export const getWidth = () => WINDOW_WIDTH;

/**
 * Gets the screen height.
 * @returns The height of the screen
 *
 * Example:
 * ```
 * const height = getHeight();
 * ```
 */
export const getHeight = () => WINDOW_HEIGHT;

export {WINDOW_WIDTH, WINDOW_HEIGHT};
