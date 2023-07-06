export const handler = async (args) => {
    const argsParse = JSON.parse(args);
  
    return JSON.stringify({
      statusCode: 200,
      body: { message: "Hello from Lambda!" },
    });
  };
  