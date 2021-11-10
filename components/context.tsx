import React, { FC, useMemo } from 'react'
import { ThemeProvider } from 'next-themes'



export interface State {
    displayDropdown: boolean
    displayModal: boolean
}


const initialState = {
    displayDropdown: false,
    displayModal: false,
}



type Action = 
  | {
      type: 'OPEN_DROPDOWN'
    }
  | {
      type: 'CLOSE_DROPDOWN'
    }
  | {
      type: 'OPEN_MODAL'
    }
  | {
      type: 'CLOSE_MODAL'
    }

export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'


function uiReducer (state: State, action: Action) {
    switch (action.type) {
        case 'OPEN_DROPDOWN': {
            return {
              ...state,
              displayDropdown: true,
            }
          }
          case 'CLOSE_DROPDOWN': {
            return {
              ...state,
              displayDropdown: false,
            }
          }
        case 'OPEN_MODAL' : {
            return {
                ...state,
                displayModal: true,
            }
           
        }
        case 'CLOSE_MODAL': {
            return {
              ...state,
              displayModal: false,
            }
          }
    }
}


export const UIProvider: FC = (props) => {
    const [state, dispatch] = React.useReducer(uiReducer, initialState)

    const openModal = () => dispatch({ type: 'OPEN_MODAL'})
    const closeModal = () => dispatch({ type: 'CLOSE_MODAL'})
    const openDropdown = () => dispatch({ type: 'OPEN_DROPDOWN'})
    const closeDropdown = () => dispatch ({ type: 'CLOSE_DROPDOWN'})

    const toggleDropdown = () =>
        state.displayDropdown 
        ? dispatch({ type: 'CLOSE_DROPDOWN'})
        : dispatch({ type: 'OPEN_DROPDOWN'})

    const closeDropdownIfPresent = () => 
        state.displayDropdown && dispatch({ type: 'CLOSE_DROPDOWN'})

    const value = useMemo (
        () => ({
            ...state,
            openModal,
            closeModal,
            openDropdown,
            closeDropdown,
            toggleDropdown,
            closeDropdownIfPresent
        }),
        [state]
    )

    return <UIContext.Provider value = {value} { ...props}/>
}


export const useUI = () => {
    const context = React.useContext(UIContext)
    if ( context === undefined ) {
        throw new Error(`useUI must be used within a UIProvider`)
    }
    return context
}

export const ManagedUIContext: FC = ({ children }) => (
    <UIProvider>
        <ThemeProvider>{children}</ThemeProvider>       
    </UIProvider>
)