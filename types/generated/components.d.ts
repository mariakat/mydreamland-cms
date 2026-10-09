import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksDivider extends Struct.ComponentSchema {
  collectionName: 'components_blocks_dividers';
  info: {
    description: '\u03A4\u03B1 \u2726\u2726\u2726 \u03B1\u03BD\u03AC\u03BC\u03B5\u03C3\u03B1 \u03C3\u03B5 \u03B5\u03BD\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2';
    displayName: '\u0394\u03B9\u03B1\u03C7\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC';
    icon: 'minus';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallerys';
  info: {
    description: '\u03A0\u03BF\u03BB\u03BB\u03AD\u03C2 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B5\u03C2 \u03C3\u03B5 \u03C0\u03BB\u03AD\u03B3\u03BC\u03B1';
    displayName: '\u0393\u03BA\u03B1\u03BB\u03B5\u03C1\u03AF';
    icon: 'landscape';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_images';
  info: {
    description: '\u039C\u03AF\u03B1 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1 \u03BC\u03B5 \u03BB\u03B5\u03B6\u03AC\u03BD\u03C4\u03B1';
    displayName: '\u0395\u03B9\u03BA\u03CC\u03BD\u03B1';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    wide: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksInstagram extends Struct.ComponentSchema {
  collectionName: 'components_blocks_instagrams';
  info: {
    description: 'Link \u03B1\u03C0\u03CC \u03B4\u03B7\u03BC\u03CC\u03C3\u03B9\u03BF post \u03AE reel \u03C4\u03BF\u03C5 Instagram';
    displayName: 'Instagram post';
    icon: 'picture';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quotes';
  info: {
    description: '\u03A6\u03C1\u03AC\u03C3\u03B7 \u03C0\u03BF\u03C5 \u03BE\u03B5\u03C7\u03C9\u03C1\u03AF\u03B6\u03B5\u03B9, \u03C3\u03C4\u03BF \u03C1\u03BF\u03B6 \u03BA\u03BF\u03C5\u03C4\u03AF';
    displayName: '\u0391\u03C0\u03CC\u03C6\u03B8\u03B5\u03B3\u03BC\u03B1';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksRecipe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_recipes';
  info: {
    description: '\u039C\u03B5\u03C1\u03AF\u03B4\u03B5\u03C2, \u03C7\u03C1\u03CC\u03BD\u03BF\u03B9, \u03C5\u03BB\u03B9\u03BA\u03AC \u03BA\u03B1\u03B9 \u03B2\u03AE\u03BC\u03B1\u03C4\u03B1';
    displayName: '\u03A3\u03C5\u03BD\u03C4\u03B1\u03B3\u03AE';
    icon: 'restaurant';
  };
  attributes: {
    cookTime: Schema.Attribute.String;
    ingredients: Schema.Attribute.Text & Schema.Attribute.Required;
    notes: Schema.Attribute.Text;
    prepTime: Schema.Attribute.String;
    servings: Schema.Attribute.String;
    steps: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BlocksRelatedArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_related_articles';
  info: {
    description: '\u039A\u03AC\u03C1\u03C4\u03B1 \u03C0\u03C1\u03BF\u03C2 \u03AC\u03BB\u03BB\u03BF \u03AC\u03C1\u03B8\u03C1\u03BF \u03C4\u03BF\u03C5 blog';
    displayName: '\u0394\u03B9\u03AC\u03B2\u03B1\u03C3\u03B5 \u03B5\u03C0\u03AF\u03C3\u03B7\u03C2';
    icon: 'link';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0394\u03B9\u03AC\u03B2\u03B1\u03C3\u03B5 \u03B5\u03C0\u03AF\u03C3\u03B7\u03C2'>;
  };
}

export interface BlocksSpotify extends Struct.ComponentSchema {
  collectionName: 'components_blocks_spotifys';
  info: {
    description: 'Link \u03B1\u03C0\u03CC \u03C4\u03C1\u03B1\u03B3\u03BF\u03CD\u03B4\u03B9, \u03AC\u03BB\u03BC\u03C0\u03BF\u03C5\u03BC, playlist \u03AE podcast \u03C4\u03BF\u03C5 Spotify';
    displayName: 'Spotify';
    icon: 'music';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_texts';
  info: {
    description: '\u03A0\u03B1\u03C1\u03AC\u03B3\u03C1\u03B1\u03C6\u03BF\u03B9, \u03C4\u03AF\u03C4\u03BB\u03BF\u03B9, \u03BB\u03AF\u03C3\u03C4\u03B5\u03C2 \u03BA\u03B1\u03B9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03B9';
    displayName: '\u039A\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF';
    icon: 'align-left';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlocksYoutube extends Struct.ComponentSchema {
  collectionName: 'components_blocks_youtubes';
  info: {
    description: 'Link \u03B1\u03C0\u03CC \u03B2\u03AF\u03BD\u03C4\u03B5\u03BF \u03C4\u03BF\u03C5 YouTube';
    displayName: 'YouTube';
    icon: 'play';
  };
  attributes: {
    caption: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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
      'blocks.divider': BlocksDivider;
      'blocks.gallery': BlocksGallery;
      'blocks.image': BlocksImage;
      'blocks.instagram': BlocksInstagram;
      'blocks.quote': BlocksQuote;
      'blocks.recipe': BlocksRecipe;
      'blocks.related-article': BlocksRelatedArticle;
      'blocks.spotify': BlocksSpotify;
      'blocks.text': BlocksText;
      'blocks.youtube': BlocksYoutube;
      'blog.review-card': BlogReviewCard;
    }
  }
}
