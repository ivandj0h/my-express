import axios from "axios";

const user = async (req, res) => {
  await axios
    .get(process.env.API_URL, {
      params: {
        _limit: `${process.env.API_LIMIT}`,
      },
    })
    .then((response) => {
      const users = response.data;
      res.json({
        status_code: 200,
        status_message: "success",
        data: users,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { user };
