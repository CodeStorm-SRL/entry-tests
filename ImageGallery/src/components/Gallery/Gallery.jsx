import styles from "./Gallery.module.css";
//importo lo useState
import { useState } from "react";
//importo il file data che contiene l'array di oggetti contenenti le immagini con i rispettivi id
import { dataPhotos } from "../../dataPhotos";

export default function Gallery() {
  //impoto lo useState
  const [actualPhoto, setActualPhoto] = useState(0);
  //creo la funzione di slideright. Aggiungerà 1 all'actualState che parte da 0. Avrà prima un controllo, se siamo arrivati in fondo non andrà in errore, bens' farà un return di niente
  function slideRightPhoto() {
    if (actualPhoto === dataPhotos.length - 1) {
      return;
    }
    setActualPhoto(actualPhoto + 1);
    console.log(actualPhoto);
  }
  //creo la funzione di slide left. Sottrarrà 1 all'actualState che parte da 0. Avrà prima un controllo, se siamo a 0 non andrà in errore sottraendo 1, farà un return di niente

  function slideLeftPhoto() {
    if (actualPhoto === 0) {
      return;
    }
    setActualPhoto(actualPhoto - 1);
    console.log(actualPhoto);
  }
  //creo un secondo state per mostrare o meno le descrizioni delle foto
  const [actualState, setActualState] = useState(false);
  //creo la funzione che mostri il modale con le descrizioni
  function showCaption() {
    if (actualState === false) {
      setActualState(true);
      console.log(actualState);
    } else {
      setActualState(false);
      console.log(actualState);
    }
  }
  return (
    <>
      <section className={styles.gallery} id="externalGalleryContainer">
        {/* creo un bottone che collega alla funzione di slide sinistra */}
        <div className={styles.buttonsContainer}>
          <button className={styles.buttons} onClick={slideLeftPhoto}>
            previous
          </button>
          {/* creo un bottone che collega alla funzione di slide destra */}

          <button className={styles.buttons} onClick={slideRightPhoto}>
            next
          </button>
        </div>
        {/* inserisco l'immagine che ha com src il valore src dell'array di oggetti data che ho creato e importato e come indice lo stato attuale */}
        <img
          // onClick={showCaption}
          src={dataPhotos[actualPhoto].srcImage}
          alt=""
        />
      </section>
      <section className={styles.caption}>
        <button onClick={showCaption}>Scopri di più</button>
        <div>
          {!actualState ? <p>{dataPhotos[actualPhoto].description}</p> : null}
        </div>
      </section>
    </>
  );
}
