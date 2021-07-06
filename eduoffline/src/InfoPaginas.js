import { faHome, faPhotoVideo, faBook, faFileAlt, faVideo } from '@fortawesome/free-solid-svg-icons';

const infoPaginas = [
    {
        nombre: "Inicio",
        link: "/",
        icono: faHome
    },
    {
        nombre: "Libros",
        link: "/libros",
        icono: faBook
    },
    {
        nombre: "Clases",
        link: "/clases",
        icono: faPhotoVideo
    },
    {
        nombre: "Recursos",
        link: "/recursos",
        icono: faFileAlt
    },
    {
        nombre: "Reuniones",
        link: "/reuniones",
        icono: faVideo
    }
];

export default infoPaginas;