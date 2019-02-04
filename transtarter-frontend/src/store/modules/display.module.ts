import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { store } from '../index'

export interface IDisplayState {
    showPopup: {
        registration: boolean,
        logIn: boolean,
        restorePassword: boolean,
        successRestore: boolean,
        requestCall: boolean
    },

    showBlock: {
        selectCity: boolean,
        yourCity: boolean
    }
}

@Module({ dynamic: true, store, name: 'display', namespaced: true })
export class Display extends VuexModule implements IDisplayState {
    showPopup = {
      registration: false,
      logIn: false,
      restorePassword: false,
      successRestore: false,
      requestCall: false
    };
    showBlock = {
      selectCity: false,
      yourCity: true
    };

    get showBlockYourCity () {
      return this.showBlock.yourCity
    }
}

export const DisplayModule = getModule(Display, store)
