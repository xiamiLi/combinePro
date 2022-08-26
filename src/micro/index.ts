import { registerMicroApps, addGlobalUncaughtErrorHandler, start, initGlobalState, MicroAppStateActions, setDefaultMountApp } from 'qiankun'

// subapplication register configuration
import apps from './app'
/**
 * Registering a subapplication
 * apps params - subapplication basic Configuration Information
 * second params - Global lifecycle hooks
 */

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log('before load', app.name)
    return Promise.resolve()
  },
  afterMount: (app) => {
    console.log('after mount', app.name)
    return Promise.resolve()
  }
})
addGlobalUncaughtErrorHandler((event: Event | string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { message: msg } = event as any
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    msg.error('child appliciation load fail')
  }
})
// init state
const useActions = (): MicroAppStateActions => {
  const initialState = {};
  const actions: MicroAppStateActions = initGlobalState(initialState)
  return actions
}
// setDefaultMountApp('/home')
export { start, useActions }
