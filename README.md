# contentpull-backup

Used to create a local backup of a space with contentpull.

### Download

You can download **contentpull-backup** via npm.

```
npm i contentpull-backup --save
```

### Installation

**contentpull-backup** extends into **contentpull* directly.

```javascript
const Contentpull = require('contentpull');
Contentpull.use(require('contentpull-backup'));
```

### How to use

The backup process runs pretty easily. Simply create a new client with your
spaceid and the apikey. After that, run the backup process by calling it on
the client with a parameter informing the backup system where to save the file.

```javascript
const puller = new Contentpull('spaceid', 'apikey');
puller.backup('./backup.json').then(() => {
    console.log('backup complete!');
})
```

### Parameters

* **saveLocation** (*String*) - Where to save the file. It is wrapped in
`path.resolve` so you can use a local location.
