// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 


  ## Description
  - ${data.description}


  ## Table of Contents:
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributing](#Contributing)
  -[tests](#tests)
  -[Questions](#Questions)

  ## Installation:
  - ${data.installation}

  ## usage:
  - ${data.usage}

  ## License:
  - ${data.license}

  ## Contributing:
  - ${data.contributing}

  ## Tests:
  - ${data.tests}

  ## Questions:
  - ${data.questions}
`;
}

module.exports = generateMarkdown;
