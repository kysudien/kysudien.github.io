// @ts-check
const config = {
  title: 'KỸ SƯ ĐIỆN',
  tagline: 'Chia sẻ kiến thức kỹ thuật điện',
  favicon: 'img/favicon.ico',
  url: 'https://kysudien.github.io',
  baseUrl: '/',
  organizationName: 'kysudien',
  projectName: 'kysudien.github.io',
  deploymentBranch: 'main',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/kysudien/kysudien.github.io/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'KỸ SƯ ĐIỆN',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tài liệu',
        },
        {
          href: 'https://github.com/kysudien/kysudien.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu',
          items: [
            {
              label: 'Giới thiệu',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kysudien/kysudien.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KỸ SƯ ĐIỆN. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
