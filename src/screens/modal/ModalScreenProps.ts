import { ReactNode } from "react";

export interface ModalScreenProps {
    builder: () => ReactNode;
    onClose?: () => void;
}