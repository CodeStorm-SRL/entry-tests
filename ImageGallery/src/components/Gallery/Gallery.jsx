import styles from "./Gallery.module.css";
//importo lo useState
import { useState } from "react";
//importo il file data che contiene l'array di oggetti contenenti le immagini con i rispettivi id
import { dataPhotos } from "../../dataPhotos";

//importo entrambi i png per lo slider
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

export default function Gallery() {
  //importo lo useState
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
  const [actualState, setActualState] = useState(true);
  //creo la funzione che mostri il modale con le descrizioni
  function showCaption() {
    //la funzione controllerà lo state di actualState e lo cambierà al click del pulsante.

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
      <section className={styles.galleryContainer}>
        <section className={styles.gallery}>
          {/* creo un bottone che collega alla funzione di slide sinistra */}
          <button className={styles.buttons} onClick={slideLeftPhoto}>
            <img className={styles.arrow} src={leftArrow} alt="" />
          </button>
          {/* inserisco l'immagine che ha com src il valore src dell'array di oggetti data che ho creato e importato e come indice lo stato attuale */}
          <img
            // onClick={showCaption}
            src={dataPhotos[actualPhoto].srcImage}
            className={styles.sdgsImages}
            alt=""
          />
          {/* creo un bottone che collega alla funzione di slide destra */}

          <button className={styles.buttons} onClick={slideRightPhoto}>
            <img className={styles.arrow} src={rightArrow} alt="" />
          </button>
        </section>
        <button className={styles.discoverMore} onClick={showCaption}>
          Discover More
        </button>
        <article className={styles.caption}>
          <div>
            {/* Il contenuto testuale di ogni immagine verrà mostrato dinamicamente tramite un controllo di actualState. Inizierà nascosto e ad ogni click cambierà da true a false per essere visibile o nascosto */}
            {!actualState ? (
              <div>
                {" "}
                <h3>{dataPhotos[actualPhoto].id}</h3> <br />{" "}
                <p>{dataPhotos[actualPhoto].description}</p>
              </div>
            ) : null}
          </div>
        </article>
      </section>
    </>
  );
}
