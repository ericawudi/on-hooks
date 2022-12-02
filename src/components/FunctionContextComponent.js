import { useTheme, useThemeUpdate } from "./ThemeContext";

export function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <div style={themeStyle}>
        <span>Function Context Theme Component</span> -{" "}
        <button onClick={toggleTheme}>toggleInFunction</button>
      </div>
    </>
  );
}
