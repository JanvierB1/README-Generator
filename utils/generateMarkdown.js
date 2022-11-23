
const backticks = "```"
var licenseStatus = false
var githubLicense = ``

//MAKING BADGE ON TOP OR LEAVING EMPTY IF CHOOSE NONE
function displayLicensebadge(license) {
  if (license == "none") {
    return githubLicense = ""
  } else {
    licenseStatus = true
    displayLicenseLink(license)
  }
}

//LINK FOR THE BADGE
function displayLicenseLink(license) {
  let licenseLink = `https://img.shields.io/badge/license-${license}-green`
  githubLicense = `![Github License](${licenseLink})`
  displayLicenseSection(license);
  return githubLicense
}

//LICENSE SECTION
function displayLicenseSection(license) {
  if (licenseStatus) {
    return licenseSection = `This project is licensed under the ${license} license.`
  } else {
    return licenseSection = `This project is using no license.`
  }
}

//GENERATES THE README CONTENTS
function generateMarkdown({ github, email, license, title, description, install, usage, contributions, testing }) {
  displayLicensebadge(license);
  displayLicenseSection(license);
return `# ${title}
${githubLicense}
## Description
${description}
___
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
___
## Installation
To install the needed dependencies, run the following commands:
${backticks}
${install} 
${backticks}
___
## Usage
${usage}
___
## License
${licenseSection}
___
## Contributing
${contributions}
___
## Tests
To test the project, run the following commands:
${backticks}
${testing}
${backticks}
___
## Questions
If you have any questions feel free to contact me directly at ${email}. You can find my github profile at [github.com/${github}](https://github.com/${github}/)
`;
}

module.exports = {
    generateMarkdown,
    displayLicensebadge,
    displayLicenseLink,
    displayLicenseSection,
};