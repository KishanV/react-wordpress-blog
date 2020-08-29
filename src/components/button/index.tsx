import React = require("react");
import "./index.scss";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const className = "button fancy-hover";
export default class Button extends React.Component<Props, any> {
  render() {
    return (
      <button
        {...this.props}
        className={
          this.props.className
            ? `${this.props.className} ${className}`
            : className
        }
      >
        {this.props.children}
      </button>
    );
  }
}
