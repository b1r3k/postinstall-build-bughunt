import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Form from "react-jsonschema-form";


class Root extends React.Component {
    render() {
        return (
        <div>
            <Form schema={{
                type: "object",
                properties: {
                    name: {
                        type: "string"
                    }
                }
            }}
                    formData={{}}/>
        </div>
        );
    }
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
};

render(Root);
