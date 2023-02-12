import Image from 'next/image'
import styles from './styles.module.scss'

export function Ticket() {
    return (
        <div className={styles.container}>

            {/* HEADER */}
            <div className={styles['header-ticket']}>
                <div className={styles['voo-code']}>
                    <p>Voo</p>
                    <span>SSR722</span>
                </div>
                
                <div className={styles['voo-date']}>
                    <p>Data</p>
                    <span>16/02/2023</span>
                </div>
            </div>

            <div className={styles['destiny']}>
                <div className={styles['code-city']}>
                    <p>São Paulo, Brasil</p>
                    <p>São Francisco, EUA</p>
                </div>

                <div className={styles['code-airports']}>
                    <span>GRU</span>
                    <p>-</p>
                    <span>SFO</span>
                </div>

                <div className={styles.hours}>
                    <p>17:00</p>
                    <p>04:48</p>
                </div>
            </div>

            <div className={styles['passenger-data']}>
                <div>
                    <p>Passageiro</p>
                    <span>Assento</span>
                </div>
                <div className={styles.assento}>
                    <p>Assento</p>
                    <span>28A</span>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles['column-right']}>
                    <div>
                        <p>Embarque</p>
                        <span className={styles['hours-embarque']}>16:15</span>
                    </div>
                    <div>
                        <p>Terminal</p>
                        <span>2</span>
                    </div>
                    <div>
                        <p>Portão</p>
                        <span>15</span>
                    </div>
                </div>

                <div className={'column-left'}>
                    <Image width="160" height="160" src="/qrcode.svg" alt="ecthon" />
                    <p>Grupo de embarque: 3</p>
                </div>
            </div>
            <footer className={styles['alert-footer']}>
                <span>Atenção: </span><p> o portão fecha 16:45</p>
            </footer>
        </div>
    )
}