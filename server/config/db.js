import mongoose from 'mongoose';


export const connectdb = async() => {
    try{
        mongoose.connect(process.env.MongodbUrl)
        console.log('Databases Connected Successfully')
    }catch(err){
        console.log(err)
    }
}