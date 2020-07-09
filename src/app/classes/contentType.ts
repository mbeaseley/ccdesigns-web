export class ContentType {
  contentType: string;
  attributes?: ContentTypeAttributes;
  innerHtml?: ContentType[];
}

export class ContentTypeAttributes {
  copy?: string;
  data?: CarouselContentType[];
  ['time-interval']?: string;
  slot?: string;
  url?: string;
  ['image-url']?: string;
  ['image-alt']?: string;
  description?: string;
}

export class CarouselContentType {
  id: string;
  image: string;
  alt: string;
}
