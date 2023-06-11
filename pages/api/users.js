import {createUser, getAllUsers, updateUser} from '../../controllers/user';

const get = async (req, res) => {
  const users = await getAllUsers();
  console.log(users)
  res.status(200).json({status: 'ok', users: users})
}

const post = (req, res) => {
  const {name, password} = req.body;
  if (name && password) createUser(name, password);
  res.status(201).json({status: 'ok'});
}

const put = async (req, res) => {
  const {name, password} = req.body;
  if (name && password){
    const user = await updateUser(name, password);
    //console.log({user})
  }
  res.status(201).json({status: 'update ok'});
}


export default (req, res) => {
  switch (req.method) {
    case 'GET':
      get(req, res);
      break;
    case 'POST':
      post(req, res);
      break;
    case 'PUT':
      put(req, res);
      break;
    default:
      break;
  }
}