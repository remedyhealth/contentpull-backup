'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Creates a local backup of a space.
 * @param {String} localPath - The local path to save the file. Outputs as JSON.
 * @returns {Promise<JSON>} The promise instance that resolves a 
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
