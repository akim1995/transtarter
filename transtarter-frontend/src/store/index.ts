import Vue from 'vue'
import Vuex from 'vuex'

import { IAuthState } from './modules/authentication.module'

Vue.use(Vuex)

export interface IRootState {
  auth: IAuthState;
}

export const store = new Vuex.Store<IRootState>({})
