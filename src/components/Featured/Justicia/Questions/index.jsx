import React, { useState, useEffect } from 'react'
import Question from './Question'
import Conclusion from './Conclusion'

const Questions = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    console.log('active', active)
  }, [active])

  const tree = [
    {
      statement: '¿Perteneces a algún pueblo indígena?',
      type: 'question',
      alternatives: [
        {
          statement: 'Sí',
          action: () => {
            setActive(1)
          },
        },
        {
          statement: `No`,
          action: () => {
            setActive(2)
          },
        },
      ],
    },
    {
      statement: '¿Por qué sistema preferirías ser juzgado?',
      type: 'question',
      explanation:
        'El pleno debe visar el artículo que permite que los indígenas de un mismo pueblo siempre tendrán la opción de elegir que sus disputas sean resueltas por un tribunal ordinario del Sistema Nacional de Justicia.',
      alternatives: [
        {
          statement: 'Sistema Nacional de Justicia',
          action: () => {
            setActive(2)
          },
        },
        {
          statement: `Sistemas de Justicia Indígenas`,
          action: () => {
            setActive(3)
          },
        },
      ],
    },
    {
      statement: 'Serás juzgado por:',
      conclusion: {
        title: 'Sistema Nacional de Justicia',
        content: [
          {
            type: 'group',
            content: [
              {
                type: 'text',
                statement: `Este sistema se estructura de la siguiente manera:`,
              },
              {
                type: 'box',
                statement: `Corte Suprema`,
                description: `Este es el <strong>máximo tribunal del país</strong>. Tiene la última palabra respecto de todos los casos jurisdiccionales que le toca resolver. Seguirá siendo integrada por un pleno de <strong>21 ministros</strong> y funciona en salas especializadas.`,
                content: [
                  {
                    type: 'box',
                    statement: `Corte de apelaciones`,
                    description: `Estos son los tribunales de alzada. Existe uno en cada región del país. Esta es la <strong>segunda instancia de un caso</strong>, es decir, al lugar en donde uno puede <strong>apelar</strong> respecto de un fallo de un tribunal de primera instancia.`,
                    content: [
                      {
                        type: 'box',
                        statement: 'Tribunales de Instancia',
                        content: [
                          {
                            type: 'box',
                            statement: 'Juzgados Civiles',
                            description: `Estos son los tribunales que existen actualmente y los que resuelven las <strong>controversias entre particulares</strong>.`,
                          },
                          {
                            type: 'box',
                            statement: 'Juzgados de garantía',
                            description: `Estos son los tribunales penales de primera instancia. Aquí es donde ocurren los <strong>controles de detención, las audiencias de formalización y todos los procesos previos</strong> antes de que un caso llegue a juicio oral.`,
                          },
                          {
                            type: 'box',
                            statement: 'Tribunales Orales en Lo Penal',
                            description: `Los <strong>casos penales que llegan a juicio oral, se resuelven en estos tribunales</strong>. Lo componen tres jueces quienes deciden si condenar o absolver al acusado.`,
                          },
                          {
                            type: 'box',
                            statement: 'Juzgados de Familia',
                            description: `Son los tribunales especializados que conocen los asuntos que involucran el <strong>derecho de familia</strong>, como por ejemplo las pensiones de alimentos, la tuición de los hijos, entre otros.`,
                          },
                          {
                            type: 'box',
                            statement: 'Juzgados Laborales',
                            description: `Estos son los tribunales que se hacen cargo de todos los <strong>litigios laborales</strong>.`,
                          },
                          {
                            type: 'box',
                            statement: 'Tribunales Ambientales',
                            description: `Estos tribunales pasarán a formar parte del Sistema Nacional de Justicia y son los encargados de resolver las <strong>materias ambientales</strong>, como por ejemplo las disputas por la construcción de proyectos hidroeléctricos, entre otros.`,
                          },
                          {
                            type: 'box',
                            statement: 'Tribunales de ejecución de penas',
                            description: `La creación de estos tribunales ha sido una demanda histórica del sistema penal. Tal como lo dice su nombre el objetivo de estas instancias será la de <strong>vigilar el cumplimiento de las condenas privativas de libertad</strong>. Además se harán cargo de la <strong>población penitenciaria</strong>, de otorgar los beneficios a los cuales pueden acceder y también velar por la <strong>protección de los derechos</strong> de los internos.`,
                          },
                          {
                            type: 'box',
                            statement: 'Tribunales administrativos',
                            description: `Estos tribunales son un anhelo que viene de hace mucho tiempo atrás. La Constitución de 1925 quiso instalar estos tribunales, pero la ley que los debía implementar nunca se dictó. Luego la Carta Magna de 1980 buscó el mismo propósito, pero tampoco se hizo la ley respectiva. La referencia desapareció para la reforma de 1989. Un año después el expresidente Patricio Aylwin envió el proyecto al Congreso, pero el mensaje nunca se tramitó. La función de estos nuevos tribunales será la de <strong>hacerse cargo de todas las acciones judiciales dirigidas en contra de la administración del Estado</strong>.`,
                          },
                          {
                            type: 'box',
                            statement: 'Juzgados vecinales',
                            description: `Tanto este como los Centros de Justicia Vecinal conforman la nueva "Justicia Vecinal" que <strong>reemplazará a los actuales Juzgados de Policía Local</strong>. Existirá un juzgado vecinal en cada comuna del país. Estos nuevos tribunales dejarán de depender de las municipalidades para pasar a formar parte del Sistema Nacional de Justicia.`,
                          },
                          {
                            type: 'box',
                            statement: 'Centros de justicia vecinal',
                            description: `Tanto este como los Juzgados Vecinales conforman la nueva "Justicia Vecinal" que <strong>reemplazará a los actuales Juzgados de Policía Local</strong>. Existirá un juzgado vecinal en cada comuna del país. Estos nuevos tribunales dejarán de depender de las municipalidades para pasar a formar parte del Sistema Nacional de Justicia.`,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      type: 'conclusion',
    },
    {
      statement: 'Serás juzgado por:',
      conclusion: {
        title: 'Sistemas de Justicia Indígenas',
        content: [
          {
            type: 'text',
            statement: `Las autoridades de los pueblos indígenas solo resolverán <i>conflictos entre miembros de un mismo pueblo originario</i> basándose en sus:
            <ul>
              <li>Costumbres</li>
              <li>Tradiciones</li>
              <li>Protocolos</li>
              <li>Sistemas normativos</li>
            </ul>
            Cada pueblo lo hará de manera distinta, según su propia cultura y el principio de autodeterminación:
            `,
            content: [
              {
                type: 'box',
                statement: `Corte Suprema`,
                description: `Este es el <strong>máximo tribunal del país</strong>. Tiene la última palabra respecto de todos los casos jurisdiccionales que le toca resolver. Seguirá siendo integrada por un pleno de <strong>21 ministros</strong> y funciona en salas especializadas.`,
                content: [
                  {
                    type: 'box',
                    statement: `Mapuche`,
                    quote: `Adolfo Millabur - Mapuche

                    El convencional representante del pueblo Mapuche Adolfo Millabur explica que su sistema de justicia otorga un valor distinto a “la relación con la naturaleza. También tenemos una mirada distinta respecto a cómo se lleva la convivencia y sobre todo cuando hay administración de la justicia”. 
                     
                    Sobre cómo podría diseñarse el nuevo sistema de justicia argumenta además que “hay que revalorizar, reconfigurar, ir en busca de todos esos valores en materia de justicia hacia los pueblos originarios. Hoy día no está definido, no existe un sistema patente, claro, identificable”. Además explica que la norma no significaría “un sistema paralelo, no creo que se vaya a hacer una configuración de esa manera”. `,
                  },
                  {
                    type: 'box',
                    statement: 'Aymara',
                    quote: `Luis Jiménez - Aymara

                    El convencional del pueblo Aymara Luis Jiménez explica que su sistema de justicia tiene ciertos elementos identificables. Por ejemplo, ciertas comunidades cuentan con “autoridades adicionales que hacen de amigable componedor,  conciliador, mediador de conflictos típicamente vecinales. Cosa de no acudir a la justicia ordinaria. Actualmente eso funciona más como una etapa prejudicial”.
                     
                    Explica además que “la justicia Aymara es una justicia de mediación. Y en otras comunidades se sigue aplicando en distintas materias. Entonces eso es lo que uno busca que se respete”. 
                    
                    Para el convencional es probable que el nuevo sistema avance en “una especie de consejo de autoridades tradicionales, o se vayan turnando, o se van a dividir por territorios. Yo creo que va un poco rescatando la antigua idea de estas autoridades que hacían de jueces de paz y actuaban como mediadores“.`,
                  },
                  {
                    type: 'box',
                    statement: 'Rapa Nui',
                    quote: `Tiare Aguilera - Rapa Nui

                    La convencional Rapa Nui Tiara Aguilera explica que con respecto a su pueblo “hay avances en relación al pluralismo jurídico, no es algo que tendríamos que comenzar desde cero”. 
                    
                    Agrega además que el sistema de justicia plurinacional tiene límites: ”Por ejemplo, yo jamás voy a poder, producto de la cosmovisión y todo lo que significa ser Rapa Nui, infringir algún derecho humano”.
                    
                    Aguilera cuenta que hay cierta estructura que podría entrar en el sistema Rapa Nui. “El consejo de ancianos surge en su momento principalmente por una demanda de restitución territorial y el reconocimiento de un tratado histórico y en eso se enmarca el consejo de  ancianos. Se sabe que las personas mayores tienen un rol primordial en la toma de decisiones”, afirma la constituyente.`,
                  },
                  {
                    type: 'box',
                    statement: 'Quechua',
                    quote: `Wilfredo Bacian - Quechua

                    “Los pueblos indígenas van a intentar tratar materias para resolver ciertos conflictos más locales probablemente. En ese sentido haciendo el símil del Juzgado de Policía Local por ejemplo”, afirma el convencional Quechua Wilfredo Bacian.
                    
                    El convencional explica además que el pueblo Quechua tenía como autoridad a los jueces de paz quienes “hacían el control moral de la comunidad y también de alguna manera orientada a las buenas conductas o las más óptimas que deberían tener las personas”.Bacian agrega que las autoridades se caracterizaban por ser personas “validadas por la comunidad, nombradas por ellos. Tenía también un reconocimiento de su vida intachable”.`,
                  },
                  {
                    type: 'box',
                    statement: 'Atacameño',
                  },
                  {
                    type: 'box',
                    statement: 'Diaguita',
                    quote: ` Eric Chinga - Diaguita

                    El representante del pueblo Diaguita Eric Chinga advierte que el pluralismo jurídico ”es algo histórico y nuevo, pero debemos esperar para saber cómo se implementará, como pueblo estamos conversando cómo podría ser"
                    
                    Además para la implementación de un nuevo sistema de justicia propio Chinga cree que "nuestras autoridades deberían acordarlo, entre todas las organizaciones del pueblo, desde el Valle de Copayapu al Mapocho, que es desde donde abarca el territorio Diaguita"`,
                  },
                  {
                    type: 'box',
                    statement: 'Colla',
                    quote: `Isabel Godoy - Colla

                    La representante Colla Isabel Godoy vislumbra la posibilidad de que el sistema de justicia resuelva “conflictos internos que puedan surgir dentro del mismo pueblo y que se tengan que resolver con la justicia propia”.

                    Además Godoy cuenta que su pueblo debe vivir “una recomposición cultural, una recomposición política del pueblo. Tenemos que avanzar en este periodo de transición hacia las generaciones jóvenes que se están formando”.`,
                  },
                  {
                    type: 'box',
                    statement: 'Kawashkar',
                  },
                  {
                    type: 'box',
                    statement: 'Yagán',
                  },
                  {
                    type: 'box',
                    statement: 'Chango',
                    quote: `Fernando Tirado- Chango

                    El convencional representante del pueblo Chango Fernando Chango plantea que “desde que existen los pueblos originarios nosotros aplicamos nuestra propia justicia, porque tenemos nuestras propias reglas, nuestras propias normas. Ya sea a través de nuestros abuelos, de nuestro consejo de ancianos de las machis, de los lonko y cacique, de las ñañas. Ellos para nosotros son el respeto de esto que emerge que es la enseñanza”. 
                    
                    Sobre cómo podría diseñarse el sistema de justicia Chango sugiere “hacer un consejo de ancianos o un consejo de caciques, un consejo de machis que se delibere acerca del acontecimiento y después si no resuelve, y el acusado no quisiera someterse a lo que se está aplicando, bueno se le dio una oportunidad, no quiso, y tendrá que afrontar la justicia que tenga que enfrentar”. `,
                  },
                ],
              },
            ],
          },
        ],
      },
      type: 'conclusion',
    },
  ]

  return (
    <div>
      {tree[active].type === 'question' && (
        <Question
          question={tree[active]}
          index={active + 1}
          total={tree.length}
        />
      )}
      {tree[active].type === 'conclusion' && (
        <Conclusion
          data={tree[active]}
          index={active + 1}
          total={tree.length}
        />
      )}
    </div>
  )
}

export default Questions
