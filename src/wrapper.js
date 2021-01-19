import createTabs from './createTabs';
import homeTabHtml from './homeTab';
import foodTabHtml from './foodTab';
import drinksTabHtml from './drinksTab';
import contactTabHtml from './contactTab';


let homeHtml = homeTabHtml();
let foodHtml = foodTabHtml();
let drinksHtml = drinksTabHtml();
let infoHtml = contactTabHtml();

let homeTab = createTabs(homeHtml);
let foodTab = createTabs(foodHtml);
let drinksTab = createTabs(drinksHtml);
let infoTab = createTabs(infoHtml);

function createWrapper() {
    let content = document.getElementById('content');
    let wrapper = document.createElement('div');
    let tabs = document.createElement('div');
    wrapper.className = 'wrapper';
    tabs.className = 'tabs';

    tabs.appendChild(homeTab);
    tabs.appendChild(foodTab);
    tabs.appendChild(drinksTab);
    tabs.appendChild(infoTab);


    wrapper.appendChild(tabs);
    content.appendChild(wrapper);
}

export default createWrapper;