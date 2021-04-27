import App from "./App";

class Server {

    constructor() {
        this.listen()
    }

    listen() {
        App.listen(process.env.API_PORT, () => {
            console.info('started')
        });
    }
}
export default new Server();
