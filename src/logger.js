/* @flow */
/*eslint-disable no-console */
import chalk from 'chalk';

// Init Logger object
let logger = {};

logger.generalMessage = (
  message: {
    heading: string,
    issue: string,
    description: string,
    element: {
      node: string
    },
    position: {
      lineNumber: number,
      columnNumber:  number
    }
}) => {

  let heading: string = '';
  const lineMessage: string = `Line:${message.position.lineNumber} Col:${message.position.columnNumber}`;

  switch (message.heading) {
    case 'ERROR':
      heading = chalk.red.bold(message.heading);
      break;
    case 'NOTICE':
      heading = chalk.blue.bold(message.heading);
      break;
    default:
      heading = chalk.yellow.bold(message.heading);
  }

  heading += ` ${message.issue}`;

  console.log(heading);
  console.log(chalk.cyan(lineMessage));
  console.log(chalk.grey(message.description));
  console.log(chalk.grey('--------------------'));
  console.log(chalk.grey(message.element.node), '\n');

  return [`${message.heading} ${message.issue}`, lineMessage, message.description, message.element.node];

};

logger.startMessage = (message: string) => {

  console.log(chalk.white.underline(message), '\n');

  return message;

};

logger.finishedMessage = (filePath: string) => {

  let message = 'Report Finished';

  if (filePath) {
    message = `File "${filePath}" created. ${message}`;
  }

  console.log(chalk.cyan(message));

  return message;

};

logger.errorMessage = (errors: number) => {
  const message = `There were ${errors} errors present`;

  console.log(chalk.red(message));

  return message;
};

logger.generalError = (error: string) => {

  console.error(chalk.red(error));

  return error;
};

logger.log = (message: string) => {

  console.log(message);

  return message;
};

export default logger;
