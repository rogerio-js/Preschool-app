// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { School, Reviews, Brief, Approval } = initSchema(schema);

export {
  School,
  Reviews,
  Brief,
  Approval
};