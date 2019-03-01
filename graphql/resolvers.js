import {people, getById} from "../db/user"

const resolvers = {
  Query: {
    people: () => people,
    findperson: (_, {id}) => getById(id)
  }
};

export default resolvers;
