'use client'

import { Provider } from "react-redux";
import { store } from "./_stores/main";

export function Providers({children}) {
    return <Provider store={store}>
        {children}
    </Provider>
}