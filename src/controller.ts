import { Request, Response } from 'express';

/**
 * GET /
 * Home page or 'index'.
 */
export let index = (req: Request, res: Response) => {
  console.log('\nindex > ' + req.method + '\n');

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Hello Title!</title>
      </head>
      <body>
        <h1>hi planet</h1>
      </body>
    </html>
  `);

};
