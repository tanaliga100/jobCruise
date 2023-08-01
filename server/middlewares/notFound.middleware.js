export const notFoundMiddleware = async (req, res, next) => {
  res.status(404).send(`
          <h1>Ooooppps</h1>
          <p>We cannot find what you are looking for...</p>
          <a href="/">Go Back</a>
     `);
  next();
};
