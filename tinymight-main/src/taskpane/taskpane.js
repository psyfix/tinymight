import {createFindingsSections, onclickHandler, assignClickHandlers} from './createFindings.js'
import {searching} from './searchBar.js'

Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
        // Determine if the user's version of Office supports all the Office.js APIs that are used in the tutorial.
        if (!Office.context.requirements.isSetSupported('WordApi', '1.3')) {
            console.log('Sorry. The tutorial add-in uses Word.js APIs that are not available in your version of Office.');
        }
    }
    //creates the findings sections
    createFindingsSections()
    //get all of the buttons
    let buttonElements = document.getElementsByClassName("finding-button")
    //assign the onclick handler to all the buttons
    assignClickHandlers(buttonElements)

    //searching()

});
