import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import toast from 'react-hot-toast';

const Contact = () => {
    function sendEmail(e) {
        const loading = toast.loading('Please wait...!');
        e.preventDefault();

        emailjs.sendForm('gmail', 'contactFrom', e.target, 'user_Qddm2MlS724TZ43umn4K6')
            .then((result) => {
                toast.dismiss(loading);
                if (result) {
                    e.target.reset();
                    return swal("Thank You", "Message Sent Successfully.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            }, (error) => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            });
    }
    const btnDesign = { fontSize: '15px', backgroundImage: 'linear-gradient(90deg, #19D3AF, #0FCFEA)', border: 'none', padding: '10px 20px', color: 'black', borderRadius: '10px', textDecoration: 'none' };
    return (
        <div className="pt-5 container pb-5">
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
                                <button type="submit" style={btnDesign}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;