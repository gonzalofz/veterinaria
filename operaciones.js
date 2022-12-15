const fs = require("fs");

const registrar = (params) => {
  console.log("params: ", params);
  const [name, age, animal, color, sick] = params.slice(1);

  const data = {
    nombre: name,
    edad: age,
    animal,
    color,
    enfermedad: sick,
  };

  fs.readFile("citas.json", (err, content) => {
    if (err) throw err;

    var citaContents = JSON.parse(content);

    const fullData = [...citaContents, data];
    const jsonData = JSON.stringify(fullData);

    fs.writeFile("citas.json", jsonData, (err) => {
      if (err) console.log(err);

      console.log("dato agregado exitosamente");
    });
  });
};

const leer = () => {
  fs.readFile("citas.json", (err, content) => {
    if (err) throw err;

    var citaContents = JSON.parse(content);
    console.log("citaContents: ", citaContents);
  });
};

module.exports = { registrar: registrar, leer: leer };
