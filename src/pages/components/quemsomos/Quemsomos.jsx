//STYLES
import Image from 'next/image';
import Button from '../utils/Button';
import styles from './Quemsomos.module.css';

function Quemsomos() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.uperContent}>
        <h1>QUEM SOMOS</h1>
        <span>..</span>
        <p>
          A corretora de planos de saúde mais especializada de Belo Horizonte.
          Descubra como a Ideal Planos de Saúde pode encontrar o plano de saúde
          mais adeuqado para o seu momento e para o seu perfil com base em um
          diagnóstico preciso e de transparência.
        </p>

        <Button text="FAÇA UMA ANÁLISE DO MELHOR PLANO PARA VOCÊ" />
      </div>

      <div className={styles.midContent}>
        <div className={styles.imageContainer}>
          <Image
            src="/img/IMG11.jpg"
            alt="img 1"
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/img/IMG22.jpg"
            alt="img 1"
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/img/IMG33.jpg"
            alt="img 1"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.lowerContent}>
        <div className={styles.BgContianer}>
          <Image src="/img/BG - 2.jpg" fill className={styles.image} />
        </div>

        <div className={styles.lowerTextContent}>
          <h1>Opções abrangentes para</h1>
          <h2>CUIDAR DA SUA DAÚDE!</h2>
          <div>
            <Image
              src="/img/logos/LOGOS - Unimed.png"
              width={200}
              height={100}
              alt='logomarca unimed'
            />
            <Image
              src="/img/logos/LOGOS - Med Sênior.png"
              width={200}
              height={100}
              alt='logomarca med sênior'
            />
            <Image
              src="/img/logos/LOGOS - Hapvida.png"
              width={200}
              height={100}
              alt='logomarca hapvida'
            />
            <Image
              src="/img/logos/LOGOS - Sul America.png"
              width={200}
              height={100}
              alt='logomarca sul america'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Quemsomos;
