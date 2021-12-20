import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'

const ContactPage = ({onAddContact}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data)=>{
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("email", data.email);
        uploads.append("phone", data.phone);
        uploads.append("message", data.message);
        onAddContact(uploads);
        history.push('/');
    }
    return (
        <>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <div className="heading_container">
                                    <h2>
                                        Contact Us
            </h2>
                                </div>
                                <form onSubmit={handleSubmit(onHandleSubmit)}>
                                    <div>
                                        <input type="text" placeholder="Full Name "
                                        id = "contact-name"
                                        {...register('name', { required: true })}
                                        />
                                        {errors.name && <span className="text-danger mt-2">Field</span>}
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" 
                                        id = "contact-email"
                                        {...register('email', { required: true })}
                                        />
                                        {errors.email && <span className="text-danger mt-2">Field</span>}
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone number" 
                                        id = "contact-phone"
                                        {...register('phone', { required: true })}
                                        />
                                        {errors.phone && <span className="text-danger mt-2">Field</span>}
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" 
                                        id="contact-message"
                                        {...register('message', { required: true })}
                                        />
                                        {errors.message && <span className="text-danger mt-2">Field</span>}
                                    </div>
                                    <div className="d-flex ">
                                        <button type = "submit">
                                            SEND
              </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="images/contact-img.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
        </>
    )
}

export default ContactPage
