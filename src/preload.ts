import { contextBridge, ipcRenderer } from "electron";

// Example: Expose a function to send a message to the main process
contextBridge.exposeInMainWorld("electronAPI", {
  sendMessageToMain: (message: string) =>
    ipcRenderer.send("message-from-renderer", message),
});

// You can expose other APIs or utility functions here
// For example, to get app version:
// contextBridge.exposeInMainWorld('appInfo', {
//   version: ipcRenderer.sendSync('get-app-version')
// });
