import { Component, ContextType } from "react";
import { ThemeContext } from '../../Contexts/ThemeContext/ThemeContext';
import { ThemedComponentProps } from './ThemedComponentProps';

export abstract class ThemedComponent<P = {}, S = {}> extends Component<P & ThemedComponentProps, S> {
    static contextType = ThemeContext;
    context! : ContextType<typeof ThemeContext>;
}