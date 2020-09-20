import React from "react";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_tcvb2pg",
        e.target,
        "user_T8ol3CuL0XPer9ocedYts"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <section id="header">
        <div className="my-3 text-center">
          <h1 className="brand-name">Contact me!</h1>
        </div>

        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <hr />
              <form onSubmit={sendEmail}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message:
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <button
                    onClick={handleClick}
                    class="btn-get-started resume-btn"
                    type="submit"
                  >
                    Send
                  </button>
                  <Snackbar
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Message Sent"
                    action={
                      <React.Fragment>
                        <IconButton
                          size="small"
                          aria-label="close"
                          color="inherit"
                          onClick={handleClose}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </React.Fragment>
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
