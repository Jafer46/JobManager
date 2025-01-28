const excelJS = require("exceljs");
const { getModelAttributes } = require("../../../utils/model.manager");

const exportData = async (req, res) => {
  const { modelName, idList } = req.body;
  const workbook = new excelJS.Workbook(); // Create a new workbook
  const worksheet = workbook.addWorksheet("My Users"); // New Worksheet
  const path = "./files"; // Path to download excel

  const { attributes, model } = getModelAttributes(modelName);

  const columns = attributes.map((item) => ({
    header: item.name,
    key: item.name,
    width: 10,
    border: {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    },
  }));

  // Column for data in excel. key must match data key
  worksheet.columns = columns;

  // Looping through data list
  let counter = 1;
  let data = [];
  if (idList) {
    model.find({ _id: { $in: idList } }).then((result) => {
      data = result;
    });
  } else {
    model.find().then((result) => {
      data = result;
    });
  }

  data.forEach((item) => {
    item.s_no = counter;
    worksheet.addRow(item); // Add data in worksheet
    counter++;
  });

  // Making first line in excel bold and adding border
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
    cell.border = {
      top: { style: "thick" },
      left: { style: "thick" },
      bottom: { style: "thick" },
      right: { style: "thick" },
    };
  });

  // Downloading file
  await workbook.xlsx
    .writeFile(`${path}/data.xlsx`)
    .then(() => {
      res.send({
        status: "success",
        message: "file successfully downloaded",
        path: `${path}/users.xlsx`,
      });
    })
    .catch((err) => {
      res.send({
        status: "error",
        message: "Something went wrong",
      });
    });
};

module.exports = exportData;
