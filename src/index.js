/**
 * Prism — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Psychedelic dark. Prismatic magenta/cyan shards.
 */

const TOKENS = {
  '--bg-base': '#0a0614',
  '--bg-surface': '#140c22',
  '--bg-elevated': '#1e1432',
  '--bg-inset': '#05030c',
  '--bg-hover': 'rgba(242, 232, 255, 0.06)',
  '--bg-active': 'rgba(242, 232, 255, 0.1)',
  '--text-primary': '#f2e8ff',
  '--text-secondary': 'rgba(242, 232, 255, 0.74)',
  '--text-muted': 'rgba(242, 232, 255, 0.52)',
  '--text-faint': 'rgba(242, 232, 255, 0.34)',
  '--border': 'rgba(242, 232, 255, 0.12)',
  '--border-subtle': 'rgba(242, 232, 255, 0.07)',
  '--border-strong': 'rgba(242, 232, 255, 0.18)',
  '--accent': '#e14dff',
  '--accent-hover': '#eb72ff',
  '--accent-muted': 'rgba(225, 77, 255, 0.2)',
  '--accent-subtle': 'rgba(225, 77, 255, 0.1)',
  '--glass-bg': 'rgba(10, 6, 20, 0.92)',
  '--glass-border': 'rgba(242, 232, 255, 0.1)',
  '--glass-bg-menu': 'rgba(30, 20, 50, 0.96)',
  '--glass-border-menu': 'rgba(242, 232, 255, 0.1)',
  '--status-active': '#e14dff',
  '--status-on-hold': '#e0b050',
  '--status-completed': '#5fd4a0',
  '--status-dropped': '#ff5a7a',
};

module.exports = {
  id: 'theme-prism',
  name: 'Prism',
  version: '0.1.0',
  description: "Psychedelic dark. Prismatic magenta/cyan shards.",

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-prism',
      name: 'Prism',
      description: "Psychedelic dark. Prismatic magenta/cyan shards.",
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
