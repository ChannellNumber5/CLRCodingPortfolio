import React from 'react';


function ContactForm() {
    return (
        <div>
            {/* copies in contact form code from portfolio already created https://github.com/ChannellNumber5/CRobinsonPortfolio */}
            <form>
            <p>
                <label for="firstName">First Name:</label>
                <input type="text" className="userContactInfo" id = "firstName" placeholder="Enter Your First Name" name="userFirstName"></input>
            </p>
            <p>
                <label for="lastName">Last Name:</label>
                <input type="text" className="userContactInfo" id="lastName" placeholder="Enter Your Last Name" name="userLastName"></input>
            </p>
            <p>
                <label for="userEmailAddress">Email Address:</label>
                <input type="text" className="userContactInfo" id="userEmailAddress" placeholder="Enter your Email Address"  name="userEmailAddress"></input>
            </p>
            <p>
                <input type="submit" value="Submit"></input>
            </p>
            </form>
        </div>
    );
}

export default Contact;