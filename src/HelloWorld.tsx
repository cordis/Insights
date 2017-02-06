import * as React from "react";

export interface HelloProps {
    name: string;
}

export default class HelloWorld extends React.Component<HelloProps, {}> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}
