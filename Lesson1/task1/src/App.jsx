import React from "react";
import ThemedButton from "./ThemedButton";

class App extends React.Component {
    render() {
        return (
            <div>
            <ThemedButton>Dynamic Theme</ThemedButton>
            <ThemedButton>Default Theme</ThemedButton>
            </div>
        )
    }
}
export default App