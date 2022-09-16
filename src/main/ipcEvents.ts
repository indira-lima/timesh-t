import fs from 'fs';
import path from 'path';

import { ipcMain } from 'electron';

import env from '../../.env';

const dataFilePath = path.resolve(__dirname, '..', '..', env.savedDataPath);

/** Save the stringfied `data` to the file defined in `env.savedDataPath` */
const saveData = (data: { [key: string]: unknown }) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data), {
    flag: 'w',
    encoding: 'utf-8',
  });
};

/** Read the saved contents and return it as a string */
ipcMain.on('get-saved-data', async (event) => {
  if (!fs.existsSync(dataFilePath)) {
    saveData({});
    event.reply('get-saved-data', {});
    return;
  }

  fs.readFile(dataFilePath, (err, data) => {
    let returnData = {};

    if (err?.code === 'ENOENT') {
      // file not found
      saveData({}); // create a file with an empty object
    } else if (!err) {
      returnData = JSON.parse(data.toString('utf-8'));
    }

    event.reply('get-saved-data', JSON.stringify(returnData));
  });
});
