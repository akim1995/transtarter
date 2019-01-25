import Vue from 'vue'
import Vuex from 'vuex'

import { IAuthState } from './modules/authentication.module'

Vue.use(Vuex)

export interface IRootState {
  auth: IAuthState;
}

// dynamic modules. You have to import module in one of your component and then module will be available
// be careful with it
export const store = new Vuex.Store<IRootState>({})
