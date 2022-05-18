export class Photo {
  constructor({
    id,
    url,
    urlFull,
    urlRegular,
    author,
    authorImg,
    authorPage,
    likes,
    likedByUser,
    width,
    height,
    createdAt,
  }) {
    this.id = id;
    this.url = url;
    this.urlRegular = urlRegular;
    this.urlFull = urlFull;
    this.author = author;
    this.authorImg = authorImg;
    this.authorPage = authorPage;
    this.likes = likes;
    this.likedByUser = likedByUser;
    this.width = width;
    this.height = height;
    this.createdAt = createdAt;
  }
}
