// 1.
// Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед 
//знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

//     <h2 class="head">header1</h2>
//     <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
//     <h2>header3</h2>
//     <h2 class="head">header4<span>inner elem2</span></h2>
//     <h2>header5</h2>

const headings = $('h2.head');

headings.css('background-color', 'green');
headings.find('.inner').css('font-size', '35px');

