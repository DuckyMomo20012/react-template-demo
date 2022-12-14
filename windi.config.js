import pluginAnimations from '@windicss/plugin-animations';
import colors from 'windicss/colors';
import pluginAspectRatios from 'windicss/plugin/aspect-ratio';

export default {
  alias: {
    // ...
  },
  attributify: true,
  darkMode: 'class',
  extract: {
    exclude: ['node_modules', '.git', '.next/**/*'],
    include: ['**/*.{jsx,css}'],
  },
  plugins: [
    // Other plugins
    pluginAnimations({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    pluginAspectRatios,
  ],
  shortcuts: {
    // ...
  },
  safelist: [
    // ...
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Roboto Slab', 'ui-serif', 'Georgia'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular'],
        heading: ['Barlow'],
      },
    },
  },
};
