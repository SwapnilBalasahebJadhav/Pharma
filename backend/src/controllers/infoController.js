const connection = require("../config/connection");
const ExcelJS = require("exceljs");

const saveOPDCamp = (req, res) => {
  const { advaitNo, drName, place, noOfPetient, rxGenerated, noOfRxGenerated, createdBy } = req.body;

  console.log("OPD Camp Data:", req.body);

  // basic validation
  if ( !advaitNo || !drName || !place || !noOfPetient || !rxGenerated  || !createdBy) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO opdcamp
    ( advait_no, dr_name, place, no_of_patients, rx_generated, no_of_rx_generated, createdBy)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [ advaitNo, drName, place, noOfPetient, rxGenerated, noOfRxGenerated, createdBy];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log("Error while saving OPD camp:", err);
      return res.status(500).json({ message: "Failed to save OPD camp" });
    }

    res.status(201).json({
      success: true,
      message: "OPD Camp saved successfully",
      id: result.insertId
    });
  });
};

const saveBMDCamp = (req, res) => {
  const { advaitNo, drName, place, noOfPetient, rxGenerated, noOfRxGenerated, createdBy } = req.body;

  console.log("OPD Camp Data:", req.body);

  // basic validation
  if ( !advaitNo || !drName || !place || !noOfPetient || !rxGenerated  || !createdBy) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO bmdcamp
    ( advait_no, dr_name, place, no_of_patients, rx_generated, no_of_rx_generated, createdBy)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [ advaitNo, drName, place, noOfPetient, rxGenerated, noOfRxGenerated, createdBy];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log("Error while saving BMD camp:", err);
      return res.status(500).json({ message: "Failed to save BMD camp" });
    }

    res.status(201).json({
      success: true,
      message: "BMD Camp saved successfully",
      id: result.insertId
    });
  });
};

const saveRX = (req, res) => {
  const { drName, createdBy } = req.body;
  let { brands } = req.body;

  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  if (!drName || !createdBy) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // multer file path or filename
  const rxPhoto = req.file.filename; // OR req.file.path

  // brands comes as string → convert to array
  if (brands) {
    brands = JSON.parse(brands);
  }

  const sql = `
    INSERT INTO rxtracker (dr_name, rx_photo, createdBy)
    VALUES (?, ?, ?)
  `;

  connection.query(sql, [drName, rxPhoto, createdBy], (err, result) => {
    if (err) {
      console.log("Error while saving RX:", err);
      return res.status(500).json({ message: "Failed to save RX" });
    }

    const rxId = result.insertId;

    if (!brands || brands.length === 0) {
      return res.status(201).json({
        success: true,
        message: "RX saved without brands",
        rxId,
      });
    }

    const brandValues = brands.map((brand) => [
      rxId,
      brand,
    ]);

    const sql2 = `
      INSERT INTO rx_brands (rx_id, brand_name)
      VALUES ?
    `;

    connection.query(sql2, [brandValues], (err2) => {
      if (err2) {
        console.log("Error while saving RX brands:", err2);
        return res.status(500).json({ message: "RX saved, brands failed" });
      }

      res.status(201).json({
        success: true,
        message: "RX Camp saved successfully",
        rxId,
      });
    });
  });
};


const saveBirthday = (req, res) => {
  const { drName, createdBy } = req.body;

  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const photo = req.file.filename;

  const sql = `
    INSERT INTO birthday_card (dr_name, dr_photo, createdBy)
    VALUES (?, ?, ?)
  `;

  connection.query(sql, [drName, photo, createdBy], (err, result) => {
    if (err) {
      console.log("Error while saving Birthday:", err);
      return res.status(500).json({ message: "Failed to save Birthday" });
    }

      res.status(201).json({
        success: true,
        message: "Birthday Camp saved successfully",
      });
  });
};


const saveThankyou = (req, res) => {
  const { drName, createdBy } = req.body;

  console.log("req.body:", req.body);
  const sql = `
    INSERT INTO thankyou_card (dr_name, createdBy)
    VALUES (?, ?)
  `;

  connection.query(sql, [drName, createdBy], (err, result) => {
    if (err) {
      console.log("Error while saving thank you:", err);
      return res.status(500).json({ message: "Failed to save thank you" });
    }

      res.status(201).json({
        success: true,
        message: "thank you Camp saved successfully",
      });
  });
};

const savePOB = (req, res) => {
  const {chemistName,chemistPlace,associatedDrName,associatedDrCode,brand1,brandquantity,createdBy} = req.body;

  console.log("POB Camp Data:", req.body);

  const sql = ` INSERT INTO pob (   chemist_name,   chemist_place,   associated_dr_name,   associated_dr_code,   brand_name,   brand_quantity,   createdBy ) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [ chemistName, chemistPlace, associatedDrName, associatedDrCode, brand1, brandquantity,createdBy];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log("Error while saving POB camp:", err);
      return res.status(500).json({ message: "Failed to save POB camp" });
    }

    res.status(201).json({
      success: true,
      message: "POB Camp saved successfully",
      id: result.insertId
    });
  });
};

const downloadReportExcel = (req, res) => {
  const { tableName } = req.body;

  console.log("Excel Export Request:", req.body);

  if (!tableName) {
    console.error("Table name missing");
    return res.status(400).json({ message: "Table name is required" });
  }

  const sql = `SELECT * FROM ${tableName}`;

  connection.query(sql, async (err, results) => {
    if (err) {
      console.error(" DB Error while fetching data:", err);
      return res.status(500).json({ message: "Failed to fetch table data" });
    }

    if (!results || results.length === 0) {
      console.warn(" No data found for table:", tableName);
      return res.status(404).json({ message: "No data found" });
    }

    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet(tableName);

      // Dynamic columns
      worksheet.columns = Object.keys(results[0]).map((key) => ({
        header: key,
        key: key,
        width: 20,
      }));

      // Add rows
      results.forEach((row) => {
        worksheet.addRow(row);
      });

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${tableName}.xlsx`
      );

      await workbook.xlsx.write(res);
      res.end();

      console.log(`Excel exported successfully: ${tableName}.xlsx`);
    } catch (excelErr) {
      console.error(" Excel generation error:", excelErr);
      res.status(500).json({ message: "Excel export failed" });
    }
  });
};




module.exports = { saveOPDCamp, saveBMDCamp, saveRX, saveBirthday, saveThankyou, savePOB, downloadReportExcel };

