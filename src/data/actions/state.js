export const cocktailList = (data, state) => ({
    type: 'cocktailList',
    submitted: true,
    loaded: true,
    cocktails: data,
})

export const spiritsList = (data, state) => ({
    type: 'spiritsList',
    spirits: data,
})