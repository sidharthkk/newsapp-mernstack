import { data }from './constants/data.js';
import News from './models/news-schema.js';
const DefaultData = async()=>
{
  try{
     
       await News.insertMany(data);
       console.log('Data imported successfully');
  }
  catch(error)
  {
    console.log('error',error.message);
  }


}
export default DefaultData;