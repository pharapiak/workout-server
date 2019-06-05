import app from "./app";

const port = process.env.PORT || 3000;



function shutdown(requestSource): void {
  console.log(`Got shutdown request via ${requestSource}`);
  console.log('shutting down');
  app.close(() => {
    console.log('Express HTTP server stopped');
  });
}

process.on('SIGTERM', () => {
  shutdown('SIGTERM');
});

process.on('SIGINT', () => {
  shutdown('SIGINT');
});

process.on('SIGKILL', () => {
  shutdown('SIGKILL');
});

app.listen(port, (err) => {
  if (err) {
    // tslint:disable-next-line: no-console
    return console.log(err);
  }

  // tslint:disable-next-line: no-console
  return console.log(`server is listening on ${port}`);
});
