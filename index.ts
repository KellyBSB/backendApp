import Server from './src/server/server';
import mainRouter from './src/router/main.router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

server.app.use(cors({
  origin: true,
  credentials: true
}));

server.app.use('/', mainRouter);

server.start(() => {
  console.log(`Server is running in ${server.port} port`);
});