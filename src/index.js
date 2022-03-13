import './style.css';
import Icon from './no-logo.png';
import { home } from './home';
import { menu } from './menu';
import { about } from './about';
import { contact } from './contact';

function componet(){ 
    const el = document.createElement('div');
    el.setAttribute('id', 'content');
    const heading = document.createElement('header');
    heading.setAttribute('id', 'heading');
    const logoImage = new Image();
    logoImage.src = Icon;
    
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.appendChild(logoImage);
    heading.appendChild(logo);
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Wobbles\' Waffles and Cat Cafe';
    
    heading.appendChild(pageTitle);

    const tabs = ['home', 'menu', 'about', 'contact'];
    const tabButtons = [];
    let tabContent = document.createElement('div');
    let tabbedNav = document.createElement('nav');
    tabbedNav.setAttribute('id', 'tab-nav');
    for (let tab of tabs){
        const tabButton = document.createElement('button');
        tabButton.classList.add('tab');
        tabButton.dataset.tab = tab;
        tabButton.textContent = tab;
        tabButton.addEventListener('click', loadPage);
        tabContent.textContent = tab;

        tabButtons.push(tabButton);
        tabbedNav.appendChild(tabButton);
        if (tab == 'home'){
            tabButton.click();
        }
    }
    el.appendChild(heading);

    let mainContent;
    el.appendChild(tabbedNav);
    
    el.appendChild(mainContent);
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.textContent = "123 main st. Charlottetown, PE 555-123-4567";
    el.appendChild(footer);

    return el;
    
    function loadPage(e){
        for (let tab of tabButtons){
            tab.classList.remove('selected');
        }
        
        e.target.classList.add('selected');
        let newContent;
        var selected = e.target.dataset.tab;
        switch (selected){
            case 'home':
                newContent = home();
                break;
            case 'menu':
                newContent = menu();
                break;
            case 'contact':
                newContent = contact();
                break;
            case 'about':
                newContent = about();
                break;
            default:
                newContent = home();
        }
        let currentContent = el.querySelector('#main-content');
        mainContent = newContent;
        mainContent.setAttribute('id', 'main-content');

        if ( currentContent != null){
            el.replaceChild(mainContent, currentContent);
        } else{
           el.appendChild(mainContent);
        }
    }
}

const content = document.querySelector('#content');
const contentParent = content.parentElement;
contentParent.removeChild(content);
contentParent.appendChild(componet());


