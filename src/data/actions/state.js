export const cocktailList = (data, state) => ({
    type: 'cocktailList',
    submitted: true,
    loaded: true,
    cocktails: data,
})