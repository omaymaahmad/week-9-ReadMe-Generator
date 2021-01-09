// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## description 

  ${data.description}


### Table of Contents

* [Installation](#installation)

* [Usage](#Usage)



## Installation

${data.installation}

## Usage 

${data.usage}


`;
}

module.exports = generateMarkdown;
