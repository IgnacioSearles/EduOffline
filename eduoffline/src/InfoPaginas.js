import { faHome, faPhotoVideo, faBook, faComments, faAtlas } from '@fortawesome/free-solid-svg-icons';

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
        icono: faAtlas
    },
    {
        nombre: "Mensajes",
        link: "/mensajes",
        icono: faComments
    }
];

export default infoPaginas;