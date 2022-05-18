import { UNSPLASH_API_URL } from '../constants/urls';
import { UnsplashConverter } from './converter';

class SplashProvider {
  constructor({ baseUrl, accessKey }) {
    this.baseUrl = baseUrl;
    this.accessKey = accessKey;
  }

  getStartPhotos() {
    const startPhotos = fetch(
      `${this.baseUrl}/photos?client_id=${this.accessKey}&page=1&per_page=15`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toPhotos(response));
    return startPhotos;
  }

  getMorePhotos(page) {
    const morePhotos = fetch(
      `${this.baseUrl}/photos?client_id=${this.accessKey}&page=${page}&per_page=15`
    )
      .then((response) => response.json())

      .then((response) => UnsplashConverter.toPhotos(response));
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

  login() {
    return window.location.replace(
      `https://unsplash.com/oauth/authorize?client_id=${process.env.REACT_APP_ACCESS_KEY}&redirect_uri=http://localhost:3000/login&response_type=code&scope=public+read_user`
    );
  }

  getAccessToken(code) {
    return fetch(
      `https://unsplash.com/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/login&client_id=${process.env.REACT_APP_ACCESS_KEY}&client_secret=${process.env.REACT_APP_SECRET_KEY}`,
      {
        method: 'POST',
        // headers: {
        //   Authorization: `Bearer ${access_token}`,
        // },
      }
    ).then((response) => response.json());
  }
}

export const UnsplashService = new SplashProvider({
  baseUrl: UNSPLASH_API_URL,
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});
