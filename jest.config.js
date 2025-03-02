module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx|js)?$': `<rootDir>/jest-preprocess.js`
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `dist`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jest.setup.js`, `<rootDir>/loadershim.js`],
  snapshotSerializers: ['enzyme-to-json/serializer']
}
