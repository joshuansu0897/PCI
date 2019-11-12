'use strict'
const { app, BrowserWindow } = require('electron')
const electronDebug = require('electron-debug')

if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname)
  electronDebug({ showDevTools: true })
}

app.on('ready', () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Modelo P',
    center: true,
    maximizable: false,
    show: false
  })

  window.on('closed', () => {
    window = null
    app.quit()
  })

  window.once('ready-to-show', () => {
    window.show()
  })

  window.loadURL(`file://${__dirname}/src/renderer/components/explicacion/index.html`)
})

exports.handleForm = function handleForm(targetWindow, firstname) {
  console.log("this is the firstname from the form ->", firstname)
  targetWindow.webContents.send('form-received', "we got it")
}