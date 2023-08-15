/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";
import li from "../../../assets/linkedin.svg";
import mail from "../../../assets/email.svg";

const Contact = () => {
  const form_ep =
    " https://public.herotofu.com/v1/00856650-266c-11ee-8058-515da3888232";

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(form_ep, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }
      })
      .catch((err) => {
        e.target.submit();
        console.warn(err);
      });
  };

  return (
    <>
      <div className="contact-page">
        <div className="c-title">Say Hi!</div>
        <div className="c-form" style={{ textAlign: "left" }}>
          <form action={form_ep} onSubmit={handleSubmit} method="POST">
            <div className="c-inputs" style={{ textAlign: "left" }}>
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "20px",
                }}
              >
                {" "}
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "20px",
                }}
              >
                <input type="email" placeholder="Enter Email" name="email" />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "20px",
                }}
              >
                <input type="text" placeholder="Enter Subject" name="subject" />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {" "}
                <textarea placeholder="Message" name="message" required />
              </div>
            </div>

            <div className="c-button">
              <button className="c-btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="c-links">
          <div>
            <img src={li} />
          </div>
          &nbsp;
          <div>
            <img src={mail} />
          </div>
        </div>

        <div className="c-copyright">© 2022 by Sawara Bhattarai</div>
      </div>
    </>
  );
};

export default Contact;
