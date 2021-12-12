import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type = 'text', placeholder, value, name, onChange }) => {
    return(
        <div className="field">
            <div className="control">
                <input
                    style={{width: "100%", height: "50px", fontWeight: 700}}
                    className="input"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    id={name}
                    onChange={onChange}
                    required
                    autoComplete="off"
                />
            </div>
        </div>
    );
};

export default Input;