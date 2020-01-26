import { Component, ContextType } from "react";
import ThemeContext from '../Presentation/components/ThemeContext/ThemeContext';

abstract class ThemedComponent<P = {}, S = {}> extends Component<P, S> {
    static contextType = ThemeContext;
    context! : ContextType<typeof ThemeContext>;
}

export default ThemedComponent;