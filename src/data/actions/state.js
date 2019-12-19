export const cocktailList = (data) => ({
    type: 'cocktailList',
    submitted: true,
    loaded: true,
    cocktails: data,
    
})

export const cocktails = (data) => ({
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

export const submitAgeConfirm = (state) => {
    return {
        type: "submitAgeConfirm",
        displayAgeConfirm: false,
        
    }; 
};