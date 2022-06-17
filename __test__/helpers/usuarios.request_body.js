module.exports = {
  usuario: {
    usuario_sin_nombre: {
      firstName: null,
      lastName: 'Perez',
      email: 'juan.perez@mail.com',
    },
    usuario_sin_apellido: {
        firstName: 'Juan',
        lastName: null,
        email: 'juan.perez@mail.com',
      },
    usuario_sin_email: {
      firstName: 'Juan',
      lastName: 'Perez',
      email: null,
    },
    usuario_con_todos_los_campos: {
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'juan.perez@mail.com',
    }
  }
};