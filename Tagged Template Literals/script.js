// Tagged Template Literals

const name = 'Michael';
const age = 37;

function hello(strings, ...values) {
    // console.log(strings);
    // console.log(values);
    // let str = '';
    // strings.forEach((string, i) => {
    //     str += `${string}${values[i] || ''}`;
    // });
    // return str;

    return strings.reduce((str, string, i) => `${str}${string}${values[i] || ''}`, '');
}

function highlight(strings, ...values) {
    return strings.reduce((str, string, i) => `${str}${string} <span class="hl">${values[i] || ''}</span>`, '');
}

const sentence = hello`My name is ${name} and I am ${age} years old.`;
const sentence2 = highlight`My name is ${name} and I am ${age} years old.`;
console.log(sentence);

document.body.innerHTML = sentence2;

// Escaping / Sanitizing HTML Tags

function sanitize(strings, ...values) {
    const dirty = strings.reduce((str, string, i) => `${str}${string}${values[i] || ''}`, '');
    return DOMPurify.sanitize(dirty);
}

const name2 = 'Michael <img src="http://unsplash.it/100/100?random" onload="alert(\'you got hacked\')">';

const sentence3 = sanitize`<h3>${name2}</h3>`;

// Translations - Internationalization (i18n) & Localization (l10n)

const html = i18n`<span class="username">${name}</span> commented on your post`;

// Styled Components

const StyledDiv = styled.div`
    background: red;
    color: blue;
    font-size: 50px;
`;

