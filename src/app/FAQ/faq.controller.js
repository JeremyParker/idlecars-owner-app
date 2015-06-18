'use strict';

angular.module('idlecars')
.controller('faq.controller', function ($scope) {
  $scope.driverFaqs = [
    {
      Ask: 'How do I rent a car?',
      AnswerP1: 'It’s simple. Browse through our listings, choose the car you want, submit your docs, obtain insurance approval, pay first rental and you are off to drive.'
    },
    {
      Ask: 'How do I sign up?',
      AnswerP1: 'It’s easy. Click “Find a car”, request your car and then follow the steps to create an account.',
      AnswerP2: 'Once you create an account and upload the 4 required documents, we’ll get you on the insurance (usually takes 24-48 hours) and you’ll be ready to drive.'
    },
    {
      Ask: 'What about insurance?',
      AnswerP1: 'All vehicles on idlecars maintain commercial insurance coverage compliant with state and local regulatory requirements. Each driver is added to the existing commercial insurance policy and removed at the end of the rental.'
    },
    {
      Ask: 'How much does a rental cost?',
      AnswerP1: 'It depends on which kind of car you choose to rent. Take a look at our listings here. All rental prices include the cost of insurance and maintenance.'
    },
    {
      Ask: 'What are my terms?',
      AnswerP1: 'Yes. Every car on our marketplace is ready to drive for professional for-hire drivers.'
    },
    {
      Ask: 'Are the cars registered with TLC/TCP/Other for-hire-vehicle regulators?',
      AnswerP1: 'You can visit a site where our cars live and see all our cars. We guarantee that you’ll get a car for every shift, but at the moment we can’t guarantee which car you’ll get.'
    },
      {
      Ask: 'What is the minimum rental period? Is this a lease?',
      AnswerP1: 'Each owner sets their own minimum rental, but most are 1 week to 4 weeks (maximum). Browse our listings and choose what works for you. No, these are not leases, they are rentals.'
    },
      {
      Ask: 'What are the requirements to drive?',
      AnswerP1: 'We verify every driver has appropriate documents to ensure safety and security. Drivers are required to provide the following documents: a Driver License, Professional (FHV) License, Defensive Driving Certificate, and a Proof of Address. We also conduct a review of the motor vehicle history.'
    },
      {
      Ask: 'Is this a lease or rental?',
      AnswerP1: 'They are rentals, they are not leases.'
    }
  ]
})
