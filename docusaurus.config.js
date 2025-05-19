
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Kỹ Sư Điện',
  tagline: 'Website chia sẻ kiến thức kỹ thuật điện',
  url: 'https://kysudien.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'kysudien', // GitHub username
  projectName: 'kysudien.github.io', // Repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/kysudien/kysudien.github.io/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kỹ Sư Điện',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'elvSidebar',
            position: 'left',
            label: 'ELV',
          },
          {
            type: 'docSidebar',
            sidebarId: 'eltSidebar',
            position: 'left',
            label: 'ELT',
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
        links: [],
        copyright: `© ${new Date().getFullYear()} Kỹ Sư Điện.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
    }),
};

module.exports = config;
