import * as types from './actionTypes';

//change value user name
export function changeUserName(username) {
  return {
    type: types.CHANGE_USERNAME,
    username
  };
}

// prepare photo to send in list of posts
export function addMainPhoto(uri) {
  return {
    type: types.ADD_MAIN_IMG,
    uri
  };
}

//add post in list of posts
export function addPost(uri, description) {
  return {
    type: types.ADD_POST,
    uri,
    description
  };
}

//change user avatar
export function changeAvatar(uri) {
  return {
    type: types.CHANGE_AVATAR,
    uri,
  };
}
