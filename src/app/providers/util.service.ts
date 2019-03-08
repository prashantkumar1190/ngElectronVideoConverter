import { Injectable } from '@angular/core';

declare var window: Window;
declare global {
  interface Window {
    require: any;
  }
}
const electron = window.require('electron');

@Injectable()
export class UtilService {
  constructor() {}

  // Communicate to MainWindow process that videos
  // have been added and are pending conversion
  addVideos(videos) {
    electron.ipcRenderer.send('videos:added', videos);
    electron.ipcRenderer.on('metadata:complete', (event, videosWithData) => {});
  }

  // Communicate to MainWindow that the user wants
  // to start converting videos.  Also listen for feedback
  // from the MainWindow regarding the current state of
  // conversion.
  convertVideos(videos) {
    electron.ipcRenderer.send('conversion:start', videos);

    electron.ipcRenderer.on('conversion:progress', (event, { video, timemark }) => {
      console.log('Conversion Strated');
    });

    electron.ipcRenderer.on('conversion:end', (event, { video, outputPath }) => {
      console.log('Conversion Done');
    });
  }

  // Open the folder that the newly created video exists in
  showInFolder(outputPath) {
    electron.ipcRenderer.send('folder:open', outputPath);
  }

  // addVideo(video) {
  //   return {
  //     payload: { ...video }
  //   };
  // }

  // setFormat(video, format) {
  //   return {
  //     payload: { ...video, format, err: '' }
  //   };
  // }

  // removeVideo(video) {
  //   return {
  //     payload: video
  //   };
  // }

  // removeAllVideos () {
  //   return {};
  // }
}
