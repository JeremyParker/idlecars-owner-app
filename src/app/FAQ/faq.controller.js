'use strict';

angular.module('idlecars')
.controller('faq.controller', function ($scope) {
  $scope.faqs = [
    {
      Ask: 'What services can I drive for?',
      Answer: 'You can drive for any radio dispatched car service, or any eHail service that you have an account with. [I think we need to figure out exactly how this part works in re: Uber, Lyft, ...etc.]'
    },
    {
      Ask:'What kinds of cars can I rent?',
      Answer:'At the moment we only offer Lincoln Navigators.'
    },
    {
      Ask: 'Where will I pick up the car?',
      Answer: 'Our parking lot is located at 123 Baker St, Queens, NYC 11234. An attendant will have the key for you.'
    },
    {
      Ask: 'What if I’m not happy with the car?',
      Answer: 'We will give you a full refund for any unused shifts on your schedule if you are not completely satisfied.'
    },
    {
      Ask: 'What if I need more help?',
      Answer: 'Call us at <Brian’s home phone number> and we’ll be happy to help.'
    },
    {
      Ask: 'Can I see the car before I rent it?',
      Answer: 'You can visit a site where our cars live and see all our cars. We guarantee that you’ll get a car for every shift, but at the moment we can’t guarantee which car you’ll get.'
    }
  ]
})
