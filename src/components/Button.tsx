import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>;

type ButtonProps = DefaultButtonPropsType & {
    text: JSX.Element | string
    onClick: () => void
};

export const Button: React.FC<ButtonProps> = ({
                                                  text,
                                                  onClick,
                                                  ...restProps
                                              }) => {
    return (
        <button onClick={onClick} {...restProps}>
            {text}
        </button>
    );
};
