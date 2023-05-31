import mongoose from 'mongoose';


const Connection = async(URL) =>{


    try{
        await mongoose.connect(URL, { useNewUrlParser:true });
        console.log('database connected successfully');
    }catch(error){
        
        console.log('Error while connecting with the database',error);
    }
}
export default Connection;