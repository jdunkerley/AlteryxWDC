/// <reference path="../AlteryxEngine.d.ts" />

Alteryx.Plugin.DefineConnections = () => {
  console.log('DefineConnections Called.')
  return {
    IncomingConnections: [],
    OutgoingConnections: [{ name: 'Output' }]
  }
}
