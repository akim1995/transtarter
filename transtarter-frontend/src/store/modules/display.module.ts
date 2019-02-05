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

    @Mutation
    TOGGLE_YOUR_CITY () {
      this.showBlock.yourCity = !this.showBlock.yourCity
    }

    @Action
    public toggleYourCity (): void {
      this.context.commit('TOGGLE_YOUR_CITY')
    }

    @Mutation
    TOGGLE_LOG_IN () {
      this.showPopup.logIn = !this.showPopup.logIn
    }

    @Action
    public toggleLogIn (): void {
      this.context.commit('TOGGLE_LOG_IN')
    }

    @Mutation
    TOGGLE_YOUR_CITY_AND_OPEN_SELECT_CITY () {
      this.showBlock.yourCity = false
      this.showBlock.selectCity = true
    }

    @Action
    public toggleYourCityAndOpenSelectCity (): void {
      this.context.commit('TOGGLE_YOUR_CITY_AND_OPEN_SELECT_CITY')
    }

    @Mutation
    TOGGLE_SELECT_CITY_AND_SELECT_CITY (cityName: string) {
      debugger
      this.showBlock.selectCity = false
      // TO DO SAVE CITY
    }

    @Action
    public toggleSelectCity (sityName: string): void {
      this.context.commit('TOGGLE_SELECT_CITY_AND_SELECT_CITY')
    }
}

export const DisplayModule = getModule(Display, store)
