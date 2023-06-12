import { getUserByName } from "@/controllers/user";

const post = async (req, res) => {
  const { name, password } = req.body;
  //get User by name
  const user = await getUserByName(name);
  console.log(user)
  res.status(200).json({token: "lkjkjk"})
}


export default (req, res) => {
  switch (req.method) {
    case 'GET':
      //get(req, res);
      break;
    case 'POST':
      post(req, res);
      break;
    case 'PUT':
      //put(req, res);
      break;
    default:
      break;
  }
}