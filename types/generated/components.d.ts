import type { Schema, Struct } from '@strapi/strapi';

export interface BlogReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_blog_review_cards';
  info: {
    description: '\u03A3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 \u03C4\u03B1\u03B9\u03BD\u03AF\u03B1\u03C2, \u03C3\u03B5\u03B9\u03C1\u03AC\u03C2 \u03AE \u03B2\u03B9\u03B2\u03BB\u03AF\u03BF\u03C5 \u03C0\u03BF\u03C5 \u03C3\u03C7\u03BF\u03BB\u03B9\u03AC\u03B6\u03B5\u03B9 \u03C4\u03BF \u03AC\u03C1\u03B8\u03C1\u03BF';
    displayName: '\u039A\u03AC\u03C1\u03C4\u03B1 \u03BA\u03C1\u03B9\u03C4\u03B9\u03BA\u03AE\u03C2';
    icon: 'star';
  };
  attributes: {
    creator: Schema.Attribute.String;
    genre: Schema.Attribute.String;
    kind: Schema.Attribute.Enumeration<
      [
        '\u03A4\u03B1\u03B9\u03BD\u03AF\u03B1',
        '\u03A3\u03B5\u03B9\u03C1\u03AC',
        '\u0392\u03B9\u03B2\u03BB\u03AF\u03BF',
      ]
    > &
      Schema.Attribute.Required;
    poster: Schema.Attribute.Media<'images'>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whereToFind: Schema.Attribute.String;
    year: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 2100;
          min: 1800;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blog.review-card': BlogReviewCard;
    }
  }
}
