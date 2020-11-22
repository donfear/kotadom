import React from "react";
import { IComponentProps } from "../../types/component.interface";
import "./modal.scss";

interface IModalProps extends IComponentProps {
  title?: string;
  id: string;
}
export class Modal extends React.Component<IModalProps> {
  render() {
    return (
      <div className="modal" role="dialog" id={this.props.id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {!!this.props.title && (
                <span className="modal-title">
                  {this.props.t?.(this.props.title)}
                </span>
              )}

              <button
                type="button"
                className="close cross"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
