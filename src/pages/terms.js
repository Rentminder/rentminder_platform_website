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
    <div class="font-bold mt-4">
      <a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ text-black" id={id}>
        {children}
      </a>
    </div>
  );
};

const Heading3 = ({ id, children }) => {
  return (
    <div class="font-bold mt-2">
      <a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_2LWZ text-black" id={id}>
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
          <Heading>Terms of Service</Heading>
          <P>Date Last Updated: August 9, 2023</P>
          <p class="py-8">
            Thanks for using the RentMinder service! Please read these RentMinder terms of service (
            <strong>"Terms of Service"</strong>) carefully. These Terms of Service govern your
            access to and use of the RentMinder cloud-based application integration and data linking
            technology services available at{' '}
            <a href="https://www.rentminder.com" target="_blank" rel="noopener noreferrer">
              rentminder.com
            </a>
            , and any updates, upgrades, modified versions, extensions, improvements and derivative
            works of the foregoing (collectively, the <strong>"Service"</strong>). RentMinder will
            be referenced as <strong>"RentMinder"</strong>, or <strong>"we"</strong>/
            <strong>"us"</strong>. By creating an account on the Service, accessing and/or using the
            Service, you irrevocably agree to these Terms of Service. These Terms of Service govern
            your use of and RentMinder provision of the Service. If you do not agree to these Terms
            of Service, you may not create an account on, access or use, the Service.
          </p>
          <P>
            <strong>"You"</strong> means the entity you represent in accepting these Terms or
            Service or, if that does not apply, you individually. If you are accepting on behalf of
            your employer or another entity, you represent and warrant that: (i) you have full legal
            authority to bind your employer or such entity to these Terms of Service; (ii) you have
            read and understand these Terms or Service; and (iii) you agree to these Terms of
            Service on behalf of the party that you represent.
          </P>
          <Heading2 id="1-user-account">1. User Account Registration</Heading2>
          <Heading3 id="a-account-registration-and-use-license">
            (a) Account Registration and Use License
          </Heading3>
          <P>
            In order to access and use all of the features of the Service, you are required to open
            an account (<strong>“User Account”</strong>) by registering with RentMinder. When you
            register for your User Account you must provide true, accurate, current and complete
            information (<strong>“Account Information”</strong>), and you agree to update the
            Account Information in order to ensure that it is current. Upon proper registration and
            opening of a User Account, and subject to all of the terms and conditions of these Terms
            of Service, RentMinder hereby grants to you the personal, non-transferable right and
            license to use the Service, solely for your own internal business purposes, until such
            time as either you or RentMinder elect to terminate such right in accordance with these
            Terms of Service.
          </P>
          <Heading3 id="b-eligibility">(b) Eligibility</Heading3>
          <P>
            As an express condition of being permitted to open a User Account, you represent and
            warrant that you (i) have the legal capacity (including, without limitation, being of
            sufficient age) to enter into contracts under the law of the jurisdiction in which you
            reside, (ii) are not on a list of persons barred you from receiving services under U.S.
            laws (including, without limitation, the Denied Persons List and the Entity List issued
            by the U.S. Department of Commerce, Bureau of Industry and Security) or other applicable
            jurisdiction and (iii) are not a resident of Cuba, Iran, North Korea, Sudan or Syria.
          </P>
          <Heading3 id="c-credentials">(c) Credentials</Heading3>
          <P>
            Upon registration for a User Account, you will provide RentMinder with a user ID and
            password to access your account. You are responsible for maintaining the confidentiality
            of your password and for all of your activities and those of any third party that occur
            through your account, whether or not authorized by you. You agree to immediately notify
            RentMinder of any suspected or actual unauthorized use of your User Account. You agree
            that RentMinder will not under any circumstances be liable for any cost, loss, damages
            or expenses arising out of a failure by you to maintain the security of your password.
          </P>
          <Heading2 id="2-fees-term-and-termination">2. Fees; Term and Termination</Heading2>
          <Heading3 id="a-fees">(a) Fees</Heading3>
          <P>
            Some features of the Service may only be accessed and used upon the payment of
            applicable fees (<strong>“Fees”</strong>). Fees may vary depending on usage in
            accordance with our current pricing policy available in the Service or on the Site. If
            you do not initially register for a version of the Service that requires the payment of
            a fee, you will nonetheless be permitted to use all of the features of the Service for
            the trial period expressly stated at the time you signed up for the trial period use of
            the Service (<strong>“Free Trial Period”</strong>). NOTWITHSTANDING ANYTHING CONTAINED
            HEREIN, ANY SERVICE PROVIDED IS PROVIDED <strong>“AS-IS”</strong> WITHOUT ANY
            REPRESENTATIONS, WARRANTIES OR INDEMNITIES. Upon the expiration of the Free Trial
            Period, you will only be able to access and use those features of the Service the use of
            which does not require the payment of a Fee, unless you subsequently upgrade to a paid
            version of the Service. All Fees are exclusive of all taxes, levies, or duties imposed
            by taxing authorities, and you are solely responsible for payment of all such taxes,
            levies, or duties, excluding only United States (federal or state) taxes.
          </P>
          <Heading3 id="d-termination-and-suspension-by-RentMinder">
            (b) Termination and Suspension by RentMinder
          </Heading3>
          <P>
            RentMinder may terminate your User Account and/or these Terms of Service at any time and
            for any reason upon notice to you. We may also suspend our Service to you at any time,
            with or without cause. If we terminate your User Account without cause, we will refund a
            prorated portion of your monthly prepayment. We will not refund or reimburse you if we
            terminate your User Account for cause, including (without limitation) for a violation of
            these Terms of Service or the Acceptable Use Policy.
          </P>
          <Heading3 id="e-effect-of-termination">(c) Effect of Termination</Heading3>
          <P>
            Once your User Account is terminated, we may permanently delete your User Account and
            any or all User Content associated with it. If you do not log in to your User Account
            for 12 or more months, we may treat your User Account as <strong>“inactive”</strong> and
            permanently delete the User Account and all the data associated with it. Except where an
            exclusive remedy may be specified in this Agreement, the exercise by either party of any
            remedy, including termination, will be without prejudice to any other remedies it may
            have under these Terms of Service. All sections of these Terms of Service which by their
            nature should survive termination will survive, including without limitation, accrued
            rights to payment, use restrictions and indemnity obligations, confidentiality
            obligations, warranty disclaimers, and limitations of liability.
          </P>
          <Heading2 id="6-proprietary-rights-and-improving-the-service">
            3. Proprietary Rights and Improving the Service
          </Heading2>
          <Heading3 id="a-RentMinder-service">(a) RentMinder Service</Heading3>
          <P>
            The Service is made available on a limited access basis, and no ownership right is
            conveyed to you. We and our licensors have and retain all right, title and interest,
            including all intellectual property rights, in and to the Service, including all
            modifications, updates, upgrades, extensions, components and all derivative works to the
            Service. All our rights not expressly granted under these Terms of Service are hereby
            retained.
          </P>
          <Heading3 id="b-suggestions">(b) Suggestions</Heading3>
          <P>
            From time to time at your sole discretion, you may choose to provide suggestions,
            enhancement requests, recommendations or other feedback related to the Service (
            <strong>“Suggestions”</strong>) to us. You hereby grant to RentMinder a royalty-free,
            worldwide, transferable, sublicenseable, irrevocable, perpetual license to use or
            incorporate any Suggestions into the Service and/or other RentMinder products, services
            or offerings.
          </P>
          <Heading3 id="c-improving-the-service">(c) Improving the Service</Heading3>
          <P>
            Notwithstanding anything to the contrary set forth herein or otherwise, RentMinder will
            have the right to collect and analyze data and other information relating to the
            provision, use or performance of the Service and related systems and technologies
            (including information concerning the use of User Account and data derived therefrom),
            and to aggregate and/or de-identify all such data and information. RentMinder will be
            free at any time to: (i) use such information and data to improve and enhance the
            Service; and (ii) disclose such data in aggregate or other de-identified form in
            connection with its business.
          </P>
          <Heading3 id="d-trademarks">(d) Trademarks</Heading3>
          <P>
            RentMinder, RentMinder the RentMinder Logo and all RentMinder product names are
            trademarks and services marks of RentMinder (collectively{' '}
            <strong>“RentMinder Trademarks”</strong>) and third party logos and product names are
            trademarks and service marks of third parties (collectively{' '}
            <strong>“Third Party Trademarks”</strong>) and nothing in these Terms of Service shall
            be construed as granting any license or right to use the RentMinder Trademarks without
            RentMinder's prior written consent or the Third Party Trademarks. You hereby grant
            RentMinder the right to identify you as a customer of RentMinder and to use your logo
            and/or trademark for that purpose.
          </P>

          <Heading2 id="8-service-warranty-indemnification">
            4. Service Warranty; Indemnification
          </Heading2>
          <Heading3 id="a-service-warranty">(a) Service Warranty</Heading3>
          <P>
            If you are a paying subscriber to the Service, RentMinder warrants to you that it will
            provide the Service during the applicable subscription substantially in accordance with
            its documentation under normal use. In the event of any breach of such warranty, your
            exclusive remedy will be RentMinder's re-performance of the deficient Service or, if
            RentMinder cannot re-perform such deficient Service as warranted, you may terminate your
            User Account as set forth above and RentMinder will refund a prorated portion of your
            monthly prepayment. You must notify RentMinder in writing of any warranty deficiency
            within 10 days from receipt of the deficient Service in order to receive the foregoing
            warranty remedy.
          </P>
          <Heading3 id="b-disclaimers">(b) Disclaimers</Heading3>
          <P>
            EXCEPT AS EXPRESSLY SET FORTH IMMEDIATELY ABOVE, THE SERVICE IS PROVIDED STRICTLY ON AN{' '}
            <strong>“AS IS”</strong> AND <strong>“AS AVAILABLE”</strong> BASIS, AND RentMinder MAKES
            NO WARRANTY THAT THE SERVICE IS COMPLETE, SUITABLE FOR YOUR PURPOSE, RELIABLE, USEFUL OR
            ACCURATE, AND ON BEHALF OF ITSELF AND ITS LICENSORS, RentMinder HEREBY EXPRESSLY
            DISCLAIMS ANY AND ALL IMPLIED, STATUTORY OR OTHER WARRANTIES WITH RESPECT TO THE SERVICE
            OR THE AVAILABILITY OF THE FOREGOING, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND
            NONINFRINGEMENT. THE ENTIRE RISK AS TO RESULTS OBTAINED THROUGH USE OF THE SERVICE RESTS
            WITH YOU. RentMinder AND ITS LICENSORS WILL NOT BE LIABLE OR RESPONSIBLE IN ANY WAY FOR
            ANY LOSSES OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF OR RELIANCE ON ANY
            MATERIAL CONTAINED ON THE SERVICE. RentMinder MAKES NO REPRESENTATION OR WARRANTY THAT
            THE AVAILABILITY OF THE SERVICE WILL BE UNINTERRUPTED, OR THAT THE, SERVICE WILL BE
            ERROR FREE OR THAT ALL ERRORS WILL BE CORRECTED.
          </P>
          <Heading3 id="c-your-indemnification-obligations">
            (c) Your Indemnification Obligations
          </Heading3>
          <P>
            You hereby irrevocably agree to indemnify, defend and hold RentMinder, its affiliates,
            directors, officers, employees and agents harmless from and against any and all loss,
            costs, damages, liabilities and expenses (including attorneys' fees) arising out of or
            related to any claim arising from or related to (i) your breach or alleged breach of
            these Terms of Service, and/or (ii) Your Posts or User Content.
          </P>
          <Heading3 id="d-RentMinders-indemnification-obligations">
            (d) RentMinder's Indemnification Obligations
          </Heading3>
          <P>
            If you are a paying subscriber to the Service, RentMinder will defend you against any
            third party claim brought against you alleging that the use of such paid Service as
            permitted hereunder infringes the United States intellectual property rights of a third
            party, and RentMinder shall pay all costs and damages finally awarded against you by a
            court of competent jurisdiction as a result of any such claim; provided that you (a)
            promptly give written notice thereof to RentMinder; (b) give RentMinder sole control of
            the defense and settlement of the claim; and (c) provide to RentMinder all reasonable
            assistance. The foregoing shall not apply to any claim based upon or arising from (i)
            any use of the Service outside the scope of these Terms of Service or Acceptable Use
            Policy, (ii) User Content or Your Posts, or (iii) a combination of the Service with any
            content or other technology not provided by RentMinder.
          </P>
          <Heading2 id="9-limitation-of-liability">5. LIMITATION OF LIABILITY</Heading2>
          <P>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, AND EXCEPT FOR EXCLUDED CLAIMS (AS
            DEFINED BELOW), NEITHER PARTY NOR THEIR LICENSORS (AND IN THE CASE OF RENTMINDER, ANY
            RENTMINDER EXTENDED TEAM) SHALL BE LIABLE TO THE OTHER PARTY FOR ANY (A) INDIRECT,
            INCIDENTAL, CONSEQUENTIAL, PUNITIVE, SPECIAL, EXEMPLARY OR STATUTORY DAMAGES (INCLUDING,
            WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OR PROFITS, LOSS OF REVENUE, LOSS OF DATA,
            LOSS OF GOODWILL OR FOR ANY COST OF COVER OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR
            SERVICES), EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND
            REGARDLESS OF THE LEGAL THEORY UNDER WHICH DAMAGES ARE SOUGHT, WHETHER IN BREACH OF
            CONTRACT OR IN TORT, INCLUDING NEGLIGENCE, OR (B) AMOUNTS IN THE AGGREGATE THAT EXCEED
            THE FEES PAID BY YOU TO RENTMINDER HEREUNDER IN THE TWELVE (3) MONTHS PRECEDING THE DATE
            THE CLAIM AROSE.
          </P>
          <P>
            <strong>“Excluded Claims”</strong> means (i) any amounts owed by you under Fees, (ii)
            your indemnification obligations in these Terms of Service, and (iii) any claims that
            may not be capped or limited under applicable law. The parties agree that the waivers
            and limitations specified in this Section 8 apply regardless of the form of action,
            whether in contract, tort (including negligence), strict liability or otherwise and will
            survive and apply even if any limited remedy specified in these Terms of Service is
            found to have failed of its essential purpose.
          </P>

          <Heading2 id="14-modifications-to-terms-of-service">
            6. Modifications to Terms of Service
          </Heading2>
          <P>
            RentMinder expressly reserves the right to modify the Terms of Service at any time in
            its sole discretion by including such alteration and/or modification in these Terms of
            Service, along with a notice of the effective date of such modified Terms of Service. If
            a revision meaningfully reduces your rights, we will use reasonable efforts to notify
            you (by, for example, through your User Account or in the Service itself). To the extent
            you have purchased a subscription to the Service, the modified terms will be effective
            as to such subscription Service upon the earlier of (i) your next subscription renewal,
            or (ii) your acceptance of the modified Terms of Service by clicking{' '}
            <strong>“Accept”</strong> (or similar button or checkbox) at the time you are presented
            with the modified Terms of Service. If you object to the updated Terms of Service, as
            your exclusive remedy, you may choose not to renew, including cancelling any terms set
            to auto-renew. In all other cases, any continued use by you of the Service after the
            posting of such modified Terms of Service shall be deemed to indicate your irrevocable
            agreement to such modified Terms of Service.
          </P>
          <Heading2 id="15-general">7. General</Heading2>
          <P>
            These Terms of Service and the policies or terms expressly referenced and incorporated
            into these Terms of Service, (e.g. the Acceptable Use Policy) constitute the entire
            agreement and understanding between the parties concerning the subject matter hereof,
            notwithstanding any different or additional terms that may be contained in the form of
            purchase order or other document used by you to place orders or otherwise effect
            transactions hereunder, which such terms are hereby rejected. Neither party may assign
            these Terms of Service without the prior written approval of the other, such approval
            not to be unreasonably withheld or delayed, provided that such approval shall not be
            required in connection with an assignment to an affiliate or to a successor to
            substantially all of such party's assets or business related to these Terms of Service.
            These Terms of Service supersede all prior or contemporaneous discussions, proposals and
            agreements between you and RentMinder relating to the subject matter hereof. If any
            provision of these Terms of Service is held to be invalid or unenforceable, the
            remaining portions will remain in full force and effect and such provision will be
            enforced to the maximum extent possible so as to effect the intent of the parties and
            will be reformed to the extent necessary to make such provision valid and enforceable.
            No waiver of rights by either party may be implied from any actions or failures to
            enforce rights under these Terms of Service or the Acceptable Use Policy. These Terms of
            Service and the Acceptable Use Policy are intended to be and are solely for the benefit
            of RentMinder and you and do not create any right in favor of any third party. These
            Terms of Service will be governed by and construed in accordance with the laws of the
            State of California, without reference to its conflict of laws principles. The Uniform
            Computer Information Transactions Act will not apply to this Agreement. All disputes
            arising out of or relating to these Terms of Service will be submitted to the exclusive
            jurisdiction of a court of competent jurisdiction located in Los Angeles, California,
            and each party irrevocably consents to such personal jurisdiction and waives all
            objections to this venue.
          </P>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
