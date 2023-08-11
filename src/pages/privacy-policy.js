import React, { useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
export { Head } from '../components/layout/Head';

const Heading = ({ children }) => {
  return <div class="text-2xl font-bold">{children}</div>;
};

const Heading2 = ({ id, children }) => {
  return (
    <div className="font-bold mt-4">
      <a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ text-black" id={id}>
        {children}
      </a>
    </div>
  );
};

const Heading3 = ({ id, children }) => {
  return (
    <div className="font-bold mt-2">
      <a aria-hidden="true" tabindex="-1" className="anchor enhancedAnchor_2LWZ text-black" id={id}>
        {children}
      </a>
    </div>
  );
};

const P = ({ id, children }) => {
  return <div class="">{children}</div>;
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="container mx-auto px-8 lg:space-x-4 lg:flex lg:items-center">
        <section className="pt-20 md:pt-40">
          <Heading>Privacy Policy </Heading>
          <P>Date Last Updated: August 9, 2023</P>
          <p>
            Welcome to the web site (the "Site") of RentMinder ( "RentMinder", "we", "us" and/or
            "our"). This Site is operated by RentMinder and has been created to provide information
            about our company and its content and data linking platform and related services
            (together with the Site, the "Service(s)") to our Service visitors ("you", "your"). This
            Privacy Policy sets forth RentMinder's policy with respect to information including
            personally identifiable data ("Personal Data") and other information that is collected
            from visitors to the Site and Services.
          </p>
          <Heading2 id="1-third-party-service-integration">
            1. Third-Party Service Integration
          </Heading2>
          <p>
            Our Service allows you to integrate and create commands for various online third-party
            services ("Third-Party Services"). In order to take advantage of this feature, you may
            need to authenticate, register for or log into Third-Party Services through the Service
            or on the websites of their respective providers. When you enable linking between or log
            in to Third-Party Services through the Service, we will collect relevant information
            necessary to enable the Service to access that Third-Party Service and your data and
            content contained within that Third-Party Service ("Login Credentials"). We store your
            Login Credentials long enough to enable linking to the Third-Party Service.
          </p>
          <p>
            When you enable the Service to link content and data between Third-Party Services, the
            Third-Party Services will provide us with access to certain information that you may
            have provided to the Third-Party Services, and we will use, store and disclose such
            information in accordance with this Privacy Policy and the rules you set to govern the
            linking. In addition, you can use the Service to share content and Personal Data amongst
            the Third-Party Services you integrate with the Service. Please remember that the manner
            in which Third-Party Services use, store and disclose your information is governed by
            the policies of such Third-Party Services, and RentMinder shall have no liability or
            responsibility for the privacy practices or other actions of any Third-Party Services
            that may be enabled within the Service.
          </p>
          <p>
            We may retain certain personally non-identifiable information related to the data or
            content linked between Third-Party Services (for example, date sent, link configuration,
            names of the Third-Party Services), for the purpose of improving our Services and as
            described below in the "Aggregated Personal Data" section.
          </p>
          <Heading2 id="2-third-party-payment-processor">2. Third-Party Payment Processor</Heading2>
          <p>
            We use a third party payment processor to process payments made to us. In connection
            with the processing of such payments, we do not retain any personally identifiable
            information or any financial information such as credit card numbers. Rather, all such
            information is provided directly to our third party processor, Stripe, whose use of your
            personal information is governed by their privacy policy, which may be viewed at{' '}
            <a href="https://stripe.com/us/privacy" target="_blank" rel="noopener noreferrer">
              https://stripe.com/us/privacy
            </a>
            .
          </p>
          <Heading2 id="3-information-we-collect">3. Information We Collect</Heading2>
          <p>
            When you interact with us through the Services, we may collect Personal Data and other
            information from you, as further described below:
          </p>
          <Heading3 id="a-personal-data-that-you-provide-through-the-services">
            (a) Personal Data That You Provide Through the Services
          </Heading3>
          <p>
            We collect Personal Data from you when you voluntarily provide such information, such as
            when you contact us with inquiries, respond to one of our surveys, register for access
            to the RentMinder Services or use certain RentMinder Services. Wherever RentMinder
            collects Personal Data we make an effort to provide a link to this Privacy Policy. You
            can choose at any time to opt out by contacting support at{' '}
            <a href="mailto:support@rentminder.com" target="_blank" rel="noopener noreferrer">
              support@rentminder.com
            </a>
            , you can also contact us to opt out of your information being used for purposes other
            than it was originally collected.
          </p>
          <p>
            By voluntarily providing us with Personal Data, you are consenting to our use of it in
            accordance with this Privacy Policy. If you provide Personal Data to the Services, you
            acknowledge and agree that such Personal Data may be transferred from your current
            location to the offices and servers of RentMinder and the authorized third parties
            referred to herein located in the United States. The Personal Information that you
            provide can be accessed at any time through your account or you can contact our customer
            support at{' '}
            <a href="mailto:support@rentminder.com" target="_blank" rel="noopener noreferrer">
              support@rentminder.com
            </a>{' '}
            if you need help accessing your account.
          </p>
          <Heading3 id="b-cookies">(b) Cookies</Heading3>
          <p>
            In operating the Services, we may use a technology called "cookies." A cookie is a piece
            of information that the computer that hosts our Services gives to your browser when you
            access the Services. Our cookies help provide additional functionality to the Services
            and help us analyze Services usage more accurately. For instance, our Services may set a
            cookie on your browser that allows you to access the Services without needing to
            remember and then enter a password more than once during a visit to the Services. In all
            cases in which we use cookies, we will not collect Personal Data except with your
            permission. On most web browsers, you will find a "help" section on the toolbar. Please
            refer to this section for information on how to receive notification when you are
            receiving a new cookie and how to turn cookies off. We recommend that you leave cookies
            turned on because they allow you to take advantage of some of the Services's features.
          </p>
          <Heading3 id="c-aggregated-personal-data">(c) Aggregated Personal Data</Heading3>
          <p>
            In an ongoing effort to better understand and serve the users of the RentMinder
            Services, RentMinder often conducts research on its customer demographics, interests and
            behavior based on the Personal Data and other information provided to us. This research
            may be compiled and analyzed on an aggregate basis, and RentMinder may share this
            aggregate data with its affiliates, agents and business partners. This aggregate
            information does not identify you personally. RentMinder may also disclose aggregated
            user statistics in order to describe our services to current and prospective business
            partners, and to other third parties for other lawful purposes.
          </p>
          <p>
            We will keep any information that you provide to us until such time as you delete your
            account with the RentMinder Service.
          </p>
          <Heading2 id="4-our-use-of-your-personal-data-and-other-information">
            4. Our Use of Your Personal Data and Other Information
          </Heading2>
          <p>
            RentMinder will not sell or rent to any third party any of the personal information or
            data that you provide to us. RentMinder uses the Personal Data you provide in a manner
            that is consistent with this Privacy Policy. If you provide Personal Data for a certain
            reason, we may use the Personal Data in connection with the reason for which it was
            provided. For instance, if you contact us by email, we will use the Personal Data you
            provide to answer your question or resolve your problem. Also, if you provide Personal
            Data in order to obtain access to the RentMinder Services, we will use your Personal
            Data to provide you with access to such services and to monitor your use of such
            services. RentMinder and its subsidiaries and affiliates (the "RentMinder Related
            Companies") may also use your Personal Data and other personally non-identifiable
            information collected through the Services to help us improve the content and
            functionality of the Services, to better understand our users and to improve the
            RentMinder Services. RentMinder and its affiliates may use this information to contact
            you in the future to tell you about services we believe will be of interest to you. If
            we do so, each communication we send you will contain instructions permitting you to
            "opt-out" of receiving future communications. In addition, if at any time you wish not
            to receive any future communications or you wish to have your name deleted from our
            mailing lists, please contact us as indicated below.
          </p>
          <p>
            If RentMinder intends on using any Personal Data in any manner that is not consistent
            with this Privacy Policy, you will be informed of such anticipated use prior to or at
            the time at which the Personal Data is collected.
          </p>
          <Heading2 id="5-our-disclosure-of-your-personal-data-and-other-information">
            5. Our Disclosure of Your Personal Data and Other Information
          </Heading2>
          <p>
            You can visit the Services without providing any Personal Data. If you choose not to
            provide any Personal Data, you may not be able to use certain RentMinder Services.
          </p>
          <p>
            RentMinder is not in the business of selling your information. We consider this
            information to be a vital part of our relationship with you. There are, however, certain
            circumstances in which we may share your Personal Data with certain third parties
            without further notice to you, as set forth below:
          </p>
          <p>
            <strong>Business Transfers:</strong> As we develop our business, we might sell or buy
            businesses or assets. In the event of a corporate sale, merger, reorganization,
            dissolution or similar event, Personal Data may be part of the transferred assets.
          </p>
          <p>
            <strong>Related Companies:</strong> We may also share your Personal Data with our
            Related Companies for purposes consistent with this Privacy Policy.
          </p>
          <p>
            <strong>Agents, Consultants and Related Third Parties:</strong> RentMinder, like many
            businesses, sometimes hires other companies to perform certain business-related
            functions. Examples of such functions include mailing information, maintaining databases
            and processing payments. When we employ another company to perform a function of this
            nature, we only provide them with the information that they need to perform their
            specific function.
          </p>
          <p>
            <strong>Business Partners:</strong> If one of our business partners refers you to us, we
            may disclose Personal Data pursuant to our agreement with that business partner. We do
            not control and are not responsible for the privacy practices of our business partners.
          </p>
          <p>
            <strong>Legal Requirements:</strong> RentMinder may disclose your Personal Data if
            required to do so by law or in the good faith belief that such action is necessary to
            (i) comply with a legal obligation, (ii) protect and defend the rights or property of
            RentMinder, (iii) act in urgent circumstances to protect the personal safety of users of
            the Services or the public, or (iv) protect against legal liability.
          </p>
          <Heading2 id="6-california-consumer-privacy-act-ccpa">
            6. California Consumer Privacy Act (CCPA)
          </Heading2>
          <p>
            To the extent provided for by law and subject to applicable exceptions, California
            residents have the following privacy rights in relation to the Personal Information we
            collect:
          </p>
          <ul>
            <li>
              The right to know what Personal Information we have collected and how we have used and
              disclosed that Personal Information;
            </li>
            <li>The right to request deletion of your Personal Information; and</li>
            <li>
              The right to be free from discrimination relating to the exercise of any of your
              privacy rights.
            </li>
          </ul>
          <p>
            <strong>Exercising Your Rights:</strong> California residents can exercise the above
            privacy rights by emailing us at:
            <a href="mailto:support@rentminder.com" target="_blank" rel="noopener noreferrer">
              support@rentminder.com
            </a>
          </p>
          <p>
            <strong>Verification:</strong> in order to protect your Personal Information from
            unauthorized access or deletion, we may require you to verify your login credentials
            before you can submit a request to know or delete Personal Information. If you do not
            have an account with us, or if we suspect fraudulent or malicious activity, we may ask
            you to provide additional Personal Information for verification. If we cannot verify
            your identity, we will not provide or delete your Personal Information.
          </p>
          <p>
            <strong>Authorized Agents:</strong> you may submit a request to know or a request to
            delete your Personal Information through an authorized agent. If you do so, the agent
            must present signed written permission to act on your behalf and you may also be
            required to independently verify your identity with us.
          </p>
          <Heading2 id="7-exclusions">7. Exclusions</Heading2>
          <p>
            This Privacy Policy does not apply to any Personal Data collected by RentMinder other
            than Personal Data collected through the Services. This Privacy Policy shall not apply
            to any unsolicited information you provide to RentMinder through the Services or through
            any other means. This includes, but is not limited to, information posted to any public
            areas of the Services, such as bulletin boards (collectively, "Public Areas"), any ideas
            for new products or modifications to existing products, and other unsolicited
            submissions (collectively, "Unsolicited Information"). All Unsolicited Information shall
            be deemed to be non-confidential and RentMinder shall be free to reproduce, use,
            disclose, and distribute such Unsolicited Information to others without limitation or
            attribution.
          </p>
          <p>
            If you are invited to join a RentMinder team account, and you accept the invitation, you
            are agreeing that certain of your information will be shared with the team account
            holder and other team members. In particular, the team account holder will have access
            to your name, email address, avatar (if any) and task usage, and other team members will
            have access to your name, email address and avatar (if any). Any information you share
            via a team account, including data from Third Party Services, will be available to all
            team members of the team account you have joined. You are solely responsible for any
            information you share via a team account, which is posted at your own risk.
          </p>
          <Heading2 id="8-children">8. Children</Heading2>
          <p>
            RentMinder does not knowingly collect Personal Data from children under the age of 13.
            If you are under the age of 13, please do not submit any Personal Data through the
            Services. We encourage parents and legal guardians to monitor their children's Internet
            usage and to help enforce our Privacy Policy by instructing their children never to
            provide Personal Data on the Services without their permission. If you have reason to
            believe that a child under the age of 13 has provided Personal Data to RentMinder
            through the Services, please contact us, and we will endeavor to delete that information
            from our databases.
          </p>
          <Heading2 id="9-links-to-other-web-sites">9. Links to Other Web Sites</Heading2>
          <p>
            This Privacy Policy applies only to the Services. The Services may contain links to
            other web sites not operated or controlled by RentMinder (the "Third-Party Sites"). The
            policies and procedures we described here do not apply to the Third-Party Sites. The
            links from the Services do not imply that RentMinder endorses or has reviewed the
            Third-Party Sites. We suggest contacting those sites directly for information on their
            privacy policies.
          </p>
          <Heading2 id="10-security">10. Security</Heading2>
          <p>
            RentMinder takes reasonable steps to protect the Personal Data provided via the Services
            from loss, misuse, and unauthorized access, disclosure, alteration, or destruction.
            However, no Internet or email transmission is ever fully secure or error free. In
            particular, email sent to or from the Services may not be secure. Therefore, you should
            take special care in deciding what information you send to us via email. Please keep
            this in mind when disclosing any Personal Data to RentMinder via the Internet.
          </p>
          <Heading2 id="11-changes-to-RentMinders-privacy-policy">
            11. Changes to RentMinder's Privacy Policy
          </Heading2>
          <p>
            The Services and our business may change from time to time. As a result, at times it may
            be necessary for RentMinder to make changes to this Privacy Policy. RentMinder reserves
            the right to update or modify this Privacy Policy at any time and from time to time. If
            we do this, we will post the changes to this Privacy Policy on this page and will
            indicate at the top of this page the date these terms were last revised. We will also
            notify you, either through the Service user interface, in an email notification or
            through other reasonable means. Please review this policy periodically, and especially
            before you provide any Personal Data. Any such changes will become effective no earlier
            than fourteen (14) days after they are posted, except that changes addressing new
            functions of the Service or changes made for legal reasons will be effective
            immediately. This Privacy Policy was last updated on the date indicated above. Your
            continued use of the Service after the date any such changes become effective
            constitutes your acceptance of the new Privacy Policy.
          </p>
          <Heading2 id="12-other-terms">12. Other Terms</Heading2>
          <p>
            Your access to and use of the Services is subject to the Terms of Service at{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              /terms
            </a>
            .
          </p>
          <Heading2 id="13-contacting-RentMinder">13. Contacting RentMinder</Heading2>
          <p>
            To keep your Personal Data accurate, current, and complete, please contact us as
            specified below. We will take reasonable steps to update or correct Personal Data in our
            possession that you have previously submitted via the Services. Please also feel free to
            contact us if you have any questions about RentMinder's Privacy Policy or the
            information practices of the Services.
          </p>
          <p>
            All disputes arising out of or relating to these Terms of Service will be submitted to
            the exclusive jurisdiction of a court of competent jurisdiction located in Los Angeles,
            California, and each party irrevocably consents to such personal jurisdiction and waives
            all objections to this venue.
          </p>
          <p>
            You may contact us as follows:{' '}
            <a href="mailto:support@rentminder.com" target="_blank" rel="noopener noreferrer">
              support@rentminder.com
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
