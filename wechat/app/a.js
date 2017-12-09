// Jerry 2017-12-9 11:39AM we can currently treat module as a keyword in nodejs environment

console.log('module.id: ', module.id);
console.log('module.exports: ', module.exports);
console.log('module.parent: ', module.parent);
console.log('module.filename: ', module.filename);
console.log('module.loaded: ', module.loaded);
console.log('module.children: ', module.children);
console.log('module.paths: ', module.paths);

/* output:
module.id:  .
module.exports:  {}
module.parent:  null
module.filename:  C:\Code\git\wechat\app\a.js
module.loaded:  false
module.children:  []
module.paths:  [ 'C:\\Code\\git\\wechat\\app\\node_modules',
  'C:\\Code\\git\\wechat\\node_modules',
  'C:\\Code\\git\\node_modules',
  'C:\\Code\\node_modules',
  'C:\\node_modules' ]

*/