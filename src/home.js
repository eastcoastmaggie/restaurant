import Cat from './alvan-nee-ZCHj_2lJP00-unsplash.jpg'

const home = () => {
    const homeContent = document.createElement('div');
    homeContent.setAttribute('id', 'home-content');
    const heroBanner = document.createElement('div');
    heroBanner.setAttribute('id', 'hero-banner');

    const homeText = document.createElement('h2');
    homeText.textContent = "Spend time with cats, and eat the waffles topped with fresh fruit, drizzled in syrup favourite toppings. Or enjoy a hot cup of tea.";
    


    const banner = document.createElement('div');
    banner.setAttribute('id', 'cat-banner');
    const bannerImg = document.createElement('div');
    bannerImg.setAttribute('id', 'banner-image');
    const catImage = new Image();
    catImage.src = Cat;
    const bannerInfo = document.createElement('p');  
    bannerInfo.textContent = "Watson's foundation cats are on premises and are looking forward to your visit. Come play with them for $5. These kitties are looking for a fur-ever home. Inquire with our staff if you are interested in adopting.";

    bannerImg.appendChild(catImage);
    banner.appendChild(bannerImg);
    banner.appendChild(bannerInfo);

    homeContent.appendChild(heroBanner);
    homeContent.appendChild(homeText);
    homeContent.appendChild(banner);


    return homeContent;
}

export { home };