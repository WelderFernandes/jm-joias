import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from'./styles.module.scss'


export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return (
        <header className={styles.container}>
            <h1>Olá, Sejá Bem Vindo</h1>

            <span>{currentDate}</span>
        </header>
    );
}