const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    minWidth: 900,
    minHeight: 700,
    icon: path.join(__dirname, 'favicon.ico'),
    title: 'Storm Panel',
    frame: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    backgroundColor: '#313139',
  });
  mainWindow.menuBarVisible = false;
  mainWindow.hide();
  splash = new BrowserWindow({
    width: 300,
    height: 280,
    frame: false,
    transparent: true,
    resizable: false,
    center: true,
    alwaysOnTop: true,
    icon: path.join(__dirname, 'favicon.ico'),
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  splash.loadURL(`file://${__dirname}/splash.html`);
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  setTimeout(() => {
    splash.destroy();
    mainWindow.show();
    mainWindow.maximize();
  }, 3000);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
