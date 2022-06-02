import React from 'react';

class Mission extends React.Component{
    render(){
        return(
            <div className="missionWrapper">
                <div className="content">
                    <h1>Misión</h1>
                    <p>  
                        La base de datos de la Producción Bibliográfica Costarricense está conformada principalmente por los trabajos finales de graduación y los informes finales de las investigaciones realizadas en los centros e institutos de investigación de las instituciones productoras.
                    </p>
                    <p>
                        Pretende potenciar temas de investigación que sean de especial interés en materia educativa, divulgar los resultados de los hallazgos y la producción de información científica en el ámbito educativo.
                        La razón principal de la creación de esta herramienta es la necesidad de saber qué tipo de investigación se ha realizado en el país sobre los diversos temas relativos a la educación, con el fin de incidir en la política pública.
                    </p>
                </div>
            </div>
        );
    }
}

export default Mission;