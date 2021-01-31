const electron = require('electron');

const { app } = electron;
const { BrowserWindow } = electron;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

app.setUserTasks([
  {
    program: '/',
    arguments: '',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }

]);

function createWindow() {
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    minWidth: 900,
    minHeight: 700,
    frame: true,
    backgroundColor: '#18191C',
    webPreferences: {
      devTools: true, // Disable Dev Tools
    },
    icon: path.join(`${__dirname}/assets/dashboard.png`),
  });
  mainWindow.maximize();
  mainWindow.menuBarVisible = false;
  mainWindow.loadURL(isDev ? 'http://localhost:8080' : `file://${path.join(__dirname, '../dist/index.html')}`);
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
