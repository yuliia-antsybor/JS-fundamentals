// 4. На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, 
//всі чекбокси робить неактивними.

const checkboxes = $(':checkbox');

checkboxes.on('click', function() {
  const activeCount = checkboxes.filter(':checked').length;
  
  if (activeCount >= 3) {
    checkboxes.attr('disabled', true);
  }
});

