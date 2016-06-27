// Requires Contentpull
const Contentpull = require('contentpull');

// We are using this, but will actually use the second line irl...
Contentpull.use(require('./index'));
//Contentpull.use(require('contentpull-backup'));

// All instances have access to the plugin.
const contentpull = new Contentpull('spaceid', 'apikey');

// The actual backup process.
const filename = 'backup.json';
console.log('beginning the backup process...');
contentpull.backup(`./${filename}`).then(data => {
  console.log(`data has now been backed up to ${filename}.`);
});
