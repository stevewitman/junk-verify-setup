module.exports = {
  name: 'sw00',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw00',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
