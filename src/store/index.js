import { createStore } from 'vuex';
import agents from './modules/agents';
import auditSections from './modules/auditSections';
import auditSubsections from './modules/auditSubsections';
import audits from './modules/audits';
import reports from './modules/reports';
import auth from './modules/auth';

export default createStore({
  modules: {
    agents,
    auditSections,
    auditSubsections,
    audits,
    reports,
    auth
  }
});
