export const BACKEND_URL = 'http://localhost:7001/siprobib/';
export const LOAD = "cargar/";
export const REQUEST_GET = 'GET';
export const REQUEST_POST = 'POST';
export const REQUEST_PUT = 'PUT';
export const REQUEST_DELETE = 'DELETE';
export const REQUEST_HEADER = { 'Content-Type': 'application/json' };

export const ADD_ACTION = 'Agregar';
export const DETAIL_ACTION = 'Detalle'; 
export const EDIT_ACTION = 'Editar';
export const LOAD_ACTION = 'Cargar';
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
    'producción': [
        {title: 'Título', field: 'title'}, 
        {title: 'Año', field: 'year'}, 
        {title: 'Categoría', field: 'category'}, 
        {title: 'Autores', field: 'authors'}, 
        {title: 'Descriptores', field: 'descriptors'}
    ],
    'autor': [
        {title: 'Nombre', field: 'name'},
        {title: 'Tipo', field: 'type'}
    ],
    'categoría': [
        {title: 'Categoría', field: 'description'}
    ],
    'descriptor': [
        {title: 'Descriptor', field: 'description'}
    ],
    'ubicación': [
        {title: 'Ubicación', field: 'detail'}
    ]
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

export const PRODUCTION_ID = 'Identificador de la producción: ';
export const PRODUCTION_TITLE = 'Título de la producción: ';
export const PRODUCTION_AUTHORS = 'Autores de la producción: ';
export const PRODUCTION_DESCRIPTORS = 'Descriptores de la producción: ';
export const PRODUCTION_CATEGORY = 'Categoría de la producción: ';
export const PRODUCTION_YEAR = 'Año de la producción: ';
export const PRODUCTION_LOCATION = 'Ubicación de la producción: ';
export const PRODUCTION_CLASIFICATION = 'Clasificación de la producción: ';
export const PRODUCTION_WEB_DIRECTION = 'Dirección web de la producción: ';
export const PRODUCTION_SUMMARY = 'Resumen de la producción: ';

export const PRODUCTION_YEAR_OPTIONS = () => {
    let max = new Date().getFullYear()
    let min = 1950
    let years = [{label: 'Seleccione un año', value: ''}]

    for (let iterator = max; iterator >= min; --iterator) {
        let year = {label: iterator.toString(), value: iterator}
        years.push(year);
    }

    return years;
};

export const ERROR = 'error';
export const SUCCESS = 'success';
export const ADD_ERROR_MESSAGE = "No se ha agregar correctamente.";
export const ADD_SUCCESS_MESSAGE = "Se ha agregado correctamente.";
export const EDIT_ERROR_MESSAGE = "No se ha actualizado correctamente.";
export const EDIT_SUCCESS_MESSAGE = "Se ha actualizado correctamente.";
export const REMOVE_ERROR_MESSAGE = "No se ha eliminado correctamente.";
export const REMOVE_SUCCESS_MESSAGE = "Se ha eliminado correctamente.";

export const LOG_IN = 'Iniciar Sessión';
export const LOG_OUT = 'Cerrar Sesión';
export const CLOSE = 'Cerrar';

export const LOG_IN_USERNAME = 'Nombre de usuario';
export const LOG_IN_PASSWORD = 'Contraseña';

export const ERROR_AUTOCOMPLETEFIELD_VALIDATOR = 'Seleccione una opción';
export const ERROR_RADIO_BUTTON_VALIDATOR = 'Seleccione una operación';
export const ERROR_TEXTFIELD_VALIDATOR = 'Ingrese información en el campo obligatorio';

export const TABLE_PAGINATION_LABEL = 'Cantidad de filas por página';

export const NO_OPTION_TEXT = 'No existe la opción';
export const LOADING = 'Cargando'; 

export const TABLE_LOCALIZATION = {
    body: {
        emptyDataSourceMessage: 'No hay ningún registro en la base de datos.',
        filterRow: {
            filterPlaceHolder: 'Filtrar',
            filterTooltip: 'Filtrar'
        },
    },
    header: {
        actions: ''
    },
    pagination: {
        labelDisplayedRows: '{from}-{to} de {count}',
        labelRows: 'filas',
        labelRowsPerPage: 'Filas por página',
        firstAriaLabel: 'Primera página',
        firstTooltip: 'Primera página',
        previousAriaLabel: 'Página anterior',
        previousTooltip: 'Página anterior',
        nextAriaLabel: 'Siguiente página',
        nextTooltip: 'Siguiente página',
        lastAriaLabel: 'Última página',
        lastTooltip: 'Última página',
    }
}

export const APP_NAME = 'SIPROBIB';
export const HOME = 'Inicio';
export const SEARCHER = 'Buscador';
export const MISSION = 'Misión';
export const ABOUT_US = 'Contáctenos';

export const MISSION_FIRST_PARAGRAPH = 'La \n base de datos de la Producción Bibliográfica Costarricense está conformada principalmente por los trabajos finales de graduación y los informes finales de las investigaciones realizadas en los centros e institutos de investigación de las instituciones productoras.';
export const MISSION_SECOND_PARAGRAPH = 'Pretende potenciar temas de investigación que sean de especial interés en materia educativa, divulgar los resultados de los hallazgos y la producción de información científica en el ámbito educativo. La razón principal de la creación de esta herramienta es la necesidad de saber qué tipo de investigación se ha realizado en el país sobre los diversos temas relativos a la educación, con el fin de incidir en la política pública.';

export const ABOUT_US_PARAGRAPH = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, sed. Quos iure voluptatibus earum consequuntur voluptate quisquam veritatis possimus illum aliquam ex, sequi temporibus explicabo quidem, quo maxime amet! Dolorum. ';

export const TWITTER_LINK = 'https://twitter.com/';
export const INSTAGRAM_LINK = 'https://www.instagram.com/';
export const GOOGLE_LINK = 'https://www.google.co.cr/';

export const HOME_TITLE = 'Sistema de Producciones Bibliográficas';
export const HOME_SUB_TITLE = 'Falta texto para colocar acá';

export const SEARCH_TITLE = 'Título de la producción';
export const SEARCH_AUTHORS = 'Autores de la producción';
export const SEARCH_DESCRIPTORS = 'Descriptores de la producción';
export const SEARCH_CATEGORY = 'Categoría de la producción';
export const SEARCH_YEAR = 'Año de la producción';
export const SEARCH_LOCATION = 'Ubicación de la producción';

export const ADVANCE_SEARCH = 'Búsqueda avanzada';
export const SEARCH = 'Buscar';

export const RESULT_AUTHORS = 'Autores: ';
export const RESULT_CATEGORY = 'Categoría: ';
export const RESULT_CLASIFICATION = 'Clasificación: ';
export const RESULT_DESCRIPTORS = 'Descriptores: ';
export const RESULT_LOCATION = 'Ubicación: ';
export const RESULT_SUMMARY = 'Resumen: ';
export const RESULT_TITLE = 'Título: ';
export const RESULT_WEB_DIRECTION = 'Dirección web: ';
export const RESULT_YEAR = 'Año: ';

export const RESULT_PAGE_TITLE = 'Información de la producción';