import * as React from "react";
import "./Input.css";

export interface IProps {
  labelname: string;
  value: string;
  type: "text" | "email" | "number";
  placeholder?: string;
  onChange: (e?: any) => void;
  name: string;
}

const Input: React.SFC<IProps> = props => {
  return (
    <div>
      <label>
        {props.labelname}
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
        />
      </label>
    </div>
  );
};

export default Input;
