import css from './snowflakes.css';

function appendSnow() {
  document.body.innerHTML =
    document.body.innerHTML +
    '<div aria-hidden="true">\n' +
    '    <div class="snowflake">❅</div>\n' +
    '    <div class="snowflake">❆</div>\n' +
    '    <div class="snowflake">❅</div>\n' +
    '    <div class="snowflake">❆</div>\n' +
    '    <div class="snowflake">❅</div>\n' +
    '    <div class="snowflake">❆</div>\n' +
    '    <div class="snowflake">❅</div>\n' +
    '    <div class="snowflake">❆</div>\n' +
    '    <div class="snowflake">❅</div>\n' +
    '    <div class="snowflake">❆</div>\n' +
    '    <div class="snowflake">❅</div>\n' +
    '    <div class="snowflake">❆</div>\n' +
    '</div>';
}

function appendStyle() {
  document.body.innerHTML =
    document.body.innerHTML + '<style>' + css + '</style>';
}

export function start() {
  appendStyle();
  appendSnow();
}
