import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { store } from '../index'

export interface IDisplayState {
  showPopup: {
    registration: boolean,
    // logIn: boolean,
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
  windowDocument = document
  popupIsOpenedClassName = 'modal-open'

  showPopup = {
    registration: false,
    // logIn: false,
    restorePassword: false,
    successRestore: false,
    requestCall: false
  };
  showBlock = {
    selectCity: false,
    yourCity: false
  };

  @Action
  checkPopupIsOpened () {
    const keys = Object.values(this.showPopup)
    if (keys.some(x => x === true)) {
      this.windowDocument.body.classList.add(this.popupIsOpenedClassName)
    } else {
      this.windowDocument.body.classList.remove(this.popupIsOpenedClassName)
    }
  }

  @Mutation
  TOGGLE_YOUR_CITY () {
    this.showBlock.yourCity = !this.showBlock.yourCity
  }

  @Action
  public toggleYourCity (): void {
    this.context.commit('TOGGLE_YOUR_CITY')
    this.checkPopupIsOpened()
  }

  // @Mutation
  // TOGGLE_LOG_IN () {
  //   this.showPopup.logIn = !this.showPopup.logIn
  // }

  // @Action
  // public toggleLogIn (): void {
  //   this.context.commit('TOGGLE_LOG_IN')
  //   this.checkPopupIsOpened()
  // }

  @Mutation
  TOGGLE_YOUR_CITY_AND_OPEN_SELECT_CITY () {
    this.showBlock.yourCity = false
    this.showBlock.selectCity = true
  }

  @Action
  public toggleYourCityAndOpenSelectCity (): void {
    this.context.commit('TOGGLE_YOUR_CITY_AND_OPEN_SELECT_CITY')
    this.checkPopupIsOpened()
  }

  @Mutation
  TOGGLE_SELECT_CITY_AND_SELECT_CITY (cityName: string) {
    this.showBlock.selectCity = false
    // TO DO SAVE CITY
  }

  @Action
  public toggleSelectCity (sityName: string): void {
    this.context.commit('TOGGLE_SELECT_CITY_AND_SELECT_CITY')
    this.checkPopupIsOpened()
  }

  @Mutation
  TOGGLE_REQUEST_CALL () {
    this.showPopup.requestCall = !this.showPopup.requestCall
  }

  @Action
  public toggleRequest (): void {
    this.context.commit('TOGGLE_REQUEST_CALL')
    this.checkPopupIsOpened()
  }

  // @Mutation
  // CLOSE_LOG_IN_AND_OPEN_REGISTRATION () {
  //   this.showPopup.logIn = false
  //   this.showPopup.registration = true
  // }

  // @Action
  // public closeLogInAndOpenRegistration (): void {
  //   this.context.commit('CLOSE_LOG_IN_AND_OPEN_REGISTRATION')
  //   this.checkPopupIsOpened()
  // }

  // @Mutation
  // CLOSE_LOG_IN_AND_OPEN_RESTORE () {
  //   this.showPopup.logIn = false
  //   this.showPopup.restorePassword = true
  // }

  // @Action
  // public closeLogInAndOpenRestore (): void {
  //   this.context.commit('CLOSE_LOG_IN_AND_OPEN_RESTORE')
  //   this.checkPopupIsOpened()
  // }

  @Mutation
  CLOSE_LOG_IN_AND_OPEN_SUCCESS_REGISTRATION () {
    this.showPopup.restorePassword = false
    this.showPopup.successRestore = true
  }

  @Action
  public closeLogInAndOpenSuccessRegistration (): void {
    this.context.commit('CLOSE_LOG_IN_AND_OPEN_SUCCESS_REGISTRATION')
    this.checkPopupIsOpened()
  }

  @Mutation
  TOGGLE_RESTORE () {
    this.showPopup.restorePassword = !this.showPopup.restorePassword
  }

  @Action
  public toggleRestore (): void {
    this.context.commit('TOGGLE_RESTORE')
    this.checkPopupIsOpened()
  }

  @Mutation
  TOGGLE_SUCCESS_RESTORE () {
    this.showPopup.successRestore = !this.showPopup.successRestore
  }

  @Action
  public toggleSuccessRestore (): void {
    this.context.commit('TOGGLE_SUCCESS_RESTORE')
    this.checkPopupIsOpened()
  }

  @Mutation
  TOGGLE_REGISTRATION () {
    this.showPopup.registration = !this.showPopup.registration
  }

  @Action
  public toggleRegistration (): void {
    this.context.commit('TOGGLE_REGISTRATION')
    this.checkPopupIsOpened()
  }

  // @Mutation
  // CLOSE_REGISTRATION_AND_OPEN_LOG_IN () {
  //   this.showPopup.registration = false
  //   // this.showPopup.logIn = true
  // }

  // @Action
  // public closeRegistrationAndOpenLogIn (): void {
  //   this.context.commit('CLOSE_REGISTRATION_AND_OPEN_LOG_IN')
  //   this.checkPopupIsOpened()
  // }
}

export const DisplayModule = getModule(Display, store)
