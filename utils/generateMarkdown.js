// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## description 

  ${data.description}


### Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Report](#report)

* [Contributions](#contributions)

* [Tests](#tests)

* [Questions](#questions)



## Installation

${data.installation}

## Usage 

${data.usage}

# License 

${data.license}

# Report 

${data.report}

# Contributions 

${data.contributions}

# Tests 

${data.tests}

# Questions 

${data.questions}
${data.github}
${data.email}


`;
}

module.exports = generateMarkdown;
