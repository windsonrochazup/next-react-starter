module.exports = {
  stories: ['../src/**/*.story.@(js|jsx|ts|tsx)', '../src/**/story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
}
