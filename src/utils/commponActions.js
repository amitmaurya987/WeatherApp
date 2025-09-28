import {MainScreens} from '@navigators/options';
import NavigationService from '@services/navigationService';
import StorageService from '@services/storageService';
import {dispatch} from '@store';
import {authReset} from '@store/features/auth.feature';
import {profileReset} from '@store/features/profile.feature';
import RNFS from 'react-native-fs';

/**
 * Reads image files and converts them to base64 if they are images.
 * @param {Array} filePaths - Array of asset objects.
 * @returns {Promise<Array>} - Promise resolving to an array of base64 strings or file URIs.
 */
export const readImageFiles = filePaths => {
  return Promise.all(
    filePaths.map(asset => {
      if (asset.type && asset.type.startsWith('image')) {
        return RNFS.readFile(asset.uri || '', 'base64');
      } else {
        return asset.uri;
      }
    }),
  );
};

/**
 * Determines the file type based on the file extension.
 * @param {string} fileUrl - The file URL or path.
 * @returns {string | undefined} - Returns 'video' if the file is a video, 'image' if it's an image, or undefined otherwise.
 */
export const getFileType = fileUrl => {
  try {
    if (!fileUrl) {
      return undefined;
    }

    const extension = fileUrl.split('.').pop().toLowerCase();
    console.log(extension);

    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv'];
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    if (videoExtensions.includes(extension)) {
      console.log('File is a video.');
      return 'video';
    }

    if (imageExtensions.includes(extension)) {
      console.log('File is an image.');
      return 'image';
    }
  } catch (error) {
    console.error('Error fetching file:', error);
  }

  return undefined;
};

export const logoutAction = () => {
  dispatch(authReset());
  dispatch(profileReset());
  StorageService.resetData();
  NavigationService.shared.replace(MainScreens.AppOpenScreen);
};
