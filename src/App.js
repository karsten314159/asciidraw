import React from 'react';
import "./App.css"
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {orange, red} from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: orange[500],
        },
    },
});


class Editor extends React.Component {
    state = {
        bg: "___",
        foreground: "Yay"
    };

    render() {
        let fontFamily = "'Ubuntu Mono', monospace";

        let AsciiField = props =>
            <FormControl
                style={{
                    position: "absolute",
                    top: 130, left: 10,
                    fontFamily,
                    width: 700,
                    color: props.color,
                    fontSize: 24,
                    background: "transparent",
                    border: 0
                }}
                component="textarea"
                rows="20"
                margin="normal"
                {...props} />;

        let colors = ["red", "black", "blue"];
        return (
            <ThemeProvider theme={outerTheme}>
                <div style={{
                    padding: 14,
                    fontFamily: "'Ubuntu Mono', monospace"
                }}>
                    <h1>Ascii Editor</h1>
                    <ButtonGroup>
                        {colors.map(x =>
                            <Button key={x} onClick={() => {
                                document.getElementById(x).focus();
                            }}>{x}</Button>
                        )}
                    </ButtonGroup>
                    {colors.map(x =>
                        <AsciiField
                            defaultValue={x}
                            id={x}
                            key={x}
                            color={x}
                        />)}
                </div>
            </ThemeProvider>
        );
    }
}

function App() {
    return (
        <Editor/>
    );
}

export default App;
