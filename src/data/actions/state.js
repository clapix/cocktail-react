export const cocktailList = (data) => ({
    type: 'cocktailList',
    submitted: true,
    loaded: true,
    cocktails: data,
})

export const spiritsList = (data, state) => ({
    type: 'spiritsList',
    spirits: data,
})

export const setSelected = (state) => ({
    type: 'setSelected',
    selected: state.selected,
})