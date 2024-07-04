import express  from "express";

const app = express();

//Route
//Http method : GET, POST , PUT, PATCH , DELETE
// eslint-disable-next-line @typescript-eslint/no-unused-vars


    app.get('/', (req, res , next)  => {
      res.json({message: "HI there, what's going on there..."});  
    });

    export default app;

    import src from './app.ts';
    const startserver = async () => {

        const port = process.env.PORT || 4000;

        app.listen(port, () => {
            console.log(`Listener on port: ${port}`);
        })
    };

    startserver();


