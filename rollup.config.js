import obfuscator from 'rollup-plugin-obfuscator';

export default {
  input: 'doubleAdd.js',
  output: {
    file: 'dist/doubleAdd.bundle.js',
    format: 'iife',
    name: '',
  },
  plugins: [
    obfuscator({
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      debugProtection: true,
      renameGlobals: true,
    })
  ]
};
