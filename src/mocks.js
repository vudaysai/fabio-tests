import { setupWorker, rest } from 'msw';

const worker = setupWorker(...[
  rest.get('https://github.com/vudaysai', (req, res, ctx) => res(
    ctx.delay(1000),
    ctx.status(200, 'Mocked status'),
    ctx.json({
      data: JSON.parse(localStorage.getItem('cats')),
    }),
  )),
]);

export default worker;
