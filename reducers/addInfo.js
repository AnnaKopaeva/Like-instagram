import * as types from '../actions/actionTypes';

const initialState = {
  name: 'Anonymous user',
  avatarUri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/214280-200.png',
  mainPhoto: 'http://www.eleonorastyle.by/wp-content/themes/trend/assets/img/empty/424x500.png',
  posts: [{
      "username": 'timetobloomit',
      "avatar": 'https://scontent-waw1-1.cdninstagram.com/t51.2885-19/s320x320/20686728_358812314550900_1971550508971720704_a.jpg',
      "imgUri": "https://scontent-waw1-1.cdninstagram.com/vp/56fed844062e6d1e8d27c11266567149/5AED2C6F/t51.2885-15/e35/21373362_117968472174893_3362507377524867072_n.jpg",
      "description": "Lorem ipsum dolor sit amet"
    }, {
      "username": "fanyhourany",
      "avatar": "https://scontent-waw1-1.cdninstagram.com/t51.2885-19/s150x150/26155219_1934743266554534_5648842907273134080_n.jpg",
      "imgUri": "https://scontent-waw1-1.cdninstagram.com/vp/ec3346c1ca62f318a382297806bd0093/5AFC3246/t51.2885-15/e35/26870232_180636439358436_4127982863066857472_n.jpg",
      "description": "Lorem ipsum dolor sit amet"
    }, {
      "username": 'coconeli',
      "avatar": 'https://scontent-waw1-1.cdninstagram.com/t51.2885-19/10624264_279866318890319_703648610_a.jpg',
      "imgUri": "https://scontent-waw1-1.cdninstagram.com/vp/62e530aab3fa9937a0434fea3c861733/5AF0F0DF/t51.2885-15/e35/26271791_178558349566469_3149825781052473344_n.jpg",
      "description": "Lorem ipsum dolor sit amet"
    }, {
      "username": 'v.udineev',
      "avatar": 'https://scontent-waw1-1.cdninstagram.com/t51.2885-19/s320x320/23416362_1564036346965031_8331211130798080000_n.jpg',
      "imgUri": "https://scontent-waw1-1.cdninstagram.com/vp/1b7bf3446e227811296371a4c8920b42/5AE6B5E2/t51.2885-15/e35/26370975_145300586176679_9201298365969596416_n.jpg",
      "description": "Lorem ipsum dolor sit amet"
    }, {
      "username": 'julialollipopp',
      "avatar": 'https://scontent-waw1-1.cdninstagram.com/vp/017274b7d9c8b8af6aa2d9d5877e1967/5AE1DCA8/t51.2885-15/e35/26181988_193688711213425_5346894585966624768_n.jpg',
      "imgUri": "https://scontent-waw1-1.cdninstagram.com/vp/66a0e5555546574400c90d145d8ca51b/5ADFFC32/t51.2885-15/e35/26154955_757837127750539_3247008319591677952_n.jpg",
      "description": "Lorem ipsum dolor sit amet"
    }
  ]
};

export default function addInfo(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_USERNAME:
      return {
        ...state,
        name: action.username
      };
    case types.ADD_MAIN_IMG:
      return {
        ...state,
        mainPhoto: action.uri
      };
    case types.ADD_POST:
      return {
        ...state,
        posts: [
          {
            username: state.name,
            avatar: state.avatarUri,
            description: action.description,
            imgUri: action.uri
          },
          ...state.posts]
      };
    case types.CHANGE_AVATAR:
      return {
        ...state,
        avatarUri: action.uri
      };
    default:
      return state;
  }
}
