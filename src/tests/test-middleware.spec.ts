const createMiddleware = require('./../index');
import path from 'path';

describe('inicio dos testes', () => {
    //descrição do caso de testes
    test('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
        // const projectRootPath = path.resolve(__dirname, '');
        const projectRootPath = path.resolve(__dirname, 'assets');
        const middleware = createMiddleware(projectRootPath)
    });
});
