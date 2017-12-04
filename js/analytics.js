(function() {
  var analytics = window._segment_analytics;

  //- User is interested in CFP
  var CFPLink = document.getElementById('call-for-proposal');
  analytics.trackLink(CFPLink, 'Clicked CFP Link');

  //- User wants to buy tickets
  var ticketLink = document.getElementById('buy-tickets');
  analytics.trackLink(ticketLink, 'Clicked Buy Tickets');

  //- User is interested in Sponsoring
  // var sponsorLink = document.getElementById('sponsor-information');
  // analytics.trackLink(sponsorLink, 'Opened Sponsorship PDF');

  //- User clicks link to Girls Who Code
  var girlsWhoCodeLink = document.getElementById('girls-who-code');
  analytics.trackLink(girlsWhoCodeLink, 'Clicked Girls Who Code Link');

  //- User clicks link to Ruby Together
  var rubyTogetherLink = document.getElementById('ruby-together');
  analytics.trackLink(rubyTogetherLink, 'Clicked Ruby Together Link');

  //- User clicks link to Rubytapas
  var rubyTapasLink = document.getElementById('rubytapas-link');
  analytics.trackLink(rubyTapasLink, 'Clicked RubyTapas Link');

  // User clicks link to Avdi
  var avdiGrimmLink = document.getElementById('avdi-grimm');
  analytics.trackLink(avdiGrimmLink, 'Clicked Advi Grimm Twitter');

  //- User clicks link to Icelab from Tim's Name
  var iceLabLink = document.getElementById('icelab-link');
  analytics.trackLink(iceLabLink, 'Clicked Icelab Link (Tim)');

  // User clicks link to Tim
  var timRileyLink = document.getElementById('tim-riley');
  analytics.trackLink(timRileyLink, 'Clicked Tim Riley Twitter');

  // User clicks link to Kinsey
  var kinseyDurham = document.getElementById('kinsey-durham');
  analytics.trackLink(kinseyDurham, 'Clicked Kinsey Durham Twitter');

  //- User views Code of Conduct
  var conductLink = document.getElementById('code-of-conduct');
  analytics.trackLink(conductLink, 'Clicked Code of Conduct Link');

  //- User views Sponsor
  var honeybadgerLink = document.getElementById('honeybadger-link');
  analytics.trackLink(honeybadgerLink, 'Clicked Honeybadger Link');

  //- User views Sponsor
  var iceLabSponsorLink = document.getElementById('icelab-sponsor-link');
  analytics.trackLink(iceLabSponsorLink, 'Clicked Icelab Link');

  //- User views Sponsor
  var jetbrainsLink = document.getElementById('jetbrains-link');
  analytics.trackLink(jetbrainsLink, 'Clicked Jet Brains Link');

  //- User joins Email List
  var mailingListForm = document.getElementById('mc-embedded-subscribe-form');
  analytics.trackForm(mailingListForm, 'Clicked Receive Updates');
})();
