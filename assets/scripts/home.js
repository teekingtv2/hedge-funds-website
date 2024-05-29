const howToBuyText = document.querySelector('#how-to-buy');
const investmentText = document.querySelector('#investment');
const showMoreHowToText = document.querySelector('#how-to-btn');
const showMoreinvestmentText = document.querySelector('#investment-btn');

let fullHowToText = false;
let fullInvestmentText = false;

showMoreHowToText.addEventListener('click', function () {
  console.log('Clicked to read more how to texts');
  fullHowToText = !fullHowToText;
  console.log('fullHowToText value: ', fullHowToText);

  if (fullHowToText) {
    howToBuyText.innerText =
      "Before placing your investment with us youlll need to have these two things ready. Firstly you'll need to purchase some USDT. This is most commonly done through a crypto exchange such as, Binance or coinbase, cash app , changelly Secondly, you'll need to download our partner wallet TRUST for spot trading and receive payout. Contact support for guidance";
    showMoreHowToText.innerText = 'Read less';
  } else {
    howToBuyText.innerText =
      "Before placing your investment with us youlll need to have these two things ready. Firstly you'll need to purchase some...";
    showMoreHowToText.innerText = 'Read more';
  }
});

showMoreinvestmentText.addEventListener('click', function () {
  console.log('Clicked to read more investment texts');
  fullInvestmentText = !fullInvestmentText;
  console.log('fullInvestmentText value: ', fullInvestmentText);
  if (fullInvestmentText) {
    investmentText.innerText =
      'We like to get personal with our clients have a quick chat with one of our brokers to find out what suits you best. All clients will have a chance to have a consultation before placing there investment. Find a slot which suits your needs and financials. Whilst your trade is live you will have direct contact to your broker until trade has been completed.';
    showMoreinvestmentText.innerText = 'Read less';
  } else {
    investmentText.innerText =
      'BWe like to get personal with our clients have a quick chat with one of our brokers to find out what suits you best...';
    showMoreinvestmentText.innerText = 'Read more';
  }
});
