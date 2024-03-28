import mongoose from "mongoose";

// const dbConnection = () => {
//     mongoose.connect(process.env.MONGOOSE_URL).then(() => {
//         console.log('mongodb connected successfully');
//     }).catch((error) => {
//         console.log(error);
//     })
// }

const dbConnection = async () => {
    try {
      const connect = await mongoose.connect(process.env.MONGOOSE_URL,{
        dbName: "Netflix",
      });
      console.log(
        `Connected to MongoDB Database ${mongoose.connection.host}`
      );
    } catch (error) {
      console.log(`MongoDB Error ${error}`);
    }
  };

export default dbConnection;