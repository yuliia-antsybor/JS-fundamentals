// 3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, 
//щоб він став безпосередньо над <h3>.

//    <h3>header1</h3>
//    <div>text1</div>
//    <h3>header2</h3>
//    <div>text2</div>

$(document).ready(function() {
  // Знаходимо всі теги <h3>
  var h3Elements = $('h3');

  // Проходимо через кожен тег <h3>
  h3Elements.each(function(index, element) {
      // Знаходимо наступний елемент після <h3>, який є <div>
      var nextDiv = $(element).next('div');

      // Переміщуємо <div> перед <h3>
      if (nextDiv.length > 0) {
          $(element).before(nextDiv);
      }
  });
});