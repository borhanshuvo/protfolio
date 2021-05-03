import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'contactFrom', e.target, 'user_Qddm2MlS724TZ43umn4K6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return (
        <div className="pt-5 container">
            <h1 className="text-center">Contact</h1>
            <div className="d-flex justify-content-center pt-5">
                <div className="card">
                    <div className="card-body text-dark">
                        <form class="row g-3" onSubmit={sendEmail}>
                            <div class="col-12">
                                <label for="username" class="form-label">Name</label>
                                <input type="text" name="username" class="form-control" id="username" placeholder="Your Name" required />
                            </div>
                            <div class="col-12">
                                <label for="email" class="form-label">E-mail</label>
                                <input type="email" name="email" class="form-control" id="email" placeholder="Your E-mail Address" required />
                            </div>
                            <div class="col-12">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required />
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label">Message</label>
                                <textarea name="message" id="message" cols="15" rows="10" class="form-control" placeholder="Message" required></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;