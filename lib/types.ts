export interface TerminalLine {
    text: string;
    isCommand?: boolean;
    isOutput?: boolean;
    delay?: number;
}

export interface DisplayedLine {
    text: string;
    isCommand?: boolean;
    isOutput?: boolean;
}
