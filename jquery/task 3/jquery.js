// 3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, 
//щоб він став безпосередньо над <h3>.

//    <h3>header1</h3>
//    <div>text1</div>
//    <h3>header2</h3>
//    <div>text2</div>

const h3Elements = $('h3');

h3Elements.each(function (index, h3) {
  const nextDiv = $(element).next('div');
  if (nextDiv.length > 0) {
    $(h3).before(nextDiv);
  }
});

