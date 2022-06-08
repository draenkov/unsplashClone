import { UNSPLASH_API_URL } from '../constants/urls';
import { UnsplashConverter } from './converter';

class SplashProvider {
  constructor({ baseUrl, accessKey }) {
    this.baseUrl = baseUrl;
    this.accessKey = accessKey;
    this.accessToken = null;
    this.refreshToken = null;
  }

  getStartPhotos() {
    const startPhotos = fetch(
      `${this.baseUrl}/photos?client_id=${this.accessKey}&page=1&per_page=15`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toPhotos(response))

      .then((photos) => UnsplashConverter.toMap(photos));

    return startPhotos;
  }

  getMorePhotos(page) {
    const morePhotos = fetch(
      `${this.baseUrl}/photos?client_id=${this.accessKey}&page=${page}&per_page=15`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toPhotos(response))
      .then((photos) => UnsplashConverter.toMapBase(photos));
    return morePhotos;
  }

  getPhotoOfTheDay() {
    const photoOfTheDay = fetch(
      `${this.baseUrl}/photos/random?client_id=${this.accessKey}&orientation=landscape&count=1`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toPhotos(response));
    return photoOfTheDay;
  }

  getStatistics(id) {
    const statistics = fetch(
      `${this.baseUrl}/photos/${id}/statistics?client_id=${this.accessKey}`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toStatistics(response));
    return statistics;
  }

  likePhoto(id) {
    const likedPhoto = fetch(
      `${this.baseUrl}/photos/${id}/like?client_id=${this.accessKey}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => UnsplashConverter.toPhotoId(response));

    return likedPhoto;
  }

  unlikePhoto(id) {
    fetch(`${this.baseUrl}/photos/${id}/like?client_id=${this.accessKey}`, {
      method: 'DELETE',
    });
  }

  login() {
    return window.location.replace(
      `https://unsplash.com/oauth/authorize?client_id=${process.env.REACT_APP_ACCESS_KEY}&redirect_uri=http://localhost:3000/login&response_type=code&scope=public+read_user`
    );
  }

  getAccessToken(code) {
    // if (this.accessToken) {
    //   return this.accessToken;
    // }
    return fetch(
      `https://unsplash.com/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/login&client_id=${process.env.REACT_APP_ACCESS_KEY}&client_secret=${process.env.REACT_APP_SECRET_KEY}`,
      {
        method: 'POST',
        // headers: {
        //   Authorization: `Bearer ${this.accessToken}`,
        // },
      }
    )
      .then((response) => response.json())

      .then(({ access_token, refresh_token }) => {
        this.accessToken = access_token;
        this.refreshToken = refresh_token;
      });
  }

  getUserName() {
    const userName = fetch(`${this.baseUrl}/me?scope=read_user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then(console.log)
      .then((response) => UnsplashConverter.toUserName(response));

    return userName;
  }

  searchAutoComplete(value) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '60daed1952msh0078b777ae56272p1cc231jsn00f38637a868',
      },
    };
    const autoComplete = fetch(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete?text=${value}`,
      options
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toShortVersion(response));

    return autoComplete;
  }

  getsearchPhotos(input, sortOption) {
    const searchPhotos = fetch(
      `${this.baseUrl}/search/photos?client_id=${this.accessKey}&query=${input}&page=1&per_page=15&order_by=${sortOption}`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toSearchPhotos(response))

      .then((photos) => UnsplashConverter.toMap(photos));

    return searchPhotos;
  }

  getMoreSearchPhotos(input, page) {
    const morePhotos = fetch(
      `${this.baseUrl}/search/photos?client_id=${this.accessKey}&query=${input}&page=${page}&per_page=15`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toSearchPhotos(response))

      .then((photos) => UnsplashConverter.toMapBase(photos));

    return morePhotos;
  }
}

export const UnsplashService = new SplashProvider({
  baseUrl: UNSPLASH_API_URL,
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});
