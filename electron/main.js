// Модули для управления приложением и создания окна
const {app, BrowserWindow} = require('electron')
const path = require("path");

function createWindow () {
    // Создаем окно браузера.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule:true,
            preload:path.join(__dirname, "preload.js")
        }
    })


    //mainWindow.loadURL(startUrl);
    mainWindow.loadURL('http://localhost:3000');

    // Отображаем средства разработчика.
    mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Выйти когда все окна закрыты
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})