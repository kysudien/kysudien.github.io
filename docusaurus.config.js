
// @ts-check
const config = {
  title: 'Kỹ Sư Điện',
  tagline: 'Website chia sẻ kiến thức kỹ thuật điện',
  url: 'https://kysudien.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kysudien',
  projectName: 'kysudien.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: ({
    navbar: {
      title: 'Kỹ Sư Điện',
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        {
          label: 'BOOK',
          position: 'left',
          items: [
            { label: 'Sách Điện Cơ Bản', to: '/elv/intro-elv' },
            { label: 'Sách Tự Động Hóa', to: '/elt/intro-elt' },
          ],
        },
        {
          label: 'LINK',
          position: 'left',
          items: [
            { label: 'Bộ Công Thương', href: 'https://moit.gov.vn' },
            { label: 'Diễn đàn Điện', href: 'https://dien.com.vn' },
          ],
        },
        { type: 'docSidebar', sidebarId: 'elvSidebar', position: 'left', label: 'ELV' },
        { type: 'docSidebar', sidebarId: 'eltSidebar', position: 'left', label: 'ELT' },
        { href: 'https://github.com/kysudien/kysudien.github.io', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Kỹ Sư Điện.`,
    },
  }),
};
module.exports = config;
