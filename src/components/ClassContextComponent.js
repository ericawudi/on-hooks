import React, { Component } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";

export class ClassContextComponent extends Component {
  themeStyle(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {(darkTheme) => {
            return (
              <>
                <div style={this.themeStyle(darkTheme)}>
                  <span>Class Theme</span> -{" "}
                  <ThemeUpdateContext.Consumer>
                    {(toggleTheme) => (
                      <button onClick={toggleTheme}>toggleInClass</button>
                    )}
                  </ThemeUpdateContext.Consumer>
                </div>
              </>
            );
          }}
        </ThemeContext.Consumer>
      </>
    );
  }
}
