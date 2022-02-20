// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.SITE_NAME || 'Tyler Farkas LETTERS FROM A CODER Blog',
  siteDescription:
    process.env.SITE_DESCRIPTION ||
    'Letters I write to acquaintances, friends, and family. This involves all things technology, finances, life, experiments, what I have found works, and what doesn\'t.',
  siteUrl: process.env.GRIDSOME_BASE_URL || 'https://github.com/TylerCreatingThings/',
  icon: {
    favicon: {
      src: process.env.SITE_FAVICON_PATH || './static/images/favicon.png',
      sizes: [16, 32, 96],
    },
  },
  plugins: [
    {
      use: 'gridsome-plugin-robots-txt',
    },
    {
      use: 'gridsome-plugin-windicss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          categories: {
            typeName: 'Category',
            create: true,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title:
            process.env.SITE_TITLE ||
            'Blog | Technology Guide, Personal Finance, Experiments, Coding.',
          feed_url: process.env.GRIDSOME_BASE_URL
            ? `${process.env.GRIDSOME_BASE_URL}/rss.xml`
            : 'https://tylerfarkas.ca/rss.xml',
          site_url:
            process.env.GRIDSOME_BASE_URL || 'https://tylerfarkas.ca/',
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.summary,
          url: process.env.GRIDSOME_BASE_URL
            ? process.env.GRIDSOME_BASE_URL + node.path
            : 'https://tylerfarkas.ca' + node.path,
          author: process.env.SITE_AUTHOR || 'Tyler Farkas',
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-recommender',
      options: {
        enabled: true,
        typeName: 'Post',
        referenceTypeName: 'Post',
        field: 'title',
        referenceField: 'title',
        relatedFieldName: 'related',
        referenceRelatedFieldName: 'related',
        caseSensitive: false,
        minScore: 0.01,
        maxScore: 1,
        minRelations: 3,
        maxRelations: 3,
        fillWithRandom: false,
        debug: false,
      },
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: process.env.GOOGLE_ANALYTICS_ID,
        },
      },
    },
  ],
  templates: {
    Tag: '/tag/:id',
    Category: '/category/:id',
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
}
