import { ClassContextComponent } from "../components/ClassContextComponent";
import { FunctionContextComponent } from "../components/FunctionContextComponent";
import { ThemeProvider } from "../components/ThemeContext";

export function OnUseContext() {
  return (
    <>
      <p>useContext page</p>
      <ThemeProvider>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeProvider>
    </>
  );
}
