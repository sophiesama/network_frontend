const initialState = {
    showDeviceModal: false
}

export function modalsStore(state = initialState, action) {
    const actions = {
        "ShowDeviceModal" : {
            ...state,
            showDeviceModal: true
        },
        "HideDeviceModal" : {
            ...state,
            showDeviceModal: false
        },
    }

    return actions[action.type] || state
}