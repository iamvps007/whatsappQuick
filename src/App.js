import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      link: "",
      isQR: false,
    };
  }
  handleQRButton = () => {
    const { phone } = this.state;
    if (phone.length > 10) {
      console.log("here");
      this.setState({
        link: `https://api.whatsapp.com/send?phone=${phone}`,
        isQR: true,
      });
    } else {
      this.setState({
        isQR: false,
      });
    }
  };
  render() {
    const { isQR, link } = this.state;

    return (
      <React.Fragment>
        <BrowserView>
          <div className="header-desktop"></div>
          <div className="content-desktop">
            <div className="grid-container">
              <div style={{ padding: "" }}>
                <h1
                  style={{
                    fontSize: "26px",
                    fontWeight: "normal",
                    color: "#525252",
                  }}
                >
                  Send Whatsapp messages without saving to contacts
                </h1>
                <p></p>
                <p style={{ fontSize: "18px", color: "#525252" }}>
                  1. Select Contry Code 🇮🇳
                </p>
                <p style={{ fontSize: "18px", color: "#525252" }}>
                  2. Type the recipients Whatsapp messenger ☎️ phone number
                </p>
                <p style={{ fontSize: "18px", color: "#525252" }}>
                  3. Click on ▶️ Generate Button
                </p>
              </div>
              <div>
                <div
                  className="shadow"
                  style={{
                    padding: "15px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                >
                  {!isQR && (
                    <div>
                      <span style={{ fontSize: "18px", color: "green" }}>
                        Mobile Number:{" "}
                      </span>
                      <PhoneInput
                       containerClass = "width-100"
                        country={"in"}
                        value={this.state.phone}
                        onChange={(phone) => {
                          this.setState({ phone });
                          console.log(phone);
                        }}
                      />
                      <button onClick={this.handleQRButton} className="button">
                        Generate
                      </button>
                    </div>
                  )}
                  {isQR && (
                    <div>
                      <QRCode value={link} />
                      <a
                        target="_top"
                        href={link}
                        style={{ width: "94%" }}
                        className="button"
                      >
                        Open Whatsapp
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div style={{ padding: "30px" }}>
              <p style={{ color: "green" }}>Need any Help?</p>
              <p style={{ color: "grey" }}>
                Simply type the recipients Whatsapp messenger phone number below
                to get in touch with those users that aren't in your address
                book.
              </p>
              <p style={{ textAlign: "center" }}></p>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div
            className="header-mobile"
            style={{ padding: "5px", textAlign: "center" }}
          >
            <h2>Whatsapp Direct</h2>
          </div>
          <div style={{ padding: "20px" }}>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                color: "#525252",
              }}
            >
              Send Whatsapp messages without saving to contacts
            </h1>
            <p></p>
            <p style={{ fontSize: "16px", color: "#525252" }}>
              1. Select Contry Code 🇮🇳
            </p>
            <p style={{ fontSize: "16px", color: "#525252" }}>
              2. Type the recipients Whatsapp messenger ☎️ phone number
            </p>
            <p style={{ fontSize: "16px", color: "#525252" }}>
              3. Click on ▶️ Generate Button
            </p>
            <p>&nbsp;</p>
            <div>
              <div
                className="shadow"
                style={{
                  padding: "15px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                }}
              >
                {!isQR && (
                  <div>
                    <span style={{ fontSize: "18px", color: "green" }}>
                      Mobile Number:{" "}
                    </span>
                    <PhoneInput
                      country={"in"}
                      value={this.state.phone}
                      onChange={(phone) => {
                        this.setState({ phone });
                        console.log(phone);
                      }}
                    />
                    <button onClick={this.handleQRButton} className="button">
                      Generate
                    </button>
                  </div>
                )}
                {isQR && (
                  <div>
                    <QRCode value={link} />
                    <a
                      target="_top"
                      href={link}
                      style={{ width: "94%" }}
                      className="button"
                    >
                      Open Whatsapp
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </MobileView>
      </React.Fragment>
    );
  }
}

export default App;
