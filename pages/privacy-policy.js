import React, { Component } from 'react';
import Link from 'next/link';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Privacy Policy"
                    pageTitleTwo=""
                    BGImage="bg-custom"
                />  

                <div class="text-container ptb-100">
                    <div class="container px-100">
                        <div className="row align-items-center">
                            <div className="col-12 px-5 pb-50">
                                <div className="col-12 px-5 mb-4">
                                    <h4 className="pb-2">Crossway Data Privacy Notice Information</h4>
                                    <p>
                                        Crossway Data Privacy Notice describes the information we collect, how it is used and shared, 
                                        and your choices regarding this information.
                                        This policy applies to any users of the services of Crossway Data or its affiliates anywhere 
                                        in the world, and to anyone else who contacts Crossway Data or otherwise submits information 
                                        to our Crossway Data Platform, unless noted in the Privacy Notice.
                                    </p>
                                    <p>
                                        Crossway Data offers medicare related logistic and appointment 
                                        scheduling solution suit to both Healthcare Providers, 
                                        Insurance Companies as well as Institutions in the Non-Emergency
                                        Medical Transportation(NEMT) space. 
                                    </p>
                                    <blockquote class="blockquote pr-4 mb-4">
                                        <p class="mb-3">
                                            Our primary focus is to ensure security in our approach to data protection, as well as 
                                            understanding our privacy practices
                                        </p>
                                        <footer class="blockquote-footer small"
                                        style={{ fontSize: '0.85rem' }}>
                                            There are numerous ways that your location data helps create a smooth and stress-free experience
                                            {/* <cite title="Source Title">Source Title</cite> */}
                                        </footer>
                                    </blockquote>

                                    <p className="mb-2">
                                        We understand that when you are registered on our platform and choose to
                                        use our products suit you are placing your faith and trust in us to handle 
                                        your data appropriately, including personal information of you and your end users.
                                        We are committed to maintain this trust. That is why our primary focus is to 
                                        ensure security in our approach to data protection, as well as understanding our 
                                        privacy practices.
                                    </p>
                                    <p className="mb-4">
                                        Part of our approach to show our seriousness in data protection is make sure that
                                        you as our client have information about how we process personal information in connection
                                        with the use of our products and services, especially location data we collect.
                                        One of our policy is to facilitate provision of relevant information to both you our client
                                        as well as your end users in order to make informaed decisions about your personal information
                                        when you/they are utilizing our platform.
                                    </p>
                                </div>
                                <div className="py-1"></div>
                                <div className="col-12 px-5 mt-5">
                                    <h4 className="pb-2">Scope of Crossway Data collecting Personal Information</h4>

                                    <p>
                                        This notice applies to the following categories of users:    
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>Drivers:</strong> these are the individuals who provide transportation 
                                            or shuttle services to patients in ambulances to different destinations.
                                        </li>
                                        <li>
                                            <strong>Dispatchers:</strong> these are the individuals who coordinate/plan 
                                            patients transportations with drivers working under their organisations.
                                        </li>
                                        <li>
                                            <strong>Care providers:</strong> these are the individuals who initiate requests
                                            for patients who are seen in the facilities to be transported.
                                        </li>
                                    </ul>
                                    
                                    <p>
                                        This notice governs data collection in connection with service provision. For example
                                        <strong>Crossway Data Driver App</strong> collects location data event when the application
                                        is not in direct use and other personal data in connection with our mapping and 
                                        routing features. Our practices are subject to application laws in the places in which 
                                        we operate. This means that we engage in the practices described here in this notice in 
                                        particular regions only if permitted under the lats if those places. 
                                    </p>

                                </div>

                                <div className="col-12 px-5 mt-5">
                                    <h4 className="pb-2">Data collection & Usage</h4>

                                    <h5 className="text-muted">The data we collect</h5>

                                    <p className="lead">
                                        <strong>Crossway Data collects personal data:</strong>
                                    </p>
                                    <ul>
                                        <li>
                                            <i>provided by users, such as during account creation</i>
                                        </li>
                                        <li>
                                            <i>created during use of our services, such as location, app usage</i>
                                        </li>
                                        <li>
                                            <i>from other sources such as dispatcher facilities, care providers
                                            and insurance companies registered on the platform.</i>
                                        </li>
                                    </ul>
                                    <p className="mb-3">The following personal data is collected by or on behalf of Crossway Data:</p>

                                    <ol className="mt-3">
                                        <li className="mt-2 mb-2">
                                            <b>User provided data:</b> The following includes:
                                            <ul className="mt-2">
                                                <li>
                                                    <b>User profile:</b> We collect data when users create or update 
                                                    their Crossway Data accounts. This may include their name, email, phone number,
                                                    login username and password, address, profile picture, date of birth, gender
                                                    and insurance details(for patients) for billing purposes.
                                                </li>
                                                <li>
                                                    <b>User Content:</b> We collect that data submitted by users when they
                                                    contact care provider, dispatcher or insurance facilities, provide ratings
                                                    or wish to be picked up from certain facilities. 
                                                </li>
                                                <li>
                                                    <b>Transit information:</b> We collect information during patient transportation
                                                    including the times and dates of upcoming patient transportation from 
                                                    our transportation scheduling feature. We collect information when a dispatcher 
                                                    user or care provider user: inputs transportation details for patients' 
                                                    transportation.
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="mt-3">
                                            <b>Data created during use of our services:</b> These include:
                                            <ul className="mt-2">
                                                <li>
                                                    <b>Location data(ambulance driver):</b> We collect drivers'
                                                    and patients' precise or approximate location data, to enable ride and driver
                                                    tracking, to detect and prevent fraud and satisfy legal requirements. <b>Crossway 
                                                    Data Driver App</b> collects this data when the app is running in the foreground
                                                    (app open an on-screen) or background(app open but not on-screen) of their 
                                                    mobile device.
                                                </li>
                                                <li>
                                                    <b>Location data(patients):</b> We collect patients' precise or
                                                    approximate locatoin to enable and enhance use of our apps including 
                                                    improving pin pointing current location for pickups, enabling safety
                                                    features and prevent as well as detect fraud. 
                                                    <p className="mt-3">
                                                        We collect such data from users' mobile devices if they enable us to do so,
                                                        through <strong className="text-muted">Choice and transparency</strong>. 
                                                        Crossway Data collects such data from the time a transportation is initiated
                                                        by the driver until its completed after dropping off the patient at their 
                                                        final destination. 
                                                    </p>
                                                    <p>
                                                        Patients may use the <strong className="text-muted">Crossway Data Patient</strong>
                                                        without enabling Crossway Data to collect precise location data from their mobile devices. 
                                                        However this may affect features that depend on this data. For example during pickup 
                                                        if patient does not enable collecting location data when they request to be picked up,
                                                        the driver will assume they are being picked up from the address entered manually
                                                        when  scheduling the transportation.
                                                    </p>
                                                </li>
                                                <li>
                                                    <b>Transaction information:</b> We collect transaction information related to 
                                                    use of our services, including the the type of service requested or provided, 
                                                    insurance services delivered are charged to, date abd time of service delivery,
                                                    billable amount, distance travelled and amount of wait time if any.
                                                </li>
                                                <li>
                                                    <b>Communication data:</b> We enable users to communicate with each other 
                                                    through Crossway Data apps and websites e.g. we enable dispatchers, care provider 
                                                    users as well as drivers to text or call. In order to provide this service, 
                                                    Crossway Data receives some data regarding the texts or other communications including
                                                    the date and time of the communication and the content of the communications. 
                                                    These data can be retrieved and uses for customer support services, for 
                                                    safety purposes and to improve our services and features.
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <h5 className="text-muted">How we use personal data</h5>

                                    <p>
                                        <i>
                                            Crossway Data uses personal data to enabel reliable and convenient transportation
                                            and other products and services. The data is also utilised for:
                                        </i>
                                        <ul>
                                            <li>to enhance safety of our users and services</li>
                                            <li>for insurance billing purposes</li>
                                            <li>to enable communication between the different users</li>
                                            <li>in connection with any legal proceedings</li>
                                        </ul>
                                    </p>
                                    <blockquote class="blockquote pr-4 mb-4">
                                        <p className="lead">
                                            <i>
                                                Crossway Data does not sell or share user personal data with third parties for their
                                                direct marketing or for any other purposes.
                                            </i>
                                        </p>
                                    </blockquote>

                                    <p>
                                        We use personal data we collect:
                                    </p>
                                    <ol>
                                        <li>
                                            <b>To provide our services:</b> User provided data is used to provide, 
                                            personalize, maintain and improve service delivery.
                                            <p>
                                                This includes and is not limited to:
                                            </p>
                                            <ul>
                                                <li>
                                                    create/update user accounts
                                                </li>
                                                <li>
                                                    facilitate patient transportation(including using location data to
                                                    facilitate pick up and drop offs), ETA sharing, rating, distance calculation
                                                    utilised for billing purposes.
                                                </li>
                                                <li>track and share progress of patients' transportations.</li>
                                                <li>
                                                    schedule patients' appointments and shuttling to and fro health facilities.
                                                </li>
                                                <li>facilitate generation of insurance claims for NEMT serices</li>
                                            </ul>
                                            <p>
                                                Crossway Data collects all the above information, including colleciton and use of
                                                location data for purposes of these activities, on the grounds that they are necessary
                                                to fullfill our obligations to users.
                                            </p>
                                        </li>
                                        <li>
                                            <b>Enabling communications between users:</b> Ambulance drivers may message the dispatcher
                                            user who coordinate and schedule patients' transportations, or call the patients to confirm
                                            pickup locations, a patient may contact the care provider user or the dispatcher 
                                            transportation coordinator as well.
                                        </li>
                                    </ol>

                                    <h5 className="text-muted mt-4">Data retention & deletion</h5>

                                    <p>
                                        Crossway Data retains user data for as long as necessary for accountability as well
                                        present as evidence incase of any disputes from any of the users or stakeholders.
                                    </p>
                                    <p>
                                        <i>
                                            Users may deactivate their accounts at any time. Crossway Data may retain user data
                                            after they deactivate their accounts due to legal or regulatory requirements.
                                        </i>
                                    </p>
                                </div>

                                {/* <div className="col-12 px-5 mt-5">
                                    <h4 className="pb-2">User choice & transparency</h4>
                                    <p>
                                        <i>
                                            Crossway Data enables users to access and/or control data collected from them
                                            including:
                                            <ul>
                                                <li>device permissions</li>
                                                <li>privacy settings</li>
                                                <li>in-app ratings pages</li>
                                            </ul>
                                        </i>
                                    </p>
                                    <p>
                                        <b>Privacy settings:</b>
                                        <ol>

                                        </ol>
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;