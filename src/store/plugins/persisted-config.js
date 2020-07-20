import { configManager } from '@/originalBudgetTrackingApp';
import VuexPersistence from 'vuex-persist';

export default (configModuleName) => new VuexPersistence({
  modules: [configModuleName],
  saveState: async (_key, state) => configManager.updateConfig(state[configModuleName]),
  restoreState: async (_key) => configManager.getConfig()
    .then((config) => ({ [configModuleName]: config })),
  asyncStorage: true,
})
  .plugin;
