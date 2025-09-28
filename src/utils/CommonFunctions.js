import {Alert, Share} from 'react-native';
import moment from 'moment';

export function customAlert(message = '', callback = () => {}) {
  if (message === '') {
    return;
  }
  setTimeout(() => {
    Alert.alert('Pay2Mobile', message, [{text: 'OK', onPress: callback}], {
      cancelable: false,
    });
  }, 0);
}


export const getIp = async () => {
  const ip1 = fetch('https://api.ipify.org')
    .then(res => res.text())
    .catch(() => null);

  try {
    let ip;
    const response = await ip1;
    ip = response;
    if (ip === undefined || ip === null) {
      const ip2 = fetch('https://ipinfo.io')
        .then(res => res.json())
        .catch(() => null);
      const response2 = await ip2;
      ip = response2 ? response2.ip : null;
    }
    return ip;
  } catch (e) {
    return null;
  }
};

// export function customAlert(message = 'Coming Soon!', callback = () => {}) {
//   setTimeout(() => {
//     Alert.alert(
//       'Pay2Mobile',
//       message,
//       [
//         {text: 'Cancel', onPress: () => {}},
//         {text: 'OK', onPress: callback},
//       ],
//       {
//         cancelable: false,
//       },
//     );
//   }, 0);
// }
export function customAlertWithCancel(message, callback = () => {}) {
  setTimeout(() => {
    Alert.alert(
      'Pay2Mobile',
      message,
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {text: 'Yes', onPress: callback},
      ],
      {cancelable: true},
    );
  }, 100);
}

export function validation(fieldName, regexType, data) {
  if (regexType.test(data) === false) {
    customAlert(`Invalid ${fieldName}.`);
    return false;
  }
  return true;
}

export function renderIf(condition, content) {
  if (condition) {
    return content;
  }
  return null;
}

export function getTimeStamp() {
  const dateTime = new Date();
  const date = dateTime.toISOString().slice(0, 10);
  const time = dateTime.toISOString().slice(11, 19);
  const timestamp = `${date} ${time}`;
  return timestamp;
}

export function generateUniqueId() {
  const timestamp = new Date().getTime();
  return timestamp.toString();
}

export const initTimer = (duration, onClear, onInterval, type = 's') => {
  const endTime = moment().add(duration, type).add(2, 's');
  const durationTimer = setInterval(() => {
    const durationData = moment.duration(endTime.diff(moment()))._data;
    const minutes =
      durationData.minutes < 10
        ? '0' + durationData.minutes
        : durationData.minutes;
    const seconds =
      durationData.seconds < 10
        ? '0' + durationData.seconds
        : durationData.seconds;
    if (durationData.milliseconds < 0) {
      clearInterval(durationTimer);
      onClear();
    } else {
      onInterval(minutes, seconds);
    }
  }, 1000);
  return durationTimer;
};

// export const formatTime = (ts, format = 'ddd, MMM Do Y, h:mm a') => {
//   return moment(ts).format(format);
// };
export const formatTime = (ts, format = 'DD MMM, YYYY | hh:mm A') => {
  return moment(ts).format(format);
};
export const share = async message => {
  try {
    await Share.share({
      message: message,
    });
  } catch (error) {
    customAlert(error.message);
  }
};

export const getUrl = (baseUrl, paramObj) => {
  let url = baseUrl + '?';
  let paramKeyArray = Object.keys(paramObj);
  let length = paramKeyArray.length;
  paramKeyArray.map((key, index) => {
    url = url + key + '=' + paramObj[key];
    if (index !== length - 1) {
      url = url + '&';
    }
  });
  return url;
};

export const parseQueryString = url => {
  if (url.includes('?')) {
    const query = url.split('?')[1];
    var vars = query.split('&');
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === 'undefined') {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
      } else if (typeof query_string[key] === 'string') {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
      } else {
        query_string[key].push(decodeURIComponent(value));
      }
    }
  }
  return query_string;
};
