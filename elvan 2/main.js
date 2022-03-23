// client connects to Contentful, 
// space and accessToken are from Contenful Settings > API Keys
var client = contentful.createClient({
  space: '9s0ll2fupolg',
  accessToken: 'oAuAOPxL-X2FZDxTq8NiPtMAPctSlqYfgW2k8xFP8xU',
});

// simple function to change text to title case
function titleCase(str) {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

// for index/landing page
// wrapping this around container of a page so any page's console won't shout at me with errors
var index = document.getElementById('index');
if (index) {

  // header content
  client.getEntry('5ltgImhJqp1FQv3UHWvOhY').then(function (entry) {

    // page title
    indexPageTitle.innerHTML = entry.fields.title;
    
    // logo
    var logo = document.createElement('img');
    logo.src = 'http:' + entry.fields.logo.fields.file.url;
    logo.alt = entry.fields.logo.fields.description;
    document.getElementById('headLogo').append(logo);

    // text beside logo
    var headerh1 = document.createElement('h1');
    headerh1.innerHTML = entry.fields.title;
    
    var headerh3 = document.createElement('h3');
    headerh3.innerHTML = entry.fields.description;
    headerh3.classList.add('text-muted');
    document.getElementById('headText').append(headerh1, headerh3);

    // hero image
    var hero = document.createElement('img');
    hero.src = 'http:' + entry.fields.cover.fields.file.url;
    hero.alt = entry.fields.cover.fields.description;
    hero.classList.add('img-fluid');
    document.getElementById('headFig').append(hero);

  });

  // Deck 1 card 1
  // articles content - Learn UI/UX Design
  client.getEntry('3cgRCwNJN122E6LE6958yz').then(function (entry) {
    
    // grab title text from content type here (if content type on Contentful ever changes, deck title in website would too)
    var deck1Titleh2 = document.createElement('h2');
    deck1Titleh2.innerHTML = titleCase(entry.sys.contentType.sys.id);
    document.getElementById('deck1Title').append(deck1Titleh2);

    // card image
    var d1Card1Img = document.getElementById('d1Card1Img');
    d1Card1Img.src = 'http:' + entry.fields.image.fields.file.url;
    d1Card1Img.alt = entry.fields.image.fields.description;

    // card title 
    d1Card1Title.innerHTML = entry.fields.title;
    
    // card text
    d1Card1Text.innerHTML = entry.fields.description;

  });

  // Deck 1 card 2
  // articles content - UX Writing
  client.getEntry('4rlFDwcCZ8fJevWHdONM0M').then(function (entry) {
    
    // card image
    var d1Card2Img = document.getElementById('d1Card2Img');
    d1Card2Img.src = 'http:' + entry.fields.image.fields.file.url;
    d1Card2Img.alt = entry.fields.image.fields.description;

    // card title 
    d1Card2Title.innerHTML = entry.fields.title;
    
    // card text
    d1Card2Text.innerHTML = entry.fields.description;

  });

  // Deck 1 card 3
  // articles content - UX Writing
  client.getEntry('1QkLluyb2ZVZNtnDo0UWRz').then(function (entry) {
    
    // card image
    var d1Card3Img = document.getElementById('d1Card3Img');
    d1Card3Img.src = 'http:' + entry.fields.image.fields.file.url;
    d1Card3Img.alt = entry.fields.image.fields.description;

    // card title 
    d1Card3Title.innerHTML = entry.fields.title;
    
    // card text
    d1Card3Text.innerHTML = entry.fields.description;

  });

  // Deck 2 card 1
  // videos content - A day in the life of a UX Designer - what I do day to day
  client.getEntry('15DK1c9DuYAe7FEqjAO6x4').then(function (entry) {
    
    // grab title text from content type here (if content type on Contentful ever changes, deck title in website would too)
    var deck2Titleh2 = document.createElement('h2');
    deck2Titleh2.innerHTML = titleCase(entry.sys.contentType.sys.id);
    document.getElementById('deck2Title').append(deck2Titleh2);

    // card image
    var d2Card1Img = document.getElementById('d2Card1Img');
    d2Card1Img.src = 'http:' + entry.fields.image.fields.file.url;
    d2Card1Img.alt = entry.fields.image.fields.description;

    // card title 
    d2Card1Title.innerHTML = entry.fields.title;
    
    // card text
    d2Card1Text.innerHTML = entry.fields.fullDescription;

  });

  // Deck 2 card 2
  // videos content - UX Design Trends 2022 (And The Future Of UX…)
  client.getEntry('4P5UZ8iJDQukB5Vbc6zUfT').then(function (entry) {
    
    // card image
    var d2Card2Img = document.getElementById('d2Card2Img');
    d2Card2Img.src = 'http:' + entry.fields.image.fields.file.url;
    d2Card2Img.alt = entry.fields.image.fields.description;

    // card title 
    d2Card2Title.innerHTML = entry.fields.title;
    
    // card text
    d2Card2Text.innerHTML = entry.fields.fullDescription;

  });  

  // Deck 2 card 3
  // videos content - UX Design: How To Get Started (A Full Guide)
  client.getEntry('7xZ7R9oYYFObetn78Ovndw').then(function (entry) {
    
    // card image
    var d2Card3Img = document.getElementById('d2Card3Img');
    d2Card3Img.src = 'http:' + entry.fields.image.fields.file.url;
    d2Card3Img.alt = entry.fields.image.fields.description;

    // card title 
    d2Card3Title.innerHTML = entry.fields.title;
    
    // card text
    d2Card3Text.innerHTML = entry.fields.fullDescription;

  });  

  // Deck 3 card 1
  // events content - A Career in UI/UX: Getting Started in User Interface | Virtual Workshop
  client.getEntry('3teDVD8lLlOTLXhOlvXKCZ').then(function (entry) {
    
    // grab title text from content type here (if content type on Contentful ever changes, deck title in website would too)
    var deck3Titleh2 = document.createElement('h2');
    deck3Titleh2.innerHTML = titleCase(entry.sys.contentType.sys.id);
    document.getElementById('deck3Title').append(deck3Titleh2);

    // card image
    var d3Card1Img = document.getElementById('d3Card1Img');
    d3Card1Img.src = 'http:' + entry.fields.image.fields.file.url;
    d3Card1Img.alt = entry.fields.image.fields.description;

    // card title 
    d3Card1Title.innerHTML = entry.fields.title;
    
    // card text
    d3Card1Text.innerHTML = entry.fields.description;

  });

  // Deck 3 card 2
  // events content - Thinkful Webinar || UX/UI Design: Designing A UX Case Study
  client.getEntry('6uhInpl2bVHov5ZFbJ2Qio').then(function (entry) {
    
    // card image
    var d3Card2Img = document.getElementById('d3Card2Img');
    d3Card2Img.src = 'http:' + entry.fields.image.fields.file.url;
    d3Card2Img.alt = entry.fields.image.fields.description;

    // card title 
    d3Card2Title.innerHTML = entry.fields.title;
    
    // card text
    d3Card2Text.innerHTML = entry.fields.description;

  });  

  // Deck 3 card 3
  // events content - UX Design: How To Get Started (A Full Guide)
  client.getEntry('2TIiDFcpSf9aYOHn9L47qG').then(function (entry) {
    
    // card image
    var d3Card3Img = document.getElementById('d3Card3Img');
    d3Card3Img.src = 'http:' + entry.fields.image.fields.file.url;
    d3Card3Img.alt = entry.fields.image.fields.description;

    // card title 
    d3Card3Title.innerHTML = entry.fields.title;
    
    // card text
    d3Card3Text.innerHTML = entry.fields.description;

  }); 
}

// Footer is global in the site
client.getEntry('6jyu5UAAK5yKGNclyk99oM').then(function (entry) {
  
  footer.innerHTML = entry.fields.title;
  var footerLink = document.createElement('a');
  footerLink.classList.add('text-dark');
  footerLink.href = entry.fields.link;
  footerLink.target = '_blank';
  footerLink.innerHTML = entry.fields.linkText;
  document.getElementById('footer').append(footerLink);

});  

// Deck 1 card 1 detail page
var d1Card1Page = document.getElementById('d1Card1Page');
if (d1Card1Page) {
  client.getEntry('3cgRCwNJN122E6LE6958yz').then(function (entry) {

    // page title
    d1Card1PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d1Card1Pageh1 = document.createElement('h1');
    d1Card1Pageh1.innerHTML = entry.fields.title;
    d1Card1Pageh1.classList.add('m-5');

    // image
    var d1Card1PageImg = document.createElement('img');
    d1Card1PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d1Card1PageImg.alt = entry.fields.image.fields.description;
    d1Card1PageImg.classList.add('img-fluid');

    // description
    var d1Card1PageDesc = document.createElement('h5');
    d1Card1PageDesc.innerHTML = entry.fields.description;

    // full description
    var d1Card1PageFullDesc = document.createElement('p');
    d1Card1PageFullDesc.innerHTML = entry.fields.fullDesc;

    // button (link)
    var d1Card1PageBtn = document.createElement('a');
    d1Card1PageBtn.innerHTML = entry.fields.linkText;
    d1Card1PageBtn.classList.add('btn', 'btn-primary');
    d1Card1PageBtn.href = entry.fields.link;
    d1Card1PageBtn.target = '_blank';

    document.getElementById('d1Card1Page').append(d1Card1Pageh1, d1Card1PageImg, d1Card1PageDesc, d1Card1PageFullDesc, d1Card1PageBtn);

  });
}

// Deck 1 card 2 detail page
var d1Card1Page = document.getElementById('d1Card2Page');
if (d1Card1Page) {
  client.getEntry('4rlFDwcCZ8fJevWHdONM0M').then(function (entry) {

    // page title
    d1Card2PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d1Card2Pageh1 = document.createElement('h1');
    d1Card2Pageh1.innerHTML = entry.fields.title;
    d1Card2Pageh1.classList.add('m-5');

    // image
    var d1Card2PageImg = document.createElement('img');
    d1Card2PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d1Card2PageImg.alt = entry.fields.image.fields.description;
    d1Card2PageImg.classList.add('img-fluid');

    // description
    var d1Card2PageDesc = document.createElement('h5');
    d1Card2PageDesc.innerHTML = entry.fields.description;

    // full description
    var d1Card2PageFullDesc = document.createElement('p');
    d1Card2PageFullDesc.innerHTML = entry.fields.fullDesc;

    // button (link)
    var d1Card2PageBtn = document.createElement('a');
    d1Card2PageBtn.innerHTML = entry.fields.linkText;
    d1Card2PageBtn.classList.add('btn', 'btn-primary');
    d1Card2PageBtn.href = entry.fields.link;
    d1Card2PageBtn.target = '_blank';

    document.getElementById('d1Card2Page').append(d1Card2Pageh1, d1Card2PageImg, d1Card2PageDesc, d1Card2PageFullDesc, d1Card2PageBtn);

  });
}

// Deck 1 card 3 detail page
var d1Card1Page = document.getElementById('d1Card3Page');
if (d1Card1Page) {
  client.getEntry('1QkLluyb2ZVZNtnDo0UWRz').then(function (entry) {

    // page title
    d1Card3PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d1Card3Pageh1 = document.createElement('h1');
    d1Card3Pageh1.innerHTML = entry.fields.title;
    d1Card3Pageh1.classList.add('m-5');

    // image
    var d1Card3PageImg = document.createElement('img');
    d1Card3PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d1Card3PageImg.alt = entry.fields.image.fields.description;
    d1Card3PageImg.classList.add('img-fluid');

    // description
    var d1Card3PageDesc = document.createElement('h5');
    d1Card3PageDesc.innerHTML = entry.fields.description;

    // full description
    var d1Card3PageFullDesc = document.createElement('p');
    d1Card3PageFullDesc.innerHTML = entry.fields.fullDesc;

    // button (link)
    var d1Card3PageBtn = document.createElement('a');
    d1Card3PageBtn.innerHTML = entry.fields.linkText;
    d1Card3PageBtn.classList.add('btn', 'btn-primary');
    d1Card3PageBtn.href = entry.fields.link;
    d1Card3PageBtn.target = '_blank';

    document.getElementById('d1Card3Page').append(d1Card3Pageh1, d1Card3PageImg, d1Card3PageDesc, d1Card3PageFullDesc, d1Card3PageBtn);

  });
}

// Deck 2 card 1 detail page
var d1Card1Page = document.getElementById('d2Card1Page');
if (d1Card1Page) {
  client.getEntry('15DK1c9DuYAe7FEqjAO6x4').then(function (entry) {

    // page title
    d2Card1PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d2Card1Pageh1 = document.createElement('h1');
    d2Card1Pageh1.innerHTML = entry.fields.title;
    d2Card1Pageh1.classList.add('m-5');

    // image
    var d2Card1PageImg = document.createElement('img');
    d2Card1PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d2Card1PageImg.alt = entry.fields.image.fields.description;
    d2Card1PageImg.classList.add('img-fluid');

    // full description
    var d2Card1PageFullDesc = document.createElement('p');
    d2Card1PageFullDesc.innerHTML = entry.fields.fullDescription;

    // button (link)
    var d2Card1PageBtn = document.createElement('a');
    d2Card1PageBtn.innerHTML = entry.fields.linkText;
    d2Card1PageBtn.classList.add('btn', 'btn-primary');
    d2Card1PageBtn.href = entry.fields.link;
    d2Card1PageBtn.target = '_blank';

    document.getElementById('d2Card1Page').append(d2Card1Pageh1, d2Card1PageImg, d2Card1PageFullDesc, d2Card1PageBtn);
  });
}

// Deck 2 card 2 detail page
var d1Card1Page = document.getElementById('d2Card2Page');
if (d1Card1Page) {
  client.getEntry('4P5UZ8iJDQukB5Vbc6zUfT').then(function (entry) {

    // page title
    d2Card2PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d2Card2Pageh1 = document.createElement('h1');
    d2Card2Pageh1.innerHTML = entry.fields.title;
    d2Card2Pageh1.classList.add('m-5');

    // image
    var d2Card2PageImg = document.createElement('img');
    d2Card2PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d2Card2PageImg.alt = entry.fields.image.fields.description;
    d2Card2PageImg.classList.add('img-fluid');

    // full description
    var d2Card2PageFullDesc = document.createElement('p');
    d2Card2PageFullDesc.innerHTML = entry.fields.fullDescription;

    // button (link)
    var d2Card2PageBtn = document.createElement('a');
    d2Card2PageBtn.innerHTML = entry.fields.linkText;
    d2Card2PageBtn.classList.add('btn', 'btn-primary');
    d2Card2PageBtn.href = entry.fields.link;
    d2Card2PageBtn.target = '_blank';

    document.getElementById('d2Card2Page').append(d2Card2Pageh1, d2Card2PageImg, d2Card2PageFullDesc, d2Card2PageBtn);
  });
}

// Deck 2 card 3 detail page
var d1Card1Page = document.getElementById('d2Card3Page');
if (d1Card1Page) {
  client.getEntry('7xZ7R9oYYFObetn78Ovndw').then(function (entry) {

    // page title
    d2Card3PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d2Card3Pageh1 = document.createElement('h1');
    d2Card3Pageh1.innerHTML = entry.fields.title;
    d2Card3Pageh1.classList.add('m-5');

    // image
    var d2Card3PageImg = document.createElement('img');
    d2Card3PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d2Card3PageImg.alt = entry.fields.image.fields.description;
    d2Card3PageImg.classList.add('img-fluid');

    // full description
    var d2Card3PageFullDesc = document.createElement('p');
    d2Card3PageFullDesc.innerHTML = entry.fields.fullDescription;

    // button (link)
    var d2Card3PageBtn = document.createElement('a');
    d2Card3PageBtn.innerHTML = entry.fields.linkText;
    d2Card3PageBtn.classList.add('btn', 'btn-primary');
    d2Card3PageBtn.href = entry.fields.link;
    d2Card3PageBtn.target = '_blank';

    document.getElementById('d2Card3Page').append(d2Card3Pageh1, d2Card3PageImg, d2Card3PageFullDesc, d2Card3PageBtn);
  });
}

// Deck 3 card 1 detail page
var d1Card1Page = document.getElementById('d3Card1Page');
if (d1Card1Page) {
  client.getEntry('3teDVD8lLlOTLXhOlvXKCZ').then(function (entry) {

    // page title
    d3Card1PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d3Card1Pageh1 = document.createElement('h1');
    d3Card1Pageh1.innerHTML = entry.fields.title;
    d3Card1Pageh1.classList.add('m-5');

    // image
    var d3Card1PageImg = document.createElement('img');
    d3Card1PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d3Card1PageImg.alt = entry.fields.image.fields.description;
    d3Card1PageImg.classList.add('img-fluid');

    // date
    var d3Card1PageDate = document.createElement('h5');
    var dateObj = new Date(entry.fields.date);
    d3Card1PageDate.innerHTML = 'When: ' + dateObj;
    
    // description
    var d3Card1PageDesc = document.createElement('p');
    d3Card1PageDesc.innerHTML = entry.fields.description;

    // button (link)
    var d3Card1PageBtn = document.createElement('a');
    d3Card1PageBtn.innerHTML = entry.fields.linkText;
    d3Card1PageBtn.classList.add('btn', 'btn-primary');
    d3Card1PageBtn.href = entry.fields.link;
    d3Card1PageBtn.target = '_blank';

    document.getElementById('d3Card1Page').append(d3Card1Pageh1, d3Card1PageImg, d3Card1PageDate, d3Card1PageDesc, d3Card1PageBtn);
  });
}

// Deck 3 card 2 detail page
var d1Card1Page = document.getElementById('d3Card2Page');
if (d1Card1Page) {
  client.getEntry('6uhInpl2bVHov5ZFbJ2Qio').then(function (entry) {

    // page title
    d3Card2PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d3Card2Pageh1 = document.createElement('h1');
    d3Card2Pageh1.innerHTML = entry.fields.title;
    d3Card2Pageh1.classList.add('m-5');

    // image
    var d3Card2PageImg = document.createElement('img');
    d3Card2PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d3Card2PageImg.alt = entry.fields.image.fields.description;
    d3Card2PageImg.classList.add('img-fluid');

    // date
    var d3Card2PageDate = document.createElement('h5');
    var dateObj = new Date(entry.fields.date);
    d3Card2PageDate.innerHTML = 'When: ' + dateObj;
    
    // description
    var d3Card2PageDesc = document.createElement('p');
    d3Card2PageDesc.innerHTML = entry.fields.description;

    // button (link)
    var d3Card2PageBtn = document.createElement('a');
    d3Card2PageBtn.innerHTML = entry.fields.linkText;
    d3Card2PageBtn.classList.add('btn', 'btn-primary');
    d3Card2PageBtn.href = entry.fields.link;
    d3Card2PageBtn.target = '_blank';

    document.getElementById('d3Card2Page').append(d3Card2Pageh1, d3Card2PageImg, d3Card2PageDate, d3Card2PageDesc, d3Card2PageBtn);
  });
}

// Deck 3 card 3 detail page
var d1Card1Page = document.getElementById('d3Card3Page');
if (d1Card1Page) {
  client.getEntry('2TIiDFcpSf9aYOHn9L47qG').then(function (entry) {

    // page title
    d3Card3PageTitle.innerHTML = entry.fields.title;
    
    // title
    var d3Card3Pageh1 = document.createElement('h1');
    d3Card3Pageh1.innerHTML = entry.fields.title;
    d3Card3Pageh1.classList.add('m-5');

    // image
    var d3Card3PageImg = document.createElement('img');
    d3Card3PageImg.src = 'http:' + entry.fields.image.fields.file.url;
    d3Card3PageImg.alt = entry.fields.image.fields.description;
    d3Card3PageImg.classList.add('img-fluid');

    // date
    var d3Card3PageDate = document.createElement('h5');
    var dateObj = new Date(entry.fields.date);
    d3Card3PageDate.innerHTML = 'When: ' + dateObj;
    
    // description
    var d3Card3PageDesc = document.createElement('p');
    d3Card3PageDesc.innerHTML = entry.fields.description;

    // button (link)
    var d3Card3PageBtn = document.createElement('a');
    d3Card3PageBtn.innerHTML = entry.fields.linkText;
    d3Card3PageBtn.classList.add('btn', 'btn-primary');
    d3Card3PageBtn.href = entry.fields.link;
    d3Card3PageBtn.target = '_blank';

    document.getElementById('d3Card3Page').append(d3Card3Pageh1, d3Card3PageImg, d3Card3PageDate, d3Card3PageDesc, d3Card3PageBtn);
  });
}