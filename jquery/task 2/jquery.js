// 2.На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, 
//потрібно додати посиланню атрибут target="_blank".

$('a').each(function() {
  const a = $(this);

  if (a.attr('href').startsWith('https://')) {
    a.attr('target', '_blank')
  }
})