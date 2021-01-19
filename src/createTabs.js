function createTabs(txt) {
    let tab = document.createElement('div');
    tab.className = 'tab';
    tab.innerHTML = txt;
    return tab;
}

export default createTabs; 