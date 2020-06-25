import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const question = await req.db.collection("deepbot-questions").findOne();

  if (question) {
    res.send({
      response_type: "in_channel",
      text: `Question by ${question.author}: ${question.question}`
    });
  } else {
    res.send({
      response_type: "in_channel",
      text: "No more questions in our database!"
    });
  }
});

export default handler;
