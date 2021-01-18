let content = document.getElementById('content');

function createHeader() {
    let header = document.createElement('header');
    header.innerHTML = '<header><div class="head-filter"><div class="head-txt"><h1>Bob\'s Bistro & Bar</h1><p>Craftbeer, wine, burgers and breakfast</p><p>since 2012</p></div></div></header>';
    content.appendChild(header);
    console.log('hello');
}

createHeader();