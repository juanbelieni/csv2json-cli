#!/usr/bin/env node
import program from 'commander';
import csvParse from 'csv-parse/lib/sync';
import fs from 'fs';

function csv2json(csvPath, { output, delimiter }) {
  const csv = fs.readFileSync(csvPath).toString();

  const json = csvParse(csv, {
    delimiter,
  });

  fs.writeFileSync(output, JSON.stringify(json));
}

program
  .name('csvtojson')
  .description('CLI to convert CSV to JSON')
  .version('0.0.1')
  .arguments('<csv>')
  .option(
    '-o, --output <filename>',
    'especify the output filename',
    'output.json'
  )
  .option('-d, --delimiter <delimiter>', 'delimiter of csv file', ',')
  .action(csv2json);

program.parse(process.argv);
