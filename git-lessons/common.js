function makeHeader() {
    var currentURL = window.location.pathname;
    var currentFilename = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    var currentFileExtension = currentFilename.substring(currentFilename.lastIndexOf('.') + 1);
    var currentLessonNumber = parseInt(currentFilename.split("-")[1]);
    var fileNames = ["Zero-th entry"];

    // Get list of filenames
    // Generate the text between `` using the DOS command "dir *.html /B"
    var fileNameText = `
        lesson-001-installing-git.html
        lesson-002-intro-self-to-git-client.html
        lesson-003-intro-self-to-gitlab.html
        lesson-004-generate-ssh-keys.html
        lesson-005-intro-self-to-git-client-(cont).html
        lesson-006-clone-number-1.html
        lesson-007-lets-branch.html
        lesson-008-time-for-a-change.html
        lesson-009-story-time.html
        lesson-010-standby-for-staging.html
        lesson-011-commitment-issues.html
		lesson-012-pushing-changes.html
        lesson-013-seeing-changes-in-gitlab.html
        lesson-014-merge-into-master.html
        lesson-015-approve-a-merge.html
        lesson-016-synchronicity-too.html
        lesson-017-deployment.html
    `;

    var textLines = fileNameText.split('\n');
    for (var i = 0; i < textLines.length; i++) {
        var nextEntry = textLines[i].split('.')[0].trim();
        if (nextEntry !== "") {
            fileNames.push(nextEntry);
        }
    }
    // console.log("fileNames = " + JSON.stringify(fileNames));

    var htmlString = "";
    var lessons = [];
    // Add a previous button if you aren't on the first lesson
    if (currentLessonNumber > 1) {
        var previousObject = {
            "displayText": "Previous",
            "lessonNum": (currentLessonNumber - 1)
        };
        lessons.push(previousObject);
    }

    // Add a next button if you aren't on the last lesson
    if (currentLessonNumber < (fileNames.length - 1)) {
        var nextObject = {
            "displayText": "Next",
            "lessonNum": (currentLessonNumber + 1)
        }
        lessons.push(nextObject);
    }

    for (var i = 0; i < lessons.length; i++) {
        htmlString += '<a href="' + fileNames[lessons[i].lessonNum] + '.' + currentFileExtension + '">';
        htmlString += '<button class="btn btn-primary m-2">';
        htmlString += lessons[i].displayText + ' lesson';
        htmlString += '</button>';
        htmlString += '</a>'
    }

    htmlString += "<hr>";

    return htmlString;
}

function zeroPrePender(aNumber, numDigits) {
    var returnString = aNumber.toString();
    while (returnString.length < numDigits) {
        returnString = "0" + returnString;
    }
    return returnString;
}

// *********************************************************************
// createDOMElement(elData)
//
// Requires an input JSON object (example below):
//
//  {
//    "ELtype": "div",
//    "ELclasses": [ "modal", "fade" ],
//    "ELattributes": [
//      { "ELname": "role", "ELvalue": "dialog" }
//    ],
//    "ELhtmlString": "Hello, world!",
//    "ELparentElement": // a DOM element
//  }
//
// *********************************************************************
function createDOMElement(elData) {
    if ("ELtype" in elData) {
        var newElement = document.createElement(elData.ELtype);

        if ("ELclasses" in elData) {
            for (i = 0; i < elData.ELclasses.length; i++) {
                newElement.classList.add(elData.ELclasses[i]);
            }
        }

        if ("ELattributes" in elData) {
            for (i = 0; i < elData.ELattributes.length; i++) {
                newElement.setAttribute(elData.ELattributes[i].ELname, elData.ELattributes[i].ELvalue);
            }
        }

        if ("ELhtmlString" in elData) {
            newElement.innerHTML = elData.ELhtmlString;
        }

        if ("ELparentElement" in elData) {
            elData.ELparentElement.appendChild(newElement);
        }

        return newElement;
    }
    else {
        return -1;
    }
}
