export const cocktailList = (data, selected) => ({
    type: 'cocktailList',
    submitted: true,
    loaded: true,
    cocktails: data,
    selected: selected,
})

export const cocktails = (data,) => ({
    type: 'cocktails',
    loaded: true,
    // cocktails: data,
    cocktail: data,  
})

export const spiritsList = (data, state) => ({
    type: 'spiritsList',
    spirits: data,
})

export const setSelected = (state) => ({
    type: 'setSelected',

    selected: state.selected,
})

export const submitAgeConfirm = (state) => ({
   
        type: 'submitAgeConfirm',
        displayAgeConfirm: false,
        
  

})