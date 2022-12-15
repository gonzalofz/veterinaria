const operationFunctions = require("./operaciones");

const index = () => {
  const params = process.argv.slice(2);
  const [operation] = params;

  const paramsFunction = {
    registrar: params,
    leer: null,
  };

  const currentParams = paramsFunction[operation];

  const currentFunction = operationFunctions[operation];

  currentFunction(currentParams);
};

index();
