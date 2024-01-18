const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the file name: ', (filename) => {
  readline.question('Enter the text to append: ', (text) => {
    fs.access(filename, fs.constants.F_OK, (err) => {
      if (err) {
        fs.writeFile(filename, text, (err) => {
          if (err) {
            console.error('Error creating file:', err);
          } else {
            console.log('File created and text added successfully!');
          }
          readline.close();
        });
      } else {
        fs.appendFile(filename, text, (err) => {
          if (err) {
            console.error('Error appending to file:', err);
          } else {
            console.log('Text appended to file successfully!');
          }
          readline.close();
        });
      }
    });
  });
});
