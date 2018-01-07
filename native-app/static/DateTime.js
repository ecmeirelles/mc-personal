import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export default (type, dateTime) => {
    return type === "date" ? moment(dateTime).format("DD/MM/YYYY") : moment(dateTime).format("HH:mm") ;
}