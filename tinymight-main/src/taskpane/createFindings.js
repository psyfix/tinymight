import {issues, base64} from './findings.js';

// Create the buttons for each issue
function getButtonGroup(list){
    let html = ""
    for (const element of list) {
        html = html + `<button class="finding-button" id="${element}">${element}</button>`
    }
    return html
}

// Create the HTML sections for each group of findings
function getSectionHTML(category, buttonGroup) {
    let html = `
    <div>
        <details id="${category}" class="finding-section">
            <summary>${convertCamelCaseToWords(category)}</summary>
                ${buttonGroup}
        </details>
    </div>`
    return html
}

function convertCamelCaseToWords(camelCaseString) {
    // Split camel case string into individual words
    const words = camelCaseString.replace(/([a-z\d])([A-Z])/g, '$1 $2').split(/[\s_]+/);

    // Convert words to all capital letters
    const capitalizedWords = words.map(word => word.toUpperCase());

    // Join capitalized words with spaces
    const finalString = capitalizedWords.join(' ');

    return finalString;
}

// Create the findings sections
export function createFindingsSections() {
    for (const category in issues) {
        let buttonGroup = getButtonGroup(issues[category])
    let section = getSectionHTML(category, buttonGroup)
    document.getElementById("border").innerHTML += section
    }
}

// Assign every button an onclick handler
export function assignClickHandlers(elements){
    Array.from(elements).forEach((button) => {
        button.onclick = () => onclickHandler(button.id)
    })
}

// The onclick handler for findings
export async function onclickHandler(issueName) {
    await Word.run(async (context) => {
        let rangeBase64 = context.document.getSelection();
        rangeBase64.insertFileFromBase64(base64[issueName], Word.InsertLocation.end);
        await context.sync();
    })
}