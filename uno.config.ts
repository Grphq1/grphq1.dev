import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
  theme: {
    spacing: {
      'sp-1': '0.5rem',
      'sp-2': '1rem',
      'sp-3': '1.5rem',
      'sp-4': '2rem',
      'sp-5': '2.5rem',
      'sp-6': '3rem',
      'sp-7': '3.5rem',
      'sp-8': '4rem',
      'sp-9': '4.5rem',
      'sp-10': '5rem',
      'sp-12': '6rem',
      'sp-14': '7rem',
      'sp-16': '8rem',
      'sp-20': '10rem',
      'sp-24': '12rem',
    },
    height: {
      'sp-15': '7.5rem',
      'sp-20': '10rem',
      'sp-25': '12.5rem',
      'sp-30': '15rem',
      'sp-35': '17.5rem',
      'sp-40': '20rem',
    },
    fontSize: {
      'display-lg': ['3rem', { 'line-height': '3.5rem' }],
      'display-md': ['2.5rem', { 'line-height': '3rem' }],
      'display-sm': ['2rem', { 'line-height': '2.5rem' }],
      'heading-lg': ['1.75rem', { 'line-height': '2.25rem' }],
      'heading-md': ['1.5rem', { 'line-height': '2rem' }],
      'heading-sm': ['1.25rem', { 'line-height': '1.75rem' }],
    },
  },
  shortcuts: [
    {
      'bg-base': 'bg-white dark:bg-black',
      'bg-base-secondary': 'bg-neutral-500',
      'bg-base-invert': 'bg-black dark:bg-white',
      'color-base': 'text-black dark:text-white',
      'color-base-secondary': 'text-neutral-500',
      'container':
        'mx-auto w-full sm:max-w-620px md:max-w-760px lg:max-w-980px xl:max-w-1100px',
    },
  ],
  presets: [
    presetIcons({}),
    presetWind3(),
    presetTypography(),

    presetWebFonts({
      provider: 'google',
      fonts: {
        secondary: ['Google Sans Flex', 'Vazirmatn'],
        primary: ['Open Sans', 'Vazirmatn'],
      },
    }),
  ],
})
