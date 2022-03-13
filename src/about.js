const about = () => {
    
    const content = document.createElement('div');
    content.textContent = "about us:";
   
    content.insertAdjacentText('beforeend', 'Wobbles\' Waffles and cat cafe is a waffle house, cafe, and a place to socialize with cats from Watson\'s Cat Foundation. A non-for-profit organization aimed at finding furever homes for cats and kittens in the local area. ');

    

    return content;
}

export { about };