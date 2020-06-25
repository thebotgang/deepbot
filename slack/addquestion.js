import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const question = req.body.text;
  const author = req.body.user_name;

  const test = await req.db.collection("deepbot-questions").save({
    question, author
  });

  res.send({
    response_type: "in_channel",
    text: `New question added by ${author}! ${question}`
  });
});

export default handler;
