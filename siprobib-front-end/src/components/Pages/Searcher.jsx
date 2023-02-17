import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import GridResult from '../SearchComponents/GridResults';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '../SearchComponents/Select';
import TextField from '@mui/material/TextField';

/* Se siguió la guía que se encuentra en https://emotion.sh/docs/css-prop para permitir que el motor de css Emotion, 
 * el cual usa Material UI, permitiera estilizar los componentes y etiquetas HTML. La línea de abajo es un macro que 
 * permite el buen funcionamiento de Emotion, por lo que es muy importante no eliminarlo.
 */

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const baseDeDatos = [
    {
        id: 1,
        title: 'Conceptualización de la docencia universitaria en las Sedes Regionales de la Universidad de Costa Rica',
        authors: 'EDGAR CHAVARRÍA S, KEMLY JIMÉNEZ FALLAS, ANA CECILIA HERNÁNDEZ R, MARÍA EUGENIA VENEGAS RENAULD',
        descriptores: 'SEDES REGIONALES, UNIVERSIDAD DE COSTA RICA, DOCENCIA',
        clasificación: '13.09.09 312',
        año: '2002',
        categoria: 'Proyecto IIMEC',
        locations: 'SEDES REGIONALES, DOCENCIA, UNIVERSIDAD DE COSTA RICA',
        abstract: 'El documento recoge el informe maestro del proyecto de investigación "Conceptualizacion de la docencia en las sedes regionales de la Universidad de Costa Rica". Tanto en el proceso de investigación, como en la elaboración del presente informe, se presentan resultados de trabajos compartidos, pero también de trabajos asumidos individualmente. Ello es así, no sólo por las características complejas que asumió la investigación, por las enormes dificultades que hubo que afrontar, pero también por la necesidad de respetar los enfoques de los investigadores que constituyeron el equipo. El propósito del proyecto es caracterizar la docencia desde las Sedes para ampliar, profundizar e interpretar sus significados en la prácticas pedagógicas de la Universidad de Costa Rica y así acercarse a la construcción de una pedagogía universitaria. La investigación no pretende homogenizar la función docente en la Universidad de Costa Rica, sino rescatar las particularidades en cada una de las sedes, incorporando las demandas del contexto regional y su relación con las exigencias y necesidades del contexto nacional e internacional. El Proyecto se planteó para ser desarrollado desde una perspectiva cualitativa. Bajo este tipo de aproximación, se tuvo claro en todo momento, el interés por conocer desde los propios actores, las formas mediante las cuales se asume y concreta la docencia y derivar desde el análisis y la reflexión, los constructos con los cuales se conceptualiza. El documento presenta introducción, conclusiones y recomendaciones generales y un informe de cada sede por separado.',
        direccionWeb: 'http://repositorio.inie.ucr.ac.cr/jspui/handle/123456789/245'
    },
    {
        id: 2,
        title: 'Develando la acción pedagógica para transformarla.',
        authors: 'ANA LUPITA CHAVES SALAS',
        descriptores: '	LENGUAJE INTEGRAL, EDUCACIÓN PREESCOLAR, ESCRITURA, APRENDIZAJE, GÉNERO, LECTURA, INVESTIGACIÓN',
        clasificación: '06.03.06 782',
        año: '2001',
        categoria: 'Proyecto IIMEC',
        locations: 'Instituto de Investigación en Educación, Universidad de Costa Rica',
        abstract: 'Esta investigación nace con el propósito de develar la práctica pedagógica que se produce en un salón de clase de educación preescolar que se fundamenta en la filosofía del "Lenguaje Integral", se desea interpretar las interacciones que se dan en el contexto natural del aula: las actitudes del maestro, los procesos iniciales de lecto-escritura, las relaciones de poder, el papel que desempeña la maestra, los niños y las niñas en el proceso de enseñanza y aprendizaje, la organización del tiempo y del espacio, en fin analizar diversos factores que intervienen en la realidad natural, compleja y singular del aula. Este proyecto de investigación no propone objetivos sino plantea interrogantes. Estas interrogantes se fueron transformando en el transcurso del proceso investigativo, gracias a las observaciones que se hicieron en el salón de clase y a la lectura de textos sobre pedagogía crítica e investigación cualitativa. En un primer momento, este estudio tuvo un enfoque psicologista que daba énfasis a los procesos iniciales de lecto-escritura, posteriormente se incluyó la perspectiva sociopolítica de la educación se eliminaron unas preguntas, otras se fusionaron y se plantearon otras relacionadas con género y relaciones de poder en el aula. Es una investigación de tipo cualitativa. Para recolectar la información se utilizó técnicas directas como la observación participantes y las entrevistas, y también técnicas indirectas como el análisis e documentos oficiales y personales que fueron facilitados por la maestra del grupo. Como resultado más importante está el cambio que experimentaron las investigadoras, ya que al incluir la perspectiva política de la educación en el estudio, se observó la realidad del aula de manera diferente, como un espacio donde se producen las desigualdades de la sociedad, muchas veces de manera inconciente.',
        direccionWeb: 'http://repositorio.inie.ucr.ac.cr/jspui/handle/123456789/246'
    },
    {
        id: 3,
        title: 'Evaluación de los proyectos de innovación pedagógica e investigación educativa, en el marco del proyecto "Apoyo al mejoramiento inicial de docentes de la educación primaria básica de la coordinación educativa y cultural de centroamérica (CECC)"',
        authors: 'ANA LUPITA CHAVES SALAS, JULIETA CASTRO BONILLA, JACQUELINE GARCÍA FALLAS, NAYIBE TABASH BLANCO',
        descriptores: 'RELACIONES HUMANAS, FORMACIÓN DE DOCENTES, EDUCACIÓN PRIMARIA, EVALUACIÓN, PROYECTOS DE DESARROLLO',
        clasificación: '01.01.06 272',
        año: '2002',
        categoria: 'Proyecto IIMEC',
        locations: 'Instituto de Investigación en Educación, Universidad de Costa Rica',
        abstract: 'El objeto de esta investigación es la evaluación de los proyectos de innovación e investigación educativa llevados a cabo en los países centroamericanos en el marco del programa "Apoyo al Mejoramiento de la Formación Inicial de Docentes de la Educación Primaria o Básica en Centroamérica", desarrollado por la Coordinación Educativa y Cultural Centroamericana y la Embajada Real de los Países Bajos. El documento tiene tres capítulos donde se desarrollan los temas de: Contexto de la evaluación, se incluye la información correspondiente a objetivos, marco conceptual y diseño metodológico para llevar a cabo las propuestas evaluativas; Análisis y resultados, se incluyen las características generales de los proyectos de investigación e innovación educativa. Además se presenta el estudio realizado por el equipo de evaluadoras a los once proyectos de investigación educativa, organizados por país; y Consideraciones generales, se presenta la reflexión final del equipo de evaluadoras en torno a los proyectos analizados. Los objetivos de la investigación son: - Valorar el impacto y la influencia potenciales que podrían tener los resultados e los proyectos ejecutados, en los formadores y en la formación inicial de docentes en sus propios países y en la región en general. - Valorar el papel que jugó, en el desarrollo de los proyectos la supervisión ejercida por la Dirección del proyecto, la coordinación nacional del proyecto y los supervisores nombrados para proyectos de investigación. - Valorar el impacto e influencia posible en los resultados de los proyectos de innovación pedagógica en la actualización profesional de los maestros centroamericanos. Los resultados más importantes fueron: - Las propuestas de investigación educativa incorporaron sectores sociales y regiones que denotan marcadas necesidades educativas y socioeconómicas, según el contexto de cada país. - Algunos de los proyectos de investigación tienen calidad técnica y claridad conceptual. Asimismo se proyectan hacia una formación integral del ser humano, capas de crear y trasformar su contexto.',
        direccionWeb: 'http://repositorio.inie.ucr.ac.cr/jspui/handle/123456789/247'
    },
    {
        id: 4,
        title: 'El trabajo docente de los profesores de matemáticas: Diseño, desarrollo y análisis de estrategias para su transformación.',
        authors: 'ILEANA CONTRERAS MONTES DE OCA',
        descriptores: 'MATEMÁTICAS, CURRÍCULO, EDUCACIÓN SECUNDARIA',
        clasificación: '18.08.01 363',
        año: '2002',
        categoria: 'Proyecto IIMEC',
        locations: 'Instituto de Investigación en Educación, Universidad de Costa Rica',
        abstract: 'La investigación a la que corresponde este informe tiene como antecedente inmediato un estudio anterior titulado “El rol del profesor de matemáticas en la Educación secundaria: Algunos determinantes y consecuencias”. Como resultado de dicho esfuerzo inicial, surgió la inquietud por indagar estrategias de trabajo con los profesores en servicio y con los estudiantes de carrera de enseñanza de las matemáticas, que previesen una trasformación del quehacer docente en este campo, de forma tal que se diese un acercamiento entre la teoría y la practica de la educación de la matemática, Juntas estas dos investigaciones constituyen una línea de investigación alrededor del quehacer docente de los profesores de matemáticas en la educación secundaria. Los objetivos más importantes de esta investigación fueron: ? ¿De qué manera la participación de los departamentos de matemáticas en la construcción de nuevas experiencias de trabajo, coherentes con lo que se espera del quehacer docente de los profesores que lo integran, puede incidir en la trasformación del quehacer cotidiano de los profesores y el fortalecimiento de la imagen que éstos tienen en su labor? ? ¿Que incidencia puede tener el intercambio y difusión de experiencias innovadoras en la trasformación profesional de los profesores de matemáticas que actualmente ejercen esa profesión? ? ¿Qué criterios nos permiten operacionalizar el rol de la literatura reciente y los enfoque vigentes en la política educativa y en los programas de estudio, perfilan como el esperado en le desempeño profesional de los profesores de matemáticas? Los resultados más relevantes fueron los siguientes: ? Se derivó un conjunto de propuestas concretas-lineamientos, metodología, materiales- para mejorar el proceso de formación inicial de los profesores de matemáticas en la educación secundaria. ? Se impulsó una serie de actividades nacionales, que continúan hasta la fecha, dedicadas análisis e intercambio de experiencias en este campo. ? Se identificaron alternativas de difusión e intercambio de experiencias innovadoras orientadas a la trasformación del quehacer docente de los profesores de matemáticas en la dirección establecida en los criterios consensuados.',
        direccionWeb: 'http://repositorio.inie.ucr.ac.cr/jspui/handle/123456789/248'
    },
    {
        id: 5,
        title: 'Socialización genérica e identidad profesional en Trabajo Social',
        authors: 'XINIA FERNÁNDEZ VARGAS',
        descriptores: 'TRABAJO SOCIAL, INFLUENCIA SOCIAL, TRABAJADORES SOCIALES, IDENTIDAD, GÉNERO',
        clasificación: '13.09.09 877',
        año: '2002',
        categoria: 'Proyecto IIMEC',
        locations: 'Instituto de Investigación en Educación, Universidad de Costa Rica',
        abstract: 'La investigación busca explicar las relaciones entre la socialización genérica y la construcción de las identidades personal y profesional de las y los trabajadores sociales. El Trabajo Social como profesión conformada mayoritariamente por mujeres reproduce las características que la sociedad patriarcal le asigna a éstas y a lo femenino. Se busca a partir de los resultados la incorporación en las distintas instancias de formación de la perspectiva de género como opción explicativa, formativa y de análisis para la modificación de las relaciones de desigualdad que se viven cotidianamente en los espacios familiares y laborales de esos profesionales. La metodología empleada es cualitativa. Busca rescatar las percepciones y significados que las personas participantes dan a lo femenino y lo masculino, cómo lo viven en sus experiencias concretas. La perspectiva de género y la teoría de las representaciones sociales son los marcos teóricos de referencia para el análisis de la información la que se recopiló a partir de la reconstrucción de las historias de vida de cuatro mujeres y tres varones profesionales en Trabajo Social. El análisis incluyó la participación permanente de las personas entrevistadas y fue una constante durante el proceso de investigación lo que a su vez permitió construir rupturas de los esquemas aprendidos tanto en ellas como en la investigadora. Las historias de vida evidenciaron que todas las personas participantes fueron construidas a partir de los esquemas de crianza definidos en las sociedades patriarcales. Hombres y mujeres asumen características diferenciadas según su sexo biológico. Las relaciones sociales que se establecen a partir de esos patrones reproducen y legitiman la desvalorización de lo femenino frente a lo masculino. Las y los trabajadores sociales entrevistados reproducen en sus vidas personales y laborales las asimetrías derivadas del patriarcado sin que se percaten de los modelos a que responden sus actuaciones. Las participantes han asumido la maternidad y todos sus mandatos como su primera y casi exclusiva obligación, lo que tiene implicaciones en sus posibilidades de realizar cualquier otro tipo de actividad extra a su empleo. Los participantes no muestran que las obligaciones derivadas de la paternidad y la familia sean obstáculos para sus metas personales. La elección de carrera está influenciada por las características genéricas. El Trabajo Social es considerado una profesión de servicio, ayuda y búsqueda de soluciones a los problemas y necesidades de otras personas. Desde sus orígenes han sido mayoritariamente mujeres las vinculadas a la profesión al creérseles más sensibles e interesadas en lo social y en las necesidades de la gente. Las funciones y tareas que las personas entrevistadas realizan en sus lugares de trabajo reproducen las tareas que realizan las mujeres en la sociedad. La formación profesional carece de una visión de género que permita evidenciar cómo los procesos de socialización permean todas las actividades humanas y las relacionadas con el ejercicio profesional. Deben incluirse en el curriculum de la Escuela actividades académicas y vivenciales, bibliografía y nuevos enfoques teóricos que permitan hacer rupturas significativas con los esquemas que subyacen en la forma en que están planteadas actualmente las cosas. Los procesos de capacitación y sensibilización deben atravesar todas las actividades que se realicen e involucrar a docentes, estudiantes y personal administrativo. Para replantear y fortalecer la identidad profesional debemos empezar necesariamente por la identidad genérica.',
        direccionWeb: 'http://repositorio.inie.ucr.ac.cr/jspui/handle/123456789/249'
    },
    {
        id: 6,
        title: 'La práctica curricular de la educación superior costarricense (1843-1941): Fundamentos de una teoría curricular',
        authors: 'ALICIA SEQUEIRA RODRÍGUEZ',
        descriptores: 'CURRÍCULO, EDUCACIÓN SUPERIOR',
        clasificación: '06.03.06 389',
        año: '2002',
        categoria: 'Proyecto IIMEC',
        locations: 'Instituto de Investigación en Educación, Universidad de Costa Rica',
        abstract: 'Esta investigación pretendió responder a la pregunta ¿Cuáles son las características teóricas que ha generado la práctica curricular de la Educación Superior de Costa Rica entre 1843-1941? El propósito fue aclarar el papel de la práctica de la educación superior en el período señalado de manera que los hechos curriculares ocurridos en el pasado pudieran dar luz para atesorar lo pertinente y, a la vez, poner atención a los factores que no contribuyeron a dar impulso a la educación superior. Los objetivos propuestos para la investigación no se alcanzaron en su totalidad como se indica en las conclusiones, implicaciones y recomendaciones; debido a que la investigación se tuvo que interrumpir por tiempos prolongados y, por otra parte, el tiempo asignado fue demasiado corto para poder concluir una tarea de esta magnitud pues el período investigado es de un siglo.',
        direccionWeb: 'http://repositorio.inie.ucr.ac.cr/jspui/handle/123456789/250'
    },
]

