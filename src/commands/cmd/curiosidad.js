const{MessageEmbed}=require('discord.js');

module.exports={
    name: 'curiosidad',
    description: 'Se postea una curiosidad random',
    usage: 'curiosidad',
    aliases: [],
    isPrivate: false,
    guildonly: false,
    category: 'Curiosidad',
    isOwner: true,
    run: curiosidad,  
}

function curiosidad(client, message, args) {
    
    const curiosdades = [
        "El pastel de queso (o cheesecake) tal y como lo conocemos hoy día es el resultado de muchas modificaciones a lo largo de miles de años. Se cree que su comienzo se remonta 4000 años, allá por la Antigua Grecia, en concreto en la isla de Samos.",
        "Un vaso de agua antes de ir a dormir reduce la tensión, evitando infartos y ataques al corazón.",
        "Las ratas se multiplican tan rápidamente que, en 18 meses, dos ratas pueden llegar a tener 1 millón de hijos.",
        "Si gritas durante ocho años, siete meses y seis días, habrás producido suficiente energía sonora como para calentar una taza de café.",
        "El Pato Donald fue vetado en Finlandia por no usar pantalón",
        "Hace 35 años en un barrio de Argentina (Caballito, Buenos Aires), se cayó un caniche de un piso 13, matando a una mujer de 75 años del impacto, otra señora de 46 años vió la situación y al intentar cruzar en socorro, fue atropellada por un colectivo de la linea 55. Por ultimo un hombre sufrió un para cardíaco al ver dicho episodio.En fin, tengan cuidado con los caniches.",
        "La silla eléctrica fue inventada por un dentista.",
        "Los osos polares son zurdos.",
        "Cada año muere más gente por culpa de los burros que por accidentes aéreos.",
        "La orina de gato brilla al ser iluminada con luz negra.",
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "El horno de pan más antiguo registrado se construyó por el 4.000 antes de cristo.",
        "En el 2.500 a. C. los griegos ya tenían más de 80 tipos de pan.",
        "Al nacer tenemos 300 huesos, pero de adulto solo tenemos 206.",
        "Un pez dorado tiene una memoria de 3 segundos.",
        "Los caracoles y las serpientes pueden dormir por 3 años.",
        "Las mariposas saborean con sus pies.",
        "El maní es uno de los principales ingredientes de la dinamita.",
        "Según estudios, hacia finales del siglo XVIII el 43% de la población mundial no superaba los 5 años.",
        "Hasta 1800, los zapatos del pie izquierdo y el derecho eran iguales.",
        "No puedes matarte aguantando la respiración.",
        "La guerra más corta de la historia tuvo lugar entre Zanzibar e Inglaterra en 1896. Zanzíbar se rindió a los 38 minutos.",
        "El cuerno de rinoceronte se compone de pelo compactado.",
        "Shakespeare inventó la palabra “assassination” (magnicidio) y “bump” (golpe).",
        "Los gatos emiten más de 100 sonidos vocales distintos, los perros solo 10.",
        "El pez gato, tiene más de 27.000 papilas gustativas, lo cual le coloca en el nº1 del ranking animal en este aspecto.",
        "“Dreamt” (soñado) es la única palabra inglesa que acaba en “mt”.",
        "Dos tercios del total de berenjenas del mundo se cultivan en Nueva Jersey.",
        "Una libélula vive aproximadamente 24 horas.",
        "El tiempo de espera medio hasta que nos dormimos es de siete minutos.",
        "Una pelota de golf oficial tiene 336 agujeritos.",
        "En el 5.000 A.C., los egipcios utilizaban cáscaras de huevo trituradas y pezuñas de animales molidas para limpiarse y abrillantarse los dientes.",
        "El mosquito tiene 47 dientes, el tiburón ballena tiene más de 4,500 y el pez gato tiene 9,280."
    ];  // total de curiosidades 34






    random = Math.round(Math.random() * (curiosdades.length - 1));//random()*(max-min)+min


    let embedCuriosidad = new MessageEmbed()
        .setTitle("Sabías que ...")

        .setColor(0xEB459E)
        .setDescription(curiosdades[random])
        .setFooter("Para mas información busca en google");

    message.channel.send({ embeds: [embedCuriosidad] });

}
