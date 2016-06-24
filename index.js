'use strict';

const path = require('path');
const fs = require('fs');

/**
 * @example
 * const Contentpull = require('contentpull');
 * Contentpull.use(require('contentpull-backup'));
 */
module.exports = function backup(localPath) {
    // still allow access to contentpull scope
    const space = this.getSpace();
    const assets = this._getAllObjects({}, true);
    const entries = this._getAllObjects({
        resolveLinks: false,
    });

    return this._link(Promise.all([space, entries, assets]).then(data => {
        const combined = {
            space: data[0],
            entries: data[1],
            assets: data[2],
        };
        return new Promise((resolve, reject) => {
            fs.writeFile(path.resolve(localPath), JSON.stringify(combined), "utf8", err => {
                if (err) {
                    return reject(err);
                }

                return resolve(combined);
            });
        });
    }));
};
