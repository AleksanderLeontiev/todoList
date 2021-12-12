import React, {ButtonHTMLAttributes, FC} from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
 const Button: FC<ButtonProps> = ({title, onClick}) => {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    )};
export default Button;

