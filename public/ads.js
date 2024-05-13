let areAdsDisabled = JSON.parse(localStorage.getItem('adsDisabled'));

if (areAdsDisabled === null) {
    areAdsDisabled = false;
}

if (!areAdsDisabled) {
    enableAds();
}

document.getElementById('toggleAds').addEventListener('change', function () {
    areAdsDisabled = !areAdsDisabled;
    localStorage.setItem('adsDisabled', JSON.stringify(areAdsDisabled));

    if (areAdsDisabled) {
        disableAds();
        alert('Ads Disabled');
    } else {
        enableAds();
        alert('Ads Enabled');
    }
});

document.getElementById('toggleAds').checked = !areAdsDisabled;

function enableAds() {
    const firstScriptElement = document.createElement('script');
    firstScriptElement.type = 'text/javascript';
    firstScriptElement.src = '//pl22767577.profitablegatecpm.com/d2/67/d4/d267d430ca1da1e017a49cd2d7e28673.js';
    firstScriptElement.async = true;
    document.body.appendChild(firstScriptElement);

    const secondScriptElement = document.createElement('script');
    secondScriptElement.type = 'text/javascript';
    secondScriptElement.src = '//banddisordergraceless.com/4f/17/ef/4f17ef8a1a00e17292558dbc42958a7e.js';
    secondScriptElement.async = true;
    document.body.appendChild(secondScriptElement);
}

function disableAds() {
    const firstScriptElement = document.querySelector('script[src="//pl22767577.profitablegatecpm.com/d2/67/d4/d267d430ca1da1e017a49cd2d7e28673.js"]');
    if (firstScriptElement) {
        firstScriptElement.remove();
    }

    const secondScriptElement = document.querySelector('script[src="//banddisordergraceless.com/4f/17/ef/4f17ef8a1a00e17292558dbc42958a7e.js"]');
    if (secondScriptElement) {
        secondScriptElement.remove();
    }
}