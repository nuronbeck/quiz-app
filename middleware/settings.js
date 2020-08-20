import { Session } from 'fm-app-settings'
const { version } = require('~/package.json')

import deepKeys from 'deep-keys'
import dot from 'dot-object'

export default function({ req, store }) {
  if (!store.state.settings.ui) {
    return
  }

  let session = new Session(`luma-nuxt-v${version}`)
  let settings = session.getSettingsFromRequest(req || document)
  if (settings) {
    dot.object(settings)
    const integrityCheck = deepKeys(store.getters.settings).every(e =>
      deepKeys(settings).includes(e)
    )

    store.dispatch('settings/setSettings', settings)
  }
}