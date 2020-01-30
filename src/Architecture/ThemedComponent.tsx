import { Component, ContextType } from "react";
import ThemeContext from '../Presentation/components/ThemeContext/ThemeContext';
import ThemedComponentProps from './ThemedComponentProps';

abstract class ThemedComponent<P = {}, S = {}> extends Component<P & ThemedComponentProps, S> {
    static contextType = ThemeContext;
    context! : ContextType<typeof ThemeContext>;
}

export default ThemedComponent;