import React, { useEffect } from 'react';
import { useState } from 'react';
import './CsvReader.css';
import TableCsv from './tableCsv.jsx';

const CsvReader = () => {
  const [csvFile, setCsvFile] = useState();
  const [dataCsv, setDatacsv] = useState('');

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      setDatacsv(text);
    };

    reader.readAsText(file);
  };

  return (
    <>
      <form id="csv-form">
        <label
          For="csvFile"
          className="control-label"
        >
          {' '}
          escolha o arquivo csv
        </label>
        <input
          type="file"
          accept=".csv"
          id="csvFile"
          onChange={(e) => {
            setCsvFile(e.target.files[0]);
          }}
        />
        <br />
        <button
          className="carregar"
          onClick={(e) => {
            e.preventDefault();
            if (csvFile) submit();
          }}
        >
          carregar csv
        </button>
      </form>
      <TableCsv table={dataCsv}></TableCsv>
    </>
  );
};

export default CsvReader;
