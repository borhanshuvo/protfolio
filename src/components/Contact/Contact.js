import React from "react";
import { useForm } from "react-hook-form";
import { MdLocationPin, MdOutlineMail, MdPhone } from "react-icons/md";
import swal from "sweetalert";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const msgTemplate = {
      service_id: "service_8sspudb",
      template_id: "contactFrom",
      user_id: "user_Qddm2MlS724TZ43umn4K6",
      template_params: {
        username: data.username,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    };

    const mail = async () => {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(msgTemplate),
      });

      if (res.status === 200) {
        e.target.reset();
        return swal("Thank You", "Message Sent Successfully.", "success");
      }
      swal("Failed!", "Something went wrong! Please try again.", "error", {
        dangerMode: true,
      });
    };
    mail();
  };

  return (
    <section className="my-md-5 py-md-5">
      <div className="container my-5">
        <h1 className="text-center saira-condensed">
          G e t &nbsp; i n &nbsp; T o u c h
        </h1>
        <hr />
        <div className="row">
          <div
            className="col-md-5"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className="my-5 py-5">
              <div className="saira-condensed d-flex">
                <p>
                  <MdPhone className="fs-40 me-4" />
                </p>
                <p className="fs-20">
                  P h o n e <br /> + 8 8 0 1 7 8 1 9 7 2 2 1 0
                </p>
              </div>
              <div className="saira-condensed d-flex">
                <p>
                  <MdOutlineMail className="fs-40 me-4" />
                </p>
                <p className="fs-20">
                  E m a i l <br /> b o r h a n 0 1 5 @ g m a i l . c o m
                </p>
              </div>
              <div className="saira-condensed d-flex">
                <p>
                  {" "}
                  <MdLocationPin className="fs-40 me-4" />
                </p>
                <p className="fs-20">
                  L o c a t i o n <br /> C h a n d p u r , C h i t t a g o n g ,
                  B a n g l a d e s h
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-7"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="w-sm-100">
              <div>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <label for="username" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        className="input-form"
                        id="username"
                        placeholder="Your Name"
                        autoComplete="off"
                        required
                        {...register("username")}
                      />
                    </div>
                    <div>
                      <label for="email" className="form-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="input-form"
                        id="email"
                        placeholder="Your E-mail Address"
                        autoComplete="off"
                        required
                        {...register("email")}
                      />
                    </div>
                    <div>
                      <label for="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="input-form"
                        id="subject"
                        placeholder="Subject"
                        autoComplete="off"
                        required
                        {...register("subject")}
                      />
                    </div>
                    <div>
                      <label for="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols="8"
                        rows="6"
                        className="input-form"
                        placeholder="Message"
                        required
                        {...register("message")}
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <input
                        type="submit"
                        value="Send Message"
                        className="form-button"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
