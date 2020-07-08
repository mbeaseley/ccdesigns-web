export class ContentType {
  contentType: string;
  attributes?: ContentTypeAttributes;
}

export class ContentTypeAttributes {
  copy?: string;
  data?: CarouselContentType[];
  ['time-interval']?: string;
}

export class CarouselContentType {
  id: string;
  image: string;
  alt: string;
}
