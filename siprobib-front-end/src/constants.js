export const BACKEND_URL = 'http://localhost:7001/siprobib/';
export const REQUEST_GET = 'GET';
export const REQUEST_POST = 'POST';
export const REQUEST_PUT = 'PUT';
export const REQUEST_DELETE = 'DELETE';
export const REQUEST_HEADER = { 'Content-Type': 'application/json' };

export const ADD_ACTION = 'Agregar';
export const DETAIL_ACTION = 'Detalle'; 
export const EDIT_ACTION = 'Editar';
export const REMOVE_ACTION = 'Remover';

export const AUTHOR_CLASS = 'autor';
export const CATEGORY_CLASS = 'categoría';
export const DESCRIPTOR_CLASS = 'descriptor';
export const LOCATION_CLASS = 'ubicación';
export const PRODUCTION_CLASS = 'producción';

export const CLASSES = {
    'autor': 'autores',
    'categoría': 'categorias',
    'descriptor': 'descriptores',
    'producción': 'producciones',
    'ubicación': 'ubicaciones'
}

/**
 * Este vector cuenta con cada columna que debe de mostrarse para cada uno de los CRUD, las comillas vacías
 * al final de cada vector son para representar a la columna de botones (editar, detalles, remover) para cada fila.
 */
export const COLUMN_LABELS = {
    'producción': ['Código', 'Título', 'Año', 'Categoría', 'Ubicación', ''],
    'autor': ['Nombre', 'Tipo', ''],
    'categoría': ['Categoría', ''],
    'descriptor': ['Descriptor', ''],
    'ubicación': ['Ubicación', '']
};


export const DASHBOARD_TITLE = 'Administración del Sistema de Producciones';
export const DIALOG_TITLE = {
    'Agregar': 'Ingrese los datos correspondientes.',
    'Detalle': '',
    'Editar': 'Actualice los datos correspondientes.',
    'Remover': '¿Realmente desea eliminar este registro?'
}

export const AUTHOR_ID = 'Identificador del autor: ';
export const AUTHOR_NAME = 'Nombre del autor: ';
export const AUTHOR_LASTNAME = 'Apellido del autor: ';
export const AUTHOR_INSTITUTIONAL_NAME = 'Nombre de la institución autora: ';
export const AUTHOR_TYPE = 'Tipo de autor: ';

export const CATEGORY_ID = 'Identificador de la categoría: ';
export const CATEGORY_DESCRIPTION = 'Detalle de la categoría: ';

export const DESCRIPTOR_ID = 'Identificador del descriptor: ';
export const DESCRIPTOR_DESCRIPTION = 'Detalle del descriptor: ';

export const LOCATION_ID = 'Identificador de la ubicación: ';
export const LOCATION_DETAIL = 'Detalle de la ubicación: ';

export const ERROR = 'error';
export const SUCCESS = 'success';
export const ADD_ERROR_MESSAGE = "No se ha agregar correctamente.";
export const ADD_SUCCESS_MESSAGE = "Se ha agregado correctamente.";
export const EDIT_ERROR_MESSAGE = "No se ha actualizado correctamente.";
export const EDIT_SUCCESS_MESSAGE = "Se ha actualizado correctamente.";
export const REMOVE_ERROR_MESSAGE = "No se ha eliminado correctamente.";
export const REMOVE_SUCCESS_MESSAGE = "Se ha eliminado correctamente.";

export const LOG_OUT = 'Cerrar Sesión';
export const CLOSE = 'Cerrar';

export const ERROR_TEXTFIELD_VALIDATOR = 'Ingrese información en el campo obligatorio';

export const TABLE_PAGINATION_LABEL = 'Cantidad de filas por página';