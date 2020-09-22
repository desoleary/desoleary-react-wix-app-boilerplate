import React from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from '../ErrorBoundary';

import { store } from '../redux';

function App() {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <h1>learn some react</h1>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;
