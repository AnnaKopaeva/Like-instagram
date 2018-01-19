import * as types from './actionTypes';

export function changeUserName(username) {
  return {
    type: types.CHANGE_USERNAME,
    username
  };
}

export function addMainPhoto(uri) {
  return {
    type: types.ADD_MAIN_IMG,
    uri
  };
}

export function addPost(uri, description) {
  return {
    type: types.ADD_POST,
    uri,
    description
  };
}

export function changeAvatar(uri) {
  return {
    type: types.CHANGE_AVATAR,
    uri,
  };
}
