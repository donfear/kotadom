import React from "react";
import "./subscribe.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class Subscribe extends React.Component<
  IComponentProps,
  { email: string; isSubsribed: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      isSubsribed: false,
    };
  }

  handleChange(ev: any) {
    this.setState({ email: ev.target.value });
  }

  handleSubmit() {
    document.getElementById("succesModal")?.click();
    this.setState({ email: "", isSubsribed: true });
  }

  render() {
    return (
      <div className="subscribe">
        <div className="subscribe__content">
          <div className="subscribe__title">
            {this.props.t?.('Подписывайтесь на нашу рассылку, и первым получайте новые предложения !')}
          </div>
          <div>
            <form
              className="subscribe__group"
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit();
              }}
            >
              <div className="form-group">
                <input
                  type="email"
                  value={this.state.email}
                  className="form-control"
                  onChange={this.handleChange.bind(this)}
                  placeholder={this.props.t?.('Эмаил')}
                />
              </div>
              <button
                type="submit"
                disabled={!this.state.email.length}
                className={`btn btn-outline-light`}
              >
                {this.props.t?.('Подписаться')}
              </button>
              {this.state.isSubsribed && (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong>{this.props.t?.('Отлично!')}</strong> {this.props.t?.('Подписка оформлена')}
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
