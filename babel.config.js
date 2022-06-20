module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { 'runtime': 'automatic' }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          'app': './src',
        }, 
      }
    ]
  ],
};