const categorias = [
    {value:'1', label:'Proyecto IIMEC'}
]

const ubicacion = [
    {value:'1', label:'SEDES REGIONALES, DOCENCIA, UNIVERSIDAD DE COSTA RICA'},
    {value:'2', label:'Instituto de Investigación en Educación, Universidad de Costa Rica'}
]

const filterCard = css({
    marginTop: '2vh',
    display: 'none'
})

const searchButton = css({
    margin: '10px'
});

const searchField = css({
    margin: '5px'
});

const resultsGrid = css({
    margin: '10vh 0 10vh 0'
});

/*
 * Este componente es el encargado de mostrar la interfaz en donde se puede realizar la búsqueda de las producciones 
 * deseadas. Estas búsquedas se pueden realizar según título, autor o descriptor. Utilizando como posible filtros
 * la categoría y la ubicación en donde se encuentra la producción.
 */
function Searcher(props){
    // Hooks utilizados para manejar la hilera de búsqueda y el tipo de búsqueda (por título, autor, descriptor, todos).
    const [searchString, setSearchString] = useState('');
    const [searchParam, setSearchParam] = useState('all');

    const [results, setResults] = useState(null);
    
    // Evento que permite que al presionar ENTER en la barra de búsqueda se realice la búsqueda deseada.
    function handleEnterKey(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            document.getElementById('submit-button').click();
        }
    }

    // Hook que agrega el evento o elimina el evento "handleEnterKey".
    React.useEffect(() => {
        let textField = document.getElementById('search-bar');
        textField.addEventListener('keydown', handleEnterKey);

        return () => {
            textField.addEventListener('keydown', handleEnterKey);
        };
    }, []);

    /*
     * Función que representa el evento que se encarga de enviar el formulario de búsqueda al backend para que se 
     * despliegue la información solicitada.
     */
    function handleSubmit(){
        let filters = document.getElementById('filter-card');
        filters.style.display = 'block';
        setResults(baseDeDatos);
    }

    return(
        <Container>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className="searcherWrapper">
                <div className="searcherTittle">
                    <h2>Buscador de producciones</h2>
                </div>
                <div className="searcher">
                    <Box component="form" noValidate autoComplete="on">
                        <FormControl>
                            <TextField required id="search-bar" label="Terminos de búsqueda" variant="outlined" onChange={e => setSearchString(e.target.value)} css={searchField} />
                        </FormControl>
                        <Button id="submit-button" variant="contained" color="primary" onClick={handleSubmit} css={searchButton}><span className="material-symbols-outlined">search</span>Buscar</Button>
                        <br/>
                        <FormControl>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="all" row>
                                <FormControlLabel name="search-param" value="tittle" control={<Radio />} label="Título" onChange={e => setSearchParam(e.target.value)} />
                                <FormControlLabel name="search-param" value="author" control={<Radio />} label="Autor" onChange={e => setSearchParam(e.target.value)} />
                                <FormControlLabel name="search-param" value="published-date" control={<Radio />} label="Fecha de publicación" onChange={e => setSearchParam(e.target.value)} />
                                <FormControlLabel name="search-param" value="descriptors" control={<Radio />} label="Descriptores" onChange={e => setSearchParam(e.target.value)} />
                                <FormControlLabel name="search-param" value="all" control={<Radio />} label="Todos" onChange={e => setSearchParam(e.target.value)} />
                            </RadioGroup>
                        </FormControl>  
                        <br/>
                        <Card id="filter-card" css={filterCard}>
                            <Select label={'Categoria'} contents={categorias} />
                            <Select label={'Ubicación'} contents={ubicacion} />
                        </Card>
                    </Box>
                </div>
                <div className="results" css={resultsGrid}>
                    {results && <GridResult results={results} />}
                </div>
            </div>
        </Container>
    );
}

export default Searcher;