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

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <section className="pt-20 md:pt-40">
          <div className="container mx-auto px-8 lg:space-x-4 lg:flex lg:items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none font-whitney">
                Minds the rent.
                <br />
                Frees your mind.
              </h1>
              <p className="text-xl lg:text-2xl mt-6 font-light">
                RentMinder connects with your financial and property management software to monitor,
                analyze, and report.
                <br />
                We bring AI to real estate.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div>
                <HeroImage />
              </div>
              <div class="text-xs text-center text-gray-400 p-2">
                Experience the true power of the RentMiner platform.
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-20 lg:pb-40 lg:pt-48">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold font-whitney">
              The Power of AI For Your Real Estate
            </h2>
            <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
              <div className="flex-1 px-3">
                <Card className="mb-8">
                  <p className="font-semibold text-xl">Finances</p>
                  <p className="mt-4">
                    Connect Quickbooks&reg;, Appfolio&reg; and more to monitor and act on your
                    finances. Print checks and automate transactions between multiple accounts.{' '}
                  </p>
                </Card>
              </div>
              <div className="flex-1 px-3">
                <Card className="mb-8">
                  <p className="font-semibold text-xl">Reports</p>
                  <p className="mt-4">
                    Gather insights using Artificial Intelligence to generate automated reports.
                    Generate PDFs from your data and schedule automated emails to your team.
                  </p>
                </Card>
              </div>
              <div className="flex-1 px-3">
                <Card className="mb-8">
                  <p className="font-semibold text-xl">Automate</p>
                  <p className="mt-4">
                    Continuously monitor your organization's data and stay ahead with custom
                    metrics, audits, and safety checks. Get notified when things require attention.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> */}
        {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
        <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
          <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
          <p className="mt-8">
            <a href="mailto:hello@rentminder.com">
              <Button size="xl">Contact Us to Get Started</Button>
            </a>
          </p>
        </section>
      </Layout>
      <footer className="container mx-auto px-3 mb-8 text-sm text-gray-800">
        <div className="flex -mx-3">
          <div className="flex-1 px-3">
            <div>QuickBooks&reg; is a registered trademark of Intuit, Inc.</div>
            <div>AppFolio&reg; is a registered trademark of AppFolio, Inc.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
