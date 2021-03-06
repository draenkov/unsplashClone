import { Photo } from '../../entities/photo';
import { Stats } from '../../entities/stats';
import convertViews from '../../utils/convertViews';

class Converter {
  toPhotos(photoResponse) {
    const photoInfo = photoResponse.map((photo) => this.toCorrectPhoto(photo));

    return photoInfo;
  }

  toCorrectPhoto({
    id,
    urls,
    user,
    likes,
    liked_by_user,
    width,
    height,
    created_at,
    links,
  }) {
    return new Photo({
      id,
      url: urls.small,
      urlRegular: urls.regular,
      urlFull: urls.full,
      author: user.name,
      authorImg: user.profile_image.small,
      authorPage: user.username,
      likes,
      download: links.download_location,
      likedByUser: liked_by_user,
      width,
      height,
      createdAt: created_at,
    });
  }

  toStatistics({ id, downloads, views, likes }) {
    return new Stats({
      id,
      downloads: convertViews(downloads.total),
      views: convertViews(views.total),
      likes: convertViews(likes.total),
    });
  }

  toMap(photoInfo) {
    const mapBase = photoInfo.reduce((acc, photo) => {
      const arr = [];
      arr.push(photo.id, photo);
      const result = [...acc, arr];
      return result;
    }, []);

    return new Map(mapBase);
  }

  toMapBase(photoInfo) {
    const mapBase = photoInfo.reduce((acc, photo) => {
      const arr = [];
      arr.push(photo.id, photo);
      const result = [...acc, arr];
      return result;
    }, []);
    return mapBase;
  }

  toPhotoId(photo) {
    return photo.id;
  }

  toUserName(userInfo) {
    return userInfo.username;
  }

  toShortVersion(autoComplete) {
    if (Array.isArray(autoComplete)) {
      return autoComplete.slice(0, 5);
    }
    console.log('Limit of requests is over (100/day)');
    return null;
  }

  toSearchPhotos(photoResponse) {
    const photoInfo = photoResponse.results;

    return photoInfo.map((photo) => this.toCorrectPhoto(photo));
  }
}

export const UnsplashConverter = new Converter();
