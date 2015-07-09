icons font
================
Установка:
npm install

Установка bower components:
`bower install --save square-file-icons`

================
dis - сгенерированый шрифт svg ttf eot woff и css.

example - папка с примером (при :hover используются две разные иконки, с разной заливкой).

icons - папка с svg которые будем генерировать.

================

В gulpfile.js можно отредактировать название шрифта, в переменной fontName, а также можно изменить сlass который используется в css в место sf можно поставит fa.

Вставляем в HTML:
`<i class="fa fa-camera"></i> Привет Фотогра.`
Вместо <i>, можно использоват <span>.

Дополнительные классы в css:

Размер шрифта можно задавать стандартными значениями `fa-lg (33% increase), fa-2x, fa-3x, fa-4x, or fa-5x` (вместо `fa` может другое заданное значение, например `sf`, смотрите выше).

`fa-fw` фиксированая ширина иконки.

`fa-ul fa-li` создание списка иконок.

`fa-border` иконка в рамочке.

`pull-right pull-left` позиционирование.

Вращение иконки:
`fa-rotate-90 fa-rotate-180 fa-rotate-270 fa-flip-horizontal fa-flip-vertical`
Примеры можно посмотреть:
```Example
http://fortawesome.github.io/Font-Awesome/examples/
````

================
Другие классы:

`sf-colorful` полная заливка элемента, прописываем css.
`sf-hover` замена на другую иконку прописываем tamplate.css (пример можно посмотреть в example)
