function createHeader() {
    let content = document.getElementById('content');
    let header = document.createElement('header');
    header.innerHTML = '<div class="head-filter"><div class="head-txt"><img src="pics/logo.png" alt="">'+
    '<h1>Bob\'s Bistro & Bar</h1><p>Craftbeer, wine, burgers and breakfast</p><p>since 2012</p></div></div>';
    content.appendChild(header);
    console.log('hello');

}

export default createHeader;