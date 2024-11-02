export const routes = {
  dashboard: '/dashboard',
  login: '/entrar',
  receiveProducts: {
    home: '/receber-produtos',
    details: '/receber-produtos/detalhes/:movementOrderId',
    result: '/receber-produtos/finalizar-recebimento',
  },
  userStock: '/meu-estoque',
  transfer: {
    home: '/repassar',
    findOrder: '/repassar/localizar-pedido',
    findProduct: '/repassar/localizar-produto',
    result: '/repassar/finalizar-repasse',
  },
  myStock: '/meu-estoque',
  usefulLinks: '/links-uteis',
}
