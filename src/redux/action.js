export const SWITCH_LANG = 'SWITCH_LANG'

// dispatch actions
export const switchLanguage = BaseLang => {
  return dispatch => {
    dispatch({
      type: SWITCH_LANG,
      baseLang: BaseLang
    })
  }
}