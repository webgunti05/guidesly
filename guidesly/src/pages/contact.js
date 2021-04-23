import React, {useState} from 'react';
import Layout from '../components/layout';
import FormInput from '../components/textBox';
import {
    HomePageWrapper,
    IntroTitle,
    CenterSection,
    ContactAdress,
    ContactForm,
    ContactFormButton,
  } from "./pagesStyles";
const Contact = () => {
    const [fisrtName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const changeLastName = (e) => {
        setLastName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeMessage = (e) => {
        setMessage(e.target.value);
    }
    return(
        <Layout>
            <HomePageWrapper>
                <CenterSection>
                    <IntroTitle>Contact Guidely</IntroTitle>
                    <ContactAdress><strong>ADDRESS</strong> : Boston, MA 02108, <strong>PHONE</strong>: (617) 812-9397</ContactAdress>
                    <ContactForm>
                        <FormInput type="text" name="firstname" id="firstname" onChange={changeFirstName} value= {fisrtName} placeholder="Ex: John" className="inputStyle" />
                        <FormInput type="text" name="lastname" id="lastname" onChange={changeLastName} value= {lastName} placeholder="Ex: Doe" className="inputStyle" />
                        <FormInput type="email" name="email" id="email" onChange={changeEmail} value= {email} placeholder="Ex: john@something.com" className="inputStyle"  />
                        <FormInput type="text" name="message" id="message" onChange={changeMessage} value= {message} placeholder="Ex: hello" className="inputStyle" />
                        <ContactFormButton type="button">Submit</ContactFormButton>
                    </ContactForm>
                </CenterSection>
            </HomePageWrapper>
        </Layout>
    )
}

export default Contact;